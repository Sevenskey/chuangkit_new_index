//const Test = require( '../../src/js/.js' );
//const tools = require( '../../src/js/tools.js' );
//const Vue = require( '../../node_modules/vue/dist/vue.min.js' );
var beAPlugin = tools.beAPlugin;

Vue.use( beAPlugin( DataFiller ), {
    url : './vue.card.json',
    el : '#card_seq',
});
