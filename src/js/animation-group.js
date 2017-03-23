/*Animation Group
* Coding by Sun
* Email: sevenskey@163.com
* Build since: 2017-2-1
* Latest update: 2017-3-20
*
* Compatibility:
* Array.isArray() - IE9
* getComputedStyle() - IE9
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
*       ^             ^
*  TimerHandler > FadeInOrOut
*/
;(function( window ){

    // 定时器管理器
    class TimerHandler {
        constructor () {
            this.timerSet = new Array();
        }

        push ( id ) {
            this.timerSet.push( id );
        }

        empty () {
            this.timerSet = new Array();
        }

        clear () {
            this.timerSet.forEach( function( id ) {
                clearTimeout ( id );
            } );

            this.empty();
        }
    }

    // 渐显或渐隐
    class FadeInOrOut {
        constructor ({
            elemObj = null, // 所要操作的元素对象
            delay = 1, // 元素的 dispaly 置为 none 前延迟的时间
            mode = 'hide', // 模式，hide 或 show
            timerHandler = null, // 定时器管理器，用于收集一个帧中参与样式处理的定时器，意在于必要的时候清除它们
        }) {
            this.elemObj = elemObj;
            this.delay = delay * 1000;
            this.mode = mode;
            this.timerHandler = timerHandler;

            this.launch();
        }

        launch () {
            switch ( this.mode ) {
                case 'hide' : this.hide(); break;
                case 'show' : this.show(); break;
                case 'vhide' : this.vhide(); break;
                case 'vshow' : this.vshow(); break;
                default: console.log( '找不到该模式QAQ' );
            }
        }

        vhide () {
            this.helper( function() {
                    this.updateClass( this.elemObj, 'opacity0', 'opacity1' );
                }, function() {
                    this.updateClass( this.elemObj, 'visibilityhidden', 'visibilityvisible' );
                } );
        }

        vshow () {
            this.helper( function() {
                    this.updateClass( this.elemObj, 'visibilityvisible', 'visibilityhidden' );
                    setTimeout ( () => {
                        this.updateClass( this.elemObj, 'opacity1', 'opacity0' );
                    }, 20 );
                }, null );
        }

        hide () {
            this.helper( function() {
                    this.updateClass( this.elemObj, 'opacity0', 'opacity1' );
                }, function() {
                    this.updateClass( this.elemObj, 'displaynone' );
                } );
        }

        show () {
            this.helper( function() {
                    this.updateClass( this.elemObj, '', 'displaynone' );
                    setTimeout ( () => {
                        this.updateClass( this.elemObj, 'opacity1', 'opacity0' );
                    }, 200 );
                } );
        }

        helper ( cbOutside, cbInside, delay ) {
            cbOutside.call( this );
            if ( typeof cbInside == 'function' )
                this.timerHandler.push( setTimeout( () => {
                    cbInside.call( this );
                }, delay | this.delay + 200 ) );
        }

        updateClass ( obj, add, remove ) {
            if ( remove ) {
                var re = new RegExp('\\ *' + remove, 'g');
                obj.className = ( obj.className + ' ' + add ).replace( re, '' );
            } else {
                obj.className = ( obj.className + ' ' + add );
            }
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
                vhide : function ( value, id, all, styleSet, classSet ) {
                    self.showOrHidehelper.call( this, value, id, 'vhide' );
                },
                vshow : function ( value, id, all, styleSet, classSet ) {
                    self.showOrHidehelper.call( this, value, id, 'vshow' );
                },
                classList : function ( value, id, all, styleSet, classSet ) {
                    if ( Array.isArray( value ) )
                        classSet[id] = value;
                },
                changeTo : function ( value, id, all, styleSet, classSet ) {
                    // 待实现
                },
                up : function ( value, id, all, styleSet, classSet ) {
                    self.moveHelper( value, this.objDict[id], 'Y', '-' );
                },
                down : function ( value, id, all, styleSet, classSet ) {
                    self.moveHelper( value, this.objDict[id], 'Y', '' );
                },
                toLeft : function ( value, id, all, styleSet, classSet ) {
                    self.moveHelper( value, this.objDict[id], 'X', '-' );
                },
                toRight : function ( value, id, all, styleSet, classSet ) {
                    self.moveHelper( value, this.objDict[id], 'X', '' );
                },
            };
        }

        // 设定对偶的快捷选项，用于回滚时的恢复
        getDualShortList () {
            return {
                show : 'hide',
                hide : 'show',
                vhide : 'vshow',
                vshow : 'vhide',
                up : 'down',
                down : 'up',
                toLeft : 'toRight',
                toRight : 'toLeft',
            };
        }

        // up, down, toLeft, toRight 帮助函数
        moveHelper ( value, objList, direction, prefix ) {
            value = typeof value == 'number' ? value + 'px' : value;
            var transform;

            objList.forEach( ( obj ) => {
                transform = 'translate' + direction + '(' + prefix  + value + ')';
                obj.style.transform += ' ' + transform;
            } );
        }

        // show & hide 帮助函数
        showOrHidehelper ( value, id, mode ) {
            var config;
            var self = this;

            this.objDict[id].forEach( ( obj ) => {
                config = {
                    elemObj : obj,
                    mode : mode,
                    timerHandler : self.timerHandler,
                };
                //var elemStyleObj = getComputedStyle( obj );

                if ( typeof value == 'number' )
                    config.delay = value;
                //else if ( value ) {
                    //config.delay = ;
                else {
                    return;
                }
                new FadeInOrOut( config );
            } );
        }

        getTimerHandler ( arg ) {
            this.timerHandler = arg;
        }
    }
    
    class AnimationGroup {
        constructor ({
            prev = null, // 变化前的样式。可选。一般在 prev 中配置 transition
            next = null, //
            transitionDuration = '', // 可在此配置默认的 transition 规则，即如果 prev 中找不到 transition 的配置则使用该配置。可选
        }) {
            this.prev = prev;
            this.next = next;
            this.transition = transitionDuration;

            //this.isMounted = false;
            //this.isRollbacked = false;
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
            // 获得快捷选项列表
            var shortcut = new Shortcut();
            this.shortcut = shortcut.getShortcutList();
            // 快捷选项对偶表
            this.dualShortcut = shortcut.getDualShortList();

            // 获得一个定时器管理器
            this.timerHandler = new TimerHandler();
            // 将该定时器管理器传递给shortcut
            shortcut.getTimerHandler( this.timerHandler );

            this.init();

        }

        init () {
            if ( this.next ) {
                // 生成元素对象字典
                this.genObjDict();

                // 分离母数据结构
                this.separateNext();
                this.separatePrev();

                // 挂载 prev 样式
                this.mountPrevStyle();

                // 挂载默认 transition
                this.mountTransition();

                // 备份原有样式和类
                setTimeout( () => {
                    this.backupOldStyle();
                    this.backupOldClass();
                },1000 );

                // 备份与 next 中对偶的 shortcut
                this.backupShortcut();
            }
        }

        clearTimer () {
            this.timerHandler.clear();
        }

        /*
         * Data Structure:
         *
         * this.objDict:
         * {
         *   id1 : [element object](Array),
         *   id2 : [element object, element object],
         * }
         */
        // 根据 prev 和 next 生成待操作的对象的列表
        genObjDict () {
            this.objDict = {};

            for ( var el in this.next )
                this.objDict[el] = Array.prototype.slice.call( document.querySelectorAll(el) );
            for ( el in this.prev )
                if ( ! this.objDict[el] )
                    this.objDict[el] = Array.prototype.slice.call( document.querySelectorAll(el) );
        }

        // 挂载 transition
        mountTransition () {
            for ( var id in this.next ) {
                this.objDict[id].forEach( ( obj ) => {
                    if ( this.transition && ( getComputedStyle( obj, null ).getPropertyValue( 'transition-duration' ) == '0s' ) ) {
                        obj.style.transitionProperty = 'all';
                        obj.style.transitionDuration = this.transition;
                    }
                } );
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
            var obj, classList, elemStyleObj;
            
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

                                elemStyleObj = getComputedStyle( this.objDict[id][0] );

                                shortcutSet[id][shortcut] = {
                                    all : all,
                                    // 为了性能折中的做法
                                    // 将对时间的计算放在分离这一步而不是每次调用快捷操作时重新计算，可以有效地减少页面样式重新计算次数
                                    // 但是相对的可能会使时间计算得不准确
                                    value : obj[shortcut] === true ? parseFloat( elemStyleObj.getPropertyValue('transition-delay') ) + parseFloat( elemStyleObj.getPropertyValue('transition-duration') ) : obj[shortcut],
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
        executeShortcut ( shortcutSet ) {
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
            Object.keys( classSet ).forEach( ( id ) => {
                this.objDict[id].forEach( ( elem ) => {
                    classSet[id].forEach( ( className ) => {
                        if ( elem.className.indexOf( className ) == -1 )
                            elem.className += ( ' ' + className );
                    } );
                } );
            } );

            if ( removed )
                Object.keys( removed ).forEach( ( id ) => {
                    this.objDict[id].forEach( ( elem ) => {
                        removed[id].forEach( function ( className ) {
                            elem.className = elem.className.replace( className, '' );
                        } );
                    } );
                } );
        }

        // 挂载样式
        mountStyle ( styleSet ) {
            var objArr;

            this.twoLeveTraverse( styleSet,
                function( id ) {
                    objArr = this.objDict[id];
                }, function( property, style ) {
                    if ( objArr )
                        objArr.forEach( function( obj ) {
                            obj.style[property] = style[property];
                        } );
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
            this.mountStyle( this.styleSet );
            setTimeout( () => {
                this.executeShortcut( this.shortcutSet );
            }, 0 );
            setTimeout( () => {
                this.mountClass( this.classSet );
            }, 100 );
        }

        // 备份旧的样式类
        backupOldClass () {
            this.oldClassSet = {};

            Object.keys( this.classSet ).forEach( ( id ) => {
                this.oldClassSet[id] = this.objDict[id][0].className.split(' ');
            } );
        }

        // 备份旧的样式
        backupOldStyle () {
            var temp, obj;
            this.oldStyleSet = {};

            this.twoLeveTraverse( this.styleSet,
                function( tagName ) {
                    temp = this.oldStyleSet[tagName] = {};
                    obj = this.objDict[tagName][0];
                }, function( property, styleObj, tagName ) {
                    if ( property != 'transition' && obj != null && typeof obj == 'object' )
                        temp[property] = getComputedStyle( obj, null ).getPropertyValue( property );
                    else
                        console.log( property, obj, tagName );
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
            this.executeShortcut ( this.dscBackupSet );

            // 由于当元素的 display 为非 none 时，即元素已经出现在页面中时， transition 才起作用，故该处设置一个定时器，使 transition 起作用
            setTimeout( () => {
                this.mountStyle( this.oldStyleSet );
                this.mountClass( this.classSetPrev, this.classSet );
            }, 0 );
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

    if ( typeof module != 'undefined' )
        module.exports = AnimationGroup;
    else
        window.AnimationGroup = AnimationGroup;

})( window )
