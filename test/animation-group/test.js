//const AnimationGroup = require( '../../src/js/animation-group.js' );

var ag_one = new AnimationGroup ({
        prev : {
            '.test1' : {
                'transition' : 'all 2s',
            },
            '#test2' : ['blue_class'],
        },
        next : {
            '.test1' : {
                'border' : '5px solid #000',
                'color' : 'blue',
                classList : ['large_font'],
                hide : true,
            },
            '#test2' : {
                'font-size' : '20px',
            },
            '#test3' : ['green_class'],
        },
        transition : 'all .5s',
    });

document.getElementById('ImABtn').addEventListener('click', function(){
    ag_one.mountNextStyle();
});
document.getElementById('ImABtn2').addEventListener('click', function(){
    ag_one.rollback();
});
