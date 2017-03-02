const Test = require( '../../src/js/vue.data-filler.js' );
const tools = require( '../../src/js/tools.js' );
const Vue = require( '../../node_modules/vue/dist/vue.min.js' );

const beAPlugin = tools.beAPlugin;

Vue.use( beAPlugin( Test ), {
    url : '../../data/vue.user-feedback.json',
    el : '#user_feedback',
});
