/*TouchSlide
* Coding by Sun
* Email: sevenskey@163.com
* Build since: 2017-3-10
* Latest update: 2017-3-10
*
*/

;(function( window ) {

    class TouchSlide {
        constructor ( {
            el = document.body,
            fn = null,
        } ) {
            this.el = el;
            this.fn = fn;

            this.sy = 0;
            this.ey = 0;

            this.bind();
        }

        bind () {
            var self = this;

            this.el.addEventListener( 'touchstart' , function( event ) {
                self.sy = event.changedTouches[0].clientY;
            } );
            
            this.el.addEventListener( 'touchend', function( event ) {
                self.ey = event.changedTouches[0].clientY;

                if( self.fn )
                    self.fn( self.sy - self.ey );
            } );
        }

        getdiff () {
            return self.sy - self.ey;
        }
    }

    if ( typeof module != 'undefined' )
        module.exports = TouchSlide;
    else
        window.TouchSlide = TouchSlide;

})( window )
