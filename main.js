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
// 动画
var header, frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9;
frame1 = new AnimationGroup( animationConfig.frame1 );
frame9 = new AnimationGroup( animationConfig.frame9 );

// 导航
Vue.use( beAPlugin( vue_Header ), {
    el : 'header',
    callback : function() {
        header = document.getElementById('header');
    }
} );

// 卡片
Vue.use( beAPlugin( vue_DataFiller ), {
    url : './data/vue.card.json',
    el : '#card_seq',
    callback : function() {
        frame2 = new AnimationGroup( animationConfig.frame2 );
    },
});
// 卡片2 （用于3～7页的动画中）
Vue.use( beAPlugin( vue_DataFiller ), {
    url : './data/vue.card.json',
    el : '#card_seq2',
    callback : function() {
        frame3 = new AnimationGroup( animationConfig.frame3 );
        frame4 = new AnimationGroup( animationConfig.frame4 );
        frame5 = new AnimationGroup( animationConfig.frame5 );
        frame6 = new AnimationGroup( animationConfig.frame6 );
        frame7 = new AnimationGroup( animationConfig.frame7 );
    },
});
// UserFeedback
Vue.use( beAPlugin( vue_DataFiller ), {
    url : './data/vue.user-feedback.json',
    el : '#user_feedback',
    callback : function() {
        console.log('UserFeedback is OK!');
        frame8 = new AnimationGroup( animationConfig.frame8 );
    },
});

// MediumFeedback
Vue.use( beAPlugin(vue_MediumFeedback), {
    url : './data/vue.medium-feedback.json',
    mf_el : '#medium_feedback_main', // medium feedback 主体
    nextButton : '#mf_next_button', // 下一页按钮
    pt_el : '#mf_page_turn', // 下方圆点
    interval : 3000, // 自动切换间隔时间
    pixel : 17, // 活动圆点移动长度
    callback : function() {
        console.log( 'MediumFeedback is OK!' );
    },
} );

// Description
Vue.use( beAPlugin( vue_DataFiller ), {
    url : './data/vue.description.json',
    el : '#description',
    callback : function() {
        console.log( 'Description is OK!' );
    },
} );

// Links
Vue.use( beAPlugin( vue_DataFiller ), {
    url : './data/vue.links.json',
    el : '#links',
    callback : function() {
        console.log( 'Links is OK!' );
    },
} );

// Info
Vue.use( beAPlugin( vue_DataFiller ), {
    url : './data/vue.info.json',
    el : '#info',
    callback : function() {
        console.log( 'Info is OK!' );
    },
} );



//Bugs:
//1.点击卡片跳转至对应动画场景时，由于丢失上下文，导致动画出现问题 
//2.一部分模块的数据加载是异步的，有可能会导致动画渲染时出现问题（已修复

//console.log(document.querySelectorAll('.card2'))
//document.querySelectorAll('.card2')[1].addEventListener('click', function() {
            //frame4.mountPrevStyle();
            //frame4.backupOldStyle();
            //frame4.clearTimer();
            //frame4.mountNextStyle();
        //});

// 翻页
function upTo ( frame ) {
        frame.clearTimer();
        frame.rollback();
}
function downTo( frame ) {
        frame.mountPrevStyle();
        frame.backupOldStyle();
        frame.clearTimer();
        frame.mountNextStyle();
}
Vue.use( vue_PageTurn, {
    el : '#page_turn',
    pageNum : 9,
    color : '#00CCCD',
    staticCircleClass : 'static_circle',
    activeCircleClass : 'active_circle',
    speed : 200,
    pixel : '1.13em',
    fn : {
        0 : function() {
            header.className = 'transparent_header';
            frame1.clearTimer();
            frame1.rollback();
            frame2.rollback();
        },
        1 :[
            function() {
                upTo( frame3 ); // 上翻到达
            },
            function() { //下翻到达
                header.className = '';
                frame2.clearTimer();
                frame1.mountNextStyle();
                frame2.mountNextStyle();
            },
        ],
        2 : [
            function() {
                upTo( frame4 );
            },
            function() {
                frame3.backupOldStyle();
                frame3.clearTimer();
                frame3.mountNextStyle();
            }
        ],
        3 : [
            function() {
                upTo( frame5 );
            },
            function() {
                downTo( frame4 );
            },
        ],
        4 : [
            function() {
                upTo( frame6 );
            },
            function() {
                downTo( frame5 );
            },
        ],
        5 : [
            function() {
                upTo( frame7 );
            },
            function() {
                downTo( frame6 );
            },
        ],
        6 : [
            function() {
                upTo( frame8 );
            },
            function() {
                downTo( frame7 );
            }
        ],
        7 : [
            function() {
                upTo( frame9 );
            },
            function() {
                downTo( frame8 );
            },
        ],
        8 : [
            function() {
            },
            function() {
                downTo( frame9 );
            },
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

