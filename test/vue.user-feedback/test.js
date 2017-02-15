const Test = require( '../../src/js/vue.user-feedback.js' );
const tools = require( '../../src/js/tools.js' );
const Vue = require( '../../node_modules/vue/dist/vue.min.js' );

const beAPlugin = tools.beAPlugin;

Vue.use( beAPlugin( Test ), {
    url : '../../test_data/vue.user-feedback.json',
    el : '#user_feedback',
});
