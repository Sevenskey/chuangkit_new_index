;(function( window ) {
    const animationConfig = {
        frame1 : {
            prev : {
                '#blue_banner' : {
                    transform : 'translateY(-30px)',
                },
                '#slogan h1' : {
                    transform : 'translateY(0px)',
                    opacity : 1
                },
                '#slogan h2' : {
                    transform : 'translateY(0px)',
                    opacity : 1,
                },
                '#slogan #start_btn' : {
                    transform : 'translateY(0px)',
                    opacity : 1,
                },
                '#page1_icons' : {
                    opacity : 1
                },
                '#mouse' : {
                    transform : 'translateY(0px)',
                    opacity : 1,
                },
            },
            next : {
                '#blue_banner' : {
                    transform : 'translateY(-300px)',
                    hide : true,
                },
                '#slogan h1' : {
                    transform : 'translateY(-300px)',
                    hide : true,
                },
                '#slogan h2' : {
                    transform : 'translateY(-300px)',
                    hide : true,
                },
                '#slogan #start_btn' : {
                    transform : 'translateY(-300px)',
                    hide : true,
                },
                '#page1_icons' : {
                    transform : 'translateY(-300px)',
                    hide : true,
                },
                '#mouse' : {
                },
                '.page1' : {
                    delete : true,
                },
                '#active_background_w' : {
                    delete : true,
                },
            },
            transition : 'all .7s'
        },
        frame2 : {
            prev : {
                '.card' : {
                    hide : true,
                },
            },
            next : {
                '.card' : {
                    transform : 'translateY(0px)',
                    show : true,
                },
                '#active_background_b' : {
                    retrieve : true,
                },
                '.page2' : {
                    show : true,
                },
            },
        },
        frame3 : {
            prev : {
            },
            next : {
                '.card' : {
                    transform : 'translateY(-150px)',
                    hide : false,
                },
                '.page2' : {
                    hide : false,
                },
            },
        },
    };

    if ( typeof module != 'undefined' )
        module.exports = animationConfig;
    else
        window.animationConfig = animationConfig;

})( window )
