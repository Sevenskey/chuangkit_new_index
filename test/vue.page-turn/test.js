const Test = require( '../../src/js/vue.page-turn.js' );
const Vue = require( '../../node_modules/vue/dist/vue.min.js' );

Vue.use( Test, {
    el : '#page_turn',
    pageNum : 5,
    color : '#00CCCD',
    staticCircleClass : 'static_circle',
    activeCircleClass : 'active_circle',
    speed : 200,
    pixel : 10,
    fn : {
        0 : function() {
            console.log('I\'m 0!');
        },
        2 : function() {
            console.log('I\'m 2!')
        }
    },
} );
