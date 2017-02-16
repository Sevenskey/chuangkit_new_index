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
                    transition : 'all 1s',
                },
                '#slogan #start_btn' : {
                    transform : 'translateY(0px)',
                    opacity : 1,
                    transition : 'all 1s',
                },
                '#page1_icons' : {
                    opacity : 1
                }
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
                }
            },
            transition : 'all .4s'
        },
    };

    if ( typeof module != 'undefined' )
        module.exports = animationConfig;
    else
        window.animationConfig = animationConfig;

})( window )
