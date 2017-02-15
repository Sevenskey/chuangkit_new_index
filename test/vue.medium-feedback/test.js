const Test = require( '../../src/js/vue.medium-feedback.js' );
const tools = require( '../../src/js/tools.js' );
const Vue = require( '../../node_modules/vue/dist/vue.min.js' );

var beAPlugin = tools.beAPlugin;

Vue.use( beAPlugin(Test), {
    url : '../../test_data/vue.medium-feedback.json',
    mf_el : '#medium_feedback_main', // medium feedback 主体
    nextButton : '#mf_next_button', // 下一页按钮
    pt_el : '#mf_page_turn', // 下方圆点
    interval : 3000, // 自动切换间隔时间
    pixel : 17, // 活动圆点移动长度
} );
