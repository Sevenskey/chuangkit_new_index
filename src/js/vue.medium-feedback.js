/* Medium Feedback
* Coding by Sun
* Email: sevenskey@163.com
* Build since: 2017-1-25
* Latest update: 2017-2-1
*
* Dependency:
* js/tools.js/getData
* js/vue.page-turn.js
*
* Compatibility:
* IE9
*
* Data format:
* [
*   //{
*       //"logo" : "",
*       //"title" : "",
*       //"content" : "",
*       //"mediumName" : ""
*   //}
* ]
*/

;(function( window ){
    const tools = require( './tools.js' );
    const PageTurn = require( './vue.page-turn.js' );

    var getData = tools.getData;

    class MediumFeedback_page {
        constructor ({
            data = {},
            el = '#medium_feedback',
        } = {}, Vue) {
            this.el = el;
            this.Vue = Vue;
            this.data = data;

            this.generate();
        }

        generate () {
            const self = this;

            this.vm = new self.Vue({
                el : self.el,

                data : {
                    items : self.data,
                    current : 0
                },

                watch : {
                    current : function( newCurrent ) {
                        this.items.forEach( function( elem ) {
                            elem.show = 0;
                        } );
                        this.items[newCurrent].show = 1;
                    }
                },

            });
        }
    }

    // 该插件实现思路是将 Page Turn 与其耦合
    // Page Turn 关注 Medium Feedback 的 current 属性

    class MediumFeedback {
        constructor ( {
            url = '', // JSON数据请求url
            mf_el = '#medium_feedback', // medium feedback 主体
            nextButton = '#mf_next_button', // 下一页按钮
            pt_el = '#mf_page_turn', // 下方圆点
            interval = 1000, // 自动切换速度
            pixel = 17, // 活动圆点移动长度
        }, Vue ) {
            this.url = url;
            this.Vue = Vue;
            this.mf_el = mf_el;
            this.pt_el = pt_el;
            this.nextButton = nextButton;
            this.interval = interval;
            this.pixel = pixel;
            
            this.launch();
        }

        // 获取数据，启动插件
        launch () {
            getData({
                url : this.url
            }, ( data ) => {
                this.openMediumPage( data );
                this.openPageTurn( data.length, () => {
                    this.ctrlmfPage();
                } );
            });
        }

        // medium feedback 的 current 属性的控制逻辑
        ctrlmfPage () {
            var vm = this.mf_instance.vm;
            if ( vm.current < vm.items.length-1 )
                vm.current++;
            else if ( vm.current == vm.items.length-1 )
                vm.current = 0;
        }

        openMediumPage ( data ) {
            this.mf_instance = new MediumFeedback_page( {
                data : data,
                el : this.mf_el,
            }, this.Vue );
        }

        openPageTurn ( length, fn ) {
            this.Vue.use( PageTurn, {
                el : this.pt_el,
                pageNum : length,
                color : '#00CCCD',
                staticCircleClass : 'static_circle',
                activeCircleClass : 'active_circle',
                speed : 200,
                pixel : this.pixel,
                nextButton : this.nextButton,
                wheel : false,
                keyboard : false,
                tailToHead : true,
                auto : true,
                interval : this.interval,
                fn : fn,
                direction : 'left',
            } );
        }
    }

    if ( module )
        module.exports = MediumFeedback;
    else
        window.MediumFeedback = MediumFeedback;

})( window )
