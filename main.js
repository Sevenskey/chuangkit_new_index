/***** 请求依赖 *****/

// 设置库请求目录
// 这样写会报错，猜测是因为node_modules目录分支众多递归搜索的空间复杂度过大导致的
//const requireLib = require.context( './node_modules', true, /^.*\.js$/ );

// 设置模块请求目录
const requireModules = require.context( './src/js', true, /^.*\.js$/ );

// 请求库
const Vue = require( './node_modules/vue/dist/vue.min.js' );

// 请求模块
const ActiveBackground = requireModules( './active-background.js' );
const AnimationGroup = requireModules('./animation-group.js');
const vue_Header = requireModules( './vue.header.js' );
const vue_MediumFeedback = requireModules( './vue.medium-feedback.js' );
const vue_PageTurn = requireModules( './vue.page-turn.js' );
const vue_DataFiller = requireModules( './vue.data-filler.js' );
const tools = requireModules( './tools.js' );

const beAPlugin = tools.beAPlugin;

// 请求数据
const animationConfig = requireModules( './animation-config.js' );


/***** 部署页面 *****/

// 导航
Vue.use( beAPlugin( vue_Header ), {
    el : 'header',
} );

// 卡片
Vue.use( beAPlugin( vue_DataFiller ), {
    url : './data/vue.card.json',
    el : '#card_seq',
});
// 卡片2 （用于4～7页的动画中）
Vue.use( beAPlugin( vue_DataFiller ), {
    url : './data/vue.card.json',
    el : '#card_seq2',
});
// UserFeedback
//Vue.use( beAPlugin(vue_DataFiller), {
    //url : './data/vue.user-feedback.json',
    //el : '#user_feedback',
//});

//// MediumFeedback
//Vue.use( beAPlugin(vue_MediumFeedback), {
    //url : './data/vue.medium-feedback.json',
    //mf_el : '#medium_feedback_main', // medium feedback 主体
    //nextButton : '#mf_next_button', // 下一页按钮
    //pt_el : '#mf_page_turn', // 下方圆点
    //interval : 3000, // 自动切换间隔时间
    //pixel : 17, // 活动圆点移动长度
//} );

var header, frame1, frame2, frame3, frame4, frame5, frame6, frame7;
// 动画
// 等待vue将页面渲染完毕
// vue渲染是异步，JS的事件循环机制会使在vue还未渲染好模板时就执行下面的 new AnimationGroup 语句，导致出错。故在此引入定时器，以使该语句在下一个事件循环中（或队尾）被执行。但是依然不能绝对确保在vue渲染完毕模板后再执行。
// 但至少在我这里是work的。。
setTimeout(function() {
    header = document.getElementById('header');
    frame1 = new AnimationGroup( animationConfig.frame1 );
    frame2 = new AnimationGroup( animationConfig.frame2 );
    frame3 = new AnimationGroup( animationConfig.frame3 );
    frame4 = new AnimationGroup( animationConfig.frame4 );
    frame5 = new AnimationGroup( animationConfig.frame5 );
    frame6 = new AnimationGroup( animationConfig.frame6 );
}, 500);

// 翻页
Vue.use( vue_PageTurn, {
    el : '#page_turn',
    pageNum : 7,
    color : '#00CCCD',
    staticCircleClass : 'static_circle',
    activeCircleClass : 'active_circle',
    speed : 200,
    pixel : '0.9rem',
    fn : {
        0 : function() {
            header.className = 'transparent_header';
            frame1.clearTimer();
            frame1.rollback();
            frame2.rollback();
        },
        1 :[
            function() { // 上翻到达
                frame3.clearTimer();
                frame3.rollback();
            },
            function() { //下翻到达
                header.className = '';
                frame2.clearTimer();
                frame1.mountNextStyle();
                frame2.mountNextStyle();
            }
        ],
        2 : [
            function() {
                frame4.clearTimer();
                frame4.rollback();
            },
            function() {
                frame3.backupOldStyle();
                frame3.clearTimer();
                frame3.mountNextStyle();

            }
        ],
        3 : [
            function() {
                frame5.clearTimer();
                frame5.rollback();
            },
            function() {
                frame4.mountPrevStyle();
                frame4.backupOldStyle();
                frame4.clearTimer();
                frame4.mountNextStyle();
            }
        ],
        4 : [
            function() {
                frame6.clearTimer();
                frame6.rollback();
            },
            function() {
                frame5.mountPrevStyle();
                frame5.backupOldStyle();
                frame5.clearTimer();
                frame5.mountNextStyle();
            }
        ],
        5 : [
            function() {
            },
            function() {
                frame6.mountPrevStyle();
                frame6.backupOldStyle();
                frame6.clearTimer();
                frame6.mountNextStyle();
            }
        ],
    },
} );

// ActiveBackground
// 不能用，待改进
//new ActiveBackground({
    //el : 'active_background_w',
    //sensitivity : 50,
    //scope : 10,
//});

