/*User Feedback
* Coding by Sun
* Email: sevenskey@163.com
* Build since: 2017-1-24
* Latest update: 2017-1-28
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

    var tools = require( './tools.js' );
    var getData = tools.getData;

    class UserFeedback {
        constructor ( {
            url = null,
            el = '#user_feedback'

        }, Vue ) {
            this.Vue = Vue;
            this.el = el;

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
                }
            } );

        }
    }

    if ( module )
        module.exports = UserFeedback;
    else
        window.UserFeedback = UserFeedback;

})( window )
