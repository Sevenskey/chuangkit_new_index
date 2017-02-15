/***** 请求依赖 *****/

// 设置库请求目录
// 这样写会报错，我猜是因为node_modules目录分支众多递归搜索的空间复杂度过大导致的
//const requireLib = require.context( './node_modules', true, /^.*\.js$/ );

// 设置模块请求目录
const requireModules = require.context( './src/js', true, /^.*\.js$/ );

// 请求库
const Vue = require( './node_modules/vue/dist/vue.min.js' );

// 请求模块
const ActiveBackground = requireModules( './active-background.js' );
const AnimationGroup = requireModules('./animation-group.js');
const vue_MediumFeedback = requireModules( './vue.medium-feedback.js' );
const vue_PageTurn = requireModules( './vue.page-turn.js' );
const vue_UserFeedback = requireModules( './vue.user-feedback.js' );
const tools = requireModules( './tools.js' );

const beAPlugin = tools.beAPlugin;


/***** 部署页面 *****/

// PageTurn
Vue.use( vue_PageTurn, {
    el : '#page_turn',
    pageNum : 5,
    color : '#00CCCD',
    staticCircleClass : 'static_circle',
    activeCircleClass : 'active_circle',
    speed : 200,
    pixel : 10,
    fnList : {
        0 : function() {
            console.log('I\'m 0!');
        },
        2 : function() {
            console.log('I\'m 2!')
        }
    },
} );

// ActiveBackground
new ActiveBackground({
    el : 'active_background',
    sensitivity : 50,
    scope : 10,
});

// UserFeedback
Vue.use( beAPlugin(vue_UserFeedback), {
    url : './test_data/vue.user-feedback.json',
    el : '#user_feedback',
});

// MediumFeedback
Vue.use( beAPlugin(vue_MediumFeedback), {
    url : './test_data/vue.medium-feedback.json',
    mf_el : '#medium_feedback_main', // medium feedback 主体
    nextButton : '#mf_next_button', // 下一页按钮
    pt_el : '#mf_page_turn', // 下方圆点
    interval : 3000, // 自动切换间隔时间
    pixel : 17, // 活动圆点移动长度
} );
