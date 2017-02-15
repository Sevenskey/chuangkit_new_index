/*Active Background
* Coding by Sun
* Email: sevenskey@163.com
* Build since: 2017-1-24
* Latest update: 2017-1-24
*
* Compatibility:
* IE9
*/

;(function() {
    class ActiveBackground {
        constructor ({
            el = 'active_background',
            sensitivity = 50, // 灵敏度。数值越小越灵敏，建议50以上
            scope = 10, // 移动距离缩小倍数。数值越小单次移动距离越大
        } = {}) {
            this.el = typeof el == 'object' ? el : document.getElementById(el);
            this.sensitivity = sensitivity;
            this.scope = scope;
            
            this.timer = null;
            this.xCache = 0;
            this.yCache = 0;
            
            this.bindEvent( this.active.bind(this) );

            console.log( 'Active-background works!' );
        }

        active ( x, y ) {
            var deltaX = (this.xCache - x) / this.scope,
                deltaY = (this.yCache - y) / this.scope;
                this.xCache = x;
                this.yCache = y;

            var oldPosition = getComputedStyle(this.el, null)
                .getPropertyValue('background-position')
                .split(' ').map( function( ele ) {
                    return parseInt( ele );
                } );

            this.el.style.backgroundPosition = (deltaX + oldPosition[0]) + 'px ' + (deltaY + oldPosition[1]) + 'px';
        }

        bindEvent ( fn ) {
            document.body.addEventListener( 'mousemove', ( event ) => {
                if ( this.timer )
                    clearTimeout( this.timer );

                this.timer = setTimeout( function() {
                    event = event || window.event;
                    var x = event.clientX, y = event.clientY;
                    fn ( x, y );
                }, this.sensitivity );
            } );
        }
    }

    if ( module )
        module.exports = ActiveBackground;
    else
        window.ActiveBackground = ActiveBackground;
})()
