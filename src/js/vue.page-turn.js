/*Page Turn Plugin
* Coding by Sun
* Email: sevenskey@163.com
* Build since: 2017-1-22
* Latest update: 2017-2-1
*
* Compatibility:
* IE9
*/

;(function(window) {

    if ( typeof module != 'undefined' ) {
        var TouchSlide = require( './touch-slide.js' );
    } else if ( window ) {
        var TouchSlide = window.TouchSlide;
    } else {
        throw( new error( '当前可能不是浏览器环境qwq' ) );
    }

    class PageTurn {
        constructor ({
            el = '#page_turn',
            pageNum = 5, // 页面数量
            color = '#07aefc', // 颜色
            speed = 300, // 翻页延迟（建议不要低于150）
            staticCircleClass = 'static_circle', // 如果要为标识添加样式则在该处注册样式所在的class
            activeCircleClass = 'active_circle', // 活动标识
            fn = null, // 翻页所触发的函数，数组或对象都可以，但是要注意如果是对象则属性名称须为数字 
            pixel = 12, // 每次活动标识滑动的距离
            keyboard = true, // 是否开启键盘监听
            wheel = true, // 是否开启鼠标滚轮监听
            preButton = null, // 前一页按钮
            nextButton = null, // 后一页按钮
            tailToHead = false, // 是否将首页和尾页相连
            auto = false, // 是否自动播放
            interval = 1000, // 自动播放时间间隔
            direction = 'top', 
            autoExecuteFirst = false, //是否自动执行第一个函数
            touch = false, // 是否开启触摸监听
            lockTime = 1000,
        } = {}, Vue) {
            this.num = pageNum;
            this.color = color;
            this.speed = speed;
            this.el = el;
            this.Vue = Vue;
            this.fn = fn;
            this.pixel = pixel;
            this.keyboard = keyboard;
            this.wheel = wheel;
            this.tailToHead = tailToHead;
            this.auto = auto;
            this.interval = interval;
            this.direction = direction;
            this.preButton = preButton ? document.getElementById(preButton.replace('#','')) : null;
            this.nextButton = nextButton ? document.getElementById(nextButton.replace('#','')) : null;
            this.autoExecuteFirst = autoExecuteFirst;
            this.touch = touch;
            this.lockTime = lockTime;

            this.staticCircleClass = staticCircleClass;
            this.activeCircleClass = activeCircleClass;

            this.timer_wheel = null;
            this.timer_auto = null;

            this.vueInstance = null;

            this.lockTimer = null;
            this.lock = 0; // 事件触发锁。如果该变量为1，则不允许触发current变化的操作。


            this.generate();
        }

        changeColor ( newColor ) {
            this.vueInstance.color = newColor;
        }

        changeCurrent ( newCurrent ) {
            this.vueInstance.current = newCurrent;
        }


        // 执行用户函数
        invokeFunction ( fun, num, flag ) {
            var type = typeof fun;
            
            if ( type == 'object' )
                switch ( typeof fun[num] ) {
                    case 'object': 
                        if ( flag > 0 )
                            fun[num][1].call( this );
                        else
                            fun[num][0].call( this );
                        break;
                    case 'function': fun[num].call( this ); break;
                    default: console.log( '第' + num + 1 + '页没有可执行的函数qwq' );
                }
            else if ( type == 'function' )
                fun.call( this );
            else
                console.log( '没有可执行的函数qwq' );
        }

        generate () {
            var self = this;
            self.vueInstance = new self.Vue ({
                el : self.el,

                data : {
                    color : self.color,
                    num : self.num,
                    // 由于需在创建时得到el对象故在此储存
                    el : document.getElementById(self.el.replace('#', '')),
                    current : 0
                },

                watch : {
                    // 一旦current发生改变则调用改变后的值对应的用户函数
                    current : function ( newCurrent,oldCurrent ) {
                        self.invokeFunction( self.fn, newCurrent, newCurrent - oldCurrent );
                    }
                },

                // 创建之初构建好模板
                created : function () {
                    var staticTemplate = '<static-circle :color="color"></static-circle>',
                        activeTemplate = '<active-circle :current="current" :color="color"></active-circle>';

                    this.el.innerHTML += activeTemplate;

                    for ( var i = 0; i < this.num; i++ )
                        this.el.innerHTML += staticTemplate;
                },

                // 待模板渲染完毕后添加各种监听
                mounted : function() {
                    self.bindEvent( ( flag ) => {
                        if ( ! self.lock ) {
                            self.lock = 1;

                            if ( flag > 0 && this.current < this.num-1 )
                                this.current++;
                            else if ( flag < 0 && this.current > 0 )
                                this.current--;
                            else if ( self.tailToHead && flag > 0 && this.current == this.num-1 )
                                this.current = 0;
                            else if ( self.tailToHead && flag < 0 && this.current == 0 )
                                this.current = this.num - 1;
                        }

                        if ( ! self.lockTimer )
                            self.lockTimer = setTimeout( function() {
                                self.lock = 0;
                                self.lockTimer = null;
                            }, self.lockTime );
                    } );

                    // 默认自动调用第一个用户函数
                    if ( self.fn && self.autoExecuteFirst )
                        self.invokeFunction( self.fn, 0, 1 );
                },

                components : {
                    'static-circle' : {
                        template : '<li :style="{borderColor:color}" :class="[myclass]"></li>',
                        props : ['color'],
                        data : function() {
                            return {
                                myclass : self.staticCircleClass,
                            }
                        }
                    },
                    'active-circle' : {
                        template : '<li :style="style" :class="[myclass]"></li>',
                        props : ['current', 'color'],
                        data : function() {
                            return {
                                myclass : self.activeCircleClass,
                                pixel : parseFloat( self.pixel ),
                                dim : typeof self.pixel == 'number' ? 'px' : self.pixel.replace( /\d*\.\d+|\d+/, '' ),
                            }
                        },
                        computed : {
                            style : function() {
                                return 'background-color:' + this.color + '; border-color:' + this.color + ';' + self.direction + ':' + this.current * this.pixel + this.dim;
                            }
                        }
                    },
                },
            });
        }

        // 未修改完
        //currentCtrl ( flag,  ) {
            //if ( ! self.lock ) {
                //self.lock = 1;

                //if ( flag > 0 && this.current < this.num-1 )
                    //this.current++;
                //else if ( flag < 0 && this.current > 0 )
                    //this.current--;
                //else if ( self.tailToHead && flag > 0 && this.current == this.num-1 )
                    //this.current = 0;
                //else if ( self.tailToHead && flag < 0 && this.current == 0 )
                    //this.current = this.num - 1;
            //}

            //if ( ! self.lockTimer )
                //self.lockTimer = setTimeout( function() {
                    //self.lock = 0;
                    //self.lockTimer = null;
                //}, self.lockTime );
        //}

        // 绑定各种监听事件
        bindEvent ( fn ) {
            if ( this.wheel )
                document.body.addEventListener('wheel', ( event ) => {
                    event = event || window.event;

                    if ( this.timer_wheel )
                        clearTimeout ( this.timer_wheel );
                    
                    this.timer_wheel = setTimeout( function() {
                        fn( event.deltaY );
                    }, 200 );
                });

            if ( this.keyboard )
                document.addEventListener( 'keydown', function ( event ) {
                    var keycode = event.which;
                    
                    switch( keycode ) {
                        case 37: // <-
                        case 38: // ^
                            fn( -1 ); break;
                        case 39: // ->
                        case 40: // v
                            fn( 1 ); break;
                    }
                });

            if ( this.touch ) {
                var touchHandle = new TouchSlide({
                    fn : fn,
                });
            }

            if ( this.preButton )
                this.preButton.addEventListener( 'click' ,function () {
                    fn( -1 );
                } );

            if ( this.nextButton )
                this.nextButton.addEventListener( 'click', function () {
                    fn( 1 );
                } );

            if ( this.auto )
                this.launchAutoTimer( fn );
        }

        launchAutoTimer ( fn ) {
            this.timer_auto = setTimeout ( () => {
                fn( 1 );
                this.launchAutoTimer( fn );
            }, this.interval );
        }

        toggleAutoTimer () {
            if ( this.timer_auto === null )
                launchAutoTimer(  )
        }

    }

    PageTurn.install = function ( externalVue, config ) {
        new PageTurn ( config, externalVue );
    }

    if ( typeof module != 'undefined' )
        module.exports = PageTurn;
    else
        window.PageTurn = PageTurn;

})(window)
