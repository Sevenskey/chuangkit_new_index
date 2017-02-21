/*DataFiller
* Coding by Sun
* Email: sevenskey@163.com
* Build since: 2017-1-24
* Latest update: 2017-2-19
* ChangeLog:
* 更名为DataFiller - 2017-2-19
*
* Dependency:
* js/tools.js/getData
*
* Compatibility:
* IE9
*
* Data format:
* [
*   //{
*       //"avatar" : "img src",
*       //"identity" : "",
*       //"content" : "",
*       //"position" : 0
*   //}
* ]
*/

;(function( window ) {
    
    if ( typeof module != 'undefined' ) {
        var tools = require( './tools.js' );
        var getData = tools.getData;
    } else if ( window ) {
        var getData = window.tools.getData;
    } else {
        throw( new Error( '当前可能不是浏览器环境qwq' ) );
    }

    class DataFiller {
        constructor ( {
            url = null,
            el = '',
            callback = null,
        }, Vue ) {
            this.Vue = Vue;
            this.el = el;
            this.callback = callback;

            if ( el )
                getData({
                    url : url,
                }, ( data ) => {
                    this.data = data;
                    this.generate();
                });
        }

        generate () {
            const self = this;

            new self.Vue( {
                el : self.el,

                data : {
                    items : self.data
                },

                mounted : function() {
                    if ( self.callback )
                        setTimeout( function() {
                            self.callback();
                        } );
                },
            } );

        }
    }

    if ( typeof module != 'undefined' )
        module.exports = DataFiller;
    else
        window.DataFiller = DataFiller;

})( window )
