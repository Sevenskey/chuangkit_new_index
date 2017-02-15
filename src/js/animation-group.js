/*Animation Group
* Coding by Sun
* Email: sevenskey@163.com
* Build since: 2017-2-1
* Latest update: 2017-2-14
*
* Compatibility:
* Array.isArray() - IE9
* getComputedStyle() - IE9
* Line 209 - maybe Chrome only
*
* Speed Limitation:
* Object.keys().forEach()
*
* Format:
* {
*   id1 : { style1 : value, classList : ['class1'] },
*   id2 : ['class1', 'class2']
* }
*
* Orgnization:
* AnimationGroup < Shortcut
*                     ^
*                 FadeInOrOut
*/
;(function( window ){

    // 渐显或渐隐
    class FadeInOrOut {
        constructor ({
            elemObj = null, // 所要操作的元素对象
            delay = 1, // 元素的 dispaly 置为 none 前延迟的时间
            mode = 'hide', // 模式，hide 或 show
        }) {
            this.elemObj = elemObj;
            this.delay = delay * 1000;
            this.mode = mode;

            this.launch();
        }

        launch () {
            if ( this.mode == 'hide')
                this.hide();
            else if ( this.mode == 'show' )
                this.show();
        }

        hide () {
            this.helper( function() {
                    this.elemObj.style.opacity = 0;
                }, function() {
                    this.elemObj.style.display = 'none';
                } );
        }

        show () {
            this.helper( function() {
                    this.elemObj.style.display = 'block';
                    this.elemObj.style.opacity = 0;
                    setTimeout ( () => {
                        this.elemObj.style.opacity = 1;
                    }, 20 );
                }, null );
        }

        helper ( cbOutside, cbInside, delay ) {
            cbOutside.call( this );
            if ( cbInside )
                setTimeout( () => {
                    cbInside.call( this );
                }, delay | this.delay );
        }
    }
    
    // 快捷选项
    class Shortcut {
        constructor () {
        }

        getShortcutList () {
            const self = this;

            return {
                show : function ( value, id, all, styleSet, classSet ) {
                    self.showOrHidehelper.call( this, value, id, 'show' );
                },
                hide : function ( value, id, all, styleSet, classSet ) {
                    self.showOrHidehelper.call( this, value, id, 'hide' );
                },
                classList : function( value, id, all, styleSet, classSet ) {
                    if ( Array.isArray( value ) )
                        classSet[id] = value;
                },
                changeTo : function( value, id, all, styleSet, classSet ) {
                    // 待实现
                },
            };
        }

        // 设定对偶的快捷选项，用于回滚时的恢复
        getDualShortList () {
            return {
                show : 'hide',
                hide : 'show',
            };
        }

        // show & hide 帮助函数
        showOrHidehelper ( value, id, mode ) {
            var config = {
                elemObj : this.objList[id],
                mode : mode,
            };
            var elemStyleObj = getComputedStyle( this.objList[id] );

            if ( typeof value == 'number' )
                config.delay = value;
            else if ( value ) {
                config.delay = parseFloat( elemStyleObj.getPropertyValue('transition-delay') ) + parseFloat( elemStyleObj.getPropertyValue('transition-duration') );
            }
            new FadeInOrOut( config );
        }
    }
    
    class AnimationGroup {
        constructor ({
            prev = null, // 变化前的样式。可选。一般在 prev 中配置 transition
            next = null, //
            transition = '', // 可在此配置默认的 transition 规则，即如果 prev 中找不到 transition 的配置则使用该配置。可选
        }) {
            this.prev = prev;
            this.next = next;
            this.transition = transition;

            this.isMounted = false;
            this.isRollbacked = false;
            this.isBackuped_sc = false;

            /*
             * Data Structure:
             *
             * this.shortcut:
             * {
             *   shortcut1 : function( value, id, all, styleSet, classSet ),
             *   shortcut2 : function(),
             * }
             *
             * this.dualShortcut:
             * {
             *   shortcut_m : shortcut_n(String),
             * }
             */
            var shortcut = new Shortcut();
            this.shortcut = shortcut.getShortcutList();
            this.dualShortcut = shortcut.getDualShortList();

            this.init();
        }

        init () {
            if ( this.next ) {
                // 生成元素对象字典
                this.genObjList();

                // 分离母数据结构
                this.separateNext();
                this.separatePrev();

                // 挂载 prev 样式
                this.mountPrevStyle();

                // 挂载默认 transition
                this.mountTransition();

                // 挂载原有样式和类
                this.backupOldStyle();
                this.backupOldClass();

                // 备份与 next 中对偶的 shortcut
                this.backupShortcut();
            }
        }

        /*
         * Data Structure:
         *
         * this.objList:
         * {
         *   id1 : element object(Object),
         *   id2 : element object,
         * }
         */
        // 根据 next 生成待操作的对象的列表
        genObjList () {
            this.objList = {};

            for ( var el in this.next )
                this.objList[el] = document.getElementById(el);
        }

        // 挂载 transition
        mountTransition () {
            var obj, temp;

            for ( var el in this.next ) {
                obj = this.objList[el];

                // 注意：关于 transition 的默认值( 'all 0s ease 0s' )可能只适用于Chrome，暂未测试
                if ( this.transition && ( getComputedStyle( obj, null ).getPropertyValue( 'transition' ) == 'all 0s ease 0s' ) )
                    obj.style.transition = this.transition;
            }
        }

        /*
         * Data Structure:
         *
         * all:
         * {
         *   id1 : { (Objec,Array)
         *     style1 : value(String),
         *     style2 : value,
         *     shortcut1 : value(Boolean,Object,Number,Array),
         *     shortcut2 : value,
         *   },
         *   id2 : [class1, class2],
         * }
         *
         * styleSet:
         * {
         *   id1 : { (Object)
         *     style1 : value(String),
         *     style2 : value,
         *   },
         *   id2 : {
         *     style1 : value,
         *   }
         * }
         *
         * classSet:
         * {
         *   id1 : [class1(String), class2], (Array)
         *   id2 : [class1]
         * }
         *
         * shortcutSet:
         * {
         *   id1 : { (Object)
         *     shortcut1 : { (Object)
                 all : next set or prev set the shortcut belongs to(Object),
                 value : value(Number,Boolean,Object,Array),
                 styleSet : styleSet belongs to all(Object),
                 classSet : classSet belongs to all(Object),
         *     },
         *     shortcut2 : {
                 all : all,
                 value : value,
                 styleSet : styleSet,
                 classSet : classSet,
         *     },
         *   },
         *   id2 : {
         *     shortcut1 : {
                 all : all,
                 value : value,
                 styleSet : styleSet,
                 classSet : classSet,
         *     }
         *   }
         * }
         */

        // 将样式和样式类以及 shortcut 分离为三个集合
        separate ( all, styleSet, classSet, shortcutSet ) {
            var obj, classList;
            
            if ( all )
                for ( var id in all ) {
                    obj = all[id];
                    if ( Array.isArray( obj ) )
                        classSet[id] = obj;
                    else if ( typeof obj == 'object' )
                        this.checkRepeat( obj, this.shortcut,
                            ( shortcut ) => {
                                if ( ! shortcutSet[id] )
                                    shortcutSet[id] = {};

                                shortcutSet[id][shortcut] = {
                                    all : all,
                                    value : obj[shortcut],
                                    styleSet : styleSet,
                                    classSet : classSet,
                                };

                                delete obj[shortcut];
                            }, ( property ) => {
                                styleSet[id] = obj;
                            } );
                }
        }

        // 分离 next 列表中的
        separateNext () {
            this.classSet = {};
            this.styleSet = {};
            this.shortcutSet = {};

            this.separate( this.next, this.styleSet, this.classSet, this.shortcutSet );
        }

        // 分离 prev 列表中的
        separatePrev () {
            this.classSetPrev = {};
            this.styleSetPrev = {};
            this.shortcutSetPrev = {};

            this.separate( this.prev, this.styleSetPrev, this.classSetPrev, this.shortcutSetPrev );
        }

        // 执行 shortcut
        executeShortcut ( shortcutSet, isRollback ) {
            var id, scObj;

            this.twoLeveTraverse( shortcutSet,
                function( id_ ) {
                    id = id_;
                }, function( shortcut, idObj ) {
                    scObj = idObj[shortcut];
                    this.shortcut[shortcut].call( this, scObj.value, id, scObj.all, scObj.styleSet, scObj.classSet );
                } );
        }

        // 挂载样式类，同时去掉指定的样式类
        mountClass ( classSet, removed ) {
            var el, elem;

            for ( el in classSet ) {
                elem = this.objList[el];
                classSet[el].forEach( ( className ) => {
                    if ( elem.className.indexOf( className ) == -1 )
                        elem.className += ( ' ' + className );
                } );
            }

            if ( removed )
                Object.keys( removed ).forEach( ( el ) => {
                    elem = this.objList[el];
                    removed[el].forEach( function ( className ) {
                        elem.className = elem.className.replace( className, '' );
                    } );
                } );
        }

        // 挂载样式
        mountStyle ( styleSet ) {
            var obj;

            this.twoLeveTraverse( styleSet,
                function( id ) {
                    obj = this.objList[id];
                }, function( property, style ) {
                    obj.style[property] = style[property];
                } );
        }

        // 挂载变化前的样式
        mountPrevStyle () {
            this.mountStyle( this.styleSetPrev );
            this.executeShortcut( this.shortcutSetPrev );
            this.mountClass( this.classSetPrev );
        }

        // 变身！
        mountNextStyle () {
            if ( ! this.isMounted ) {
                this.mountStyle( this.styleSet );
                this.executeShortcut( this.shortcutSet );
                this.mountClass( this.classSet );
            }

            this.isMounted = true;
            this.isRollbacked = false;
        }

        // 备份旧的样式类
        backupOldClass () {
            var temp, i;
            this.oldClassSet = {};

            Object.keys( this.classSet ).forEach( (tagName) => {
                temp = this.oldClassSet[tagName] = this.objList[tagName].className.split(' ');
            } );
        }

        // 备份旧的样式
        backupOldStyle () {
            var temp;
            this.oldStyleSet = {};

            this.twoLeveTraverse( this.styleSet,
                function( tagName ) {
                    temp = this.oldStyleSet[tagName] = {};
                }, function( property, styleObj, tagName ) {
                    if ( property != 'transition' )
                        temp[property] = getComputedStyle( this.objList[tagName], null ).getPropertyValue( property );
                } );
        }

        // 备份对偶的 shortcut
        backupShortcut () {
            this.dscBackupSet = {}; // dual shortcut backup 用于回滚时使用
            var id, temp, currentShortcut;

            this.twoLeveTraverse( this.shortcutSet,
                function( id_ ) {
                    id = id_;
                    temp = this.dscBackupSet[id] = {};
                }, function( shortcut, shortcutSet ) {
                    currentShortcut = this.dualShortcut[shortcut];
                    if ( this.dualShortcut[shortcut] )
                        temp[currentShortcut] = this.shortcutSet[id][shortcut];
                });
        }

        // 回滚！
        rollback () {
            if ( ! this.isRollbacked ) {
                this.executeShortcut ( this.dscBackupSet );

                // 由于当元素的 display 为非 none 时，即元素已经出现在页面中时， transition 才起作用，故该处设置一个定时器，使 transition 起作用
                setTimeout( () => {
                    this.mountStyle( this.oldStyleSet );
                    this.mountClass( this.classSetPrev, this.classSet );
                }, 0 );
            }

            this.isMounted = false;
            this.isRollbacked = true;
        }

        // 遍历一个多层键值对组的一二层内容
        // 使用 Object.keys && forEach 的实现可能存在速度缺陷
        // 如果确实存在，可以考虑换一种实现方式，比如 for循环 && Object.keys
        twoLeveTraverse ( obj1, callback1, callback2 ) {
            var temp1, temp2;

            Object.keys( obj1 ).forEach( ( obj1key ) => {
                temp1 = obj1[obj1key];
                if ( callback1 )
                    callback1.call( this, obj1key );

                Object.keys( temp1 ).forEach( ( obj2key ) => {
                    if ( callback2 )
                        callback2.call( this, obj2key, temp1, obj1key );
                } );
            } );
        }

        // 检查两对象中是否存在重复属性，如果某 a 中属性存在于 b 中，则执行 hasfn，否则执行 elsefn
        checkRepeat ( a, b, hasfn, elsefn ) {
            for ( var item in a ) {
                if ( b[item] && hasfn )
                    hasfn(item);
                else if ( ! b[item] && elsefn )
                    elsefn(item);
            }
        }
    }

    class AnimationStatusCtrl {
    }

    if ( module )
        module.exports = AnimationGroup;
    else
        window.AnimationGroup = AnimationGroup;

})( window )
