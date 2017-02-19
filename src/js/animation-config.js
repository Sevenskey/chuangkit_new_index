;(function( window ) {
    const animationConfig = {
        frame1 : {
            prev : {
                '#slogan h1, #slogan h2, #slogan #start_btn, #page1_icons, #mouse' : {
                    transform : 'translateY(0px)',
                    opacity : 1,
                },
                '#blue_banner' : {
                    transform : 'translateY(-30px)',
                    opacity : 1,
                },
            },
            next : {
                '#blue_banner, #slogan h1, #slogan h2, #slogan #start_btn, #page1_icons' : {
                    transform : 'translateY(-300px)',
                    hide : true,
                },
                '#page1' : {
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
                '#card_seq .card' : {
                    transform : 'translateY(250px)',
                },
            },
            next : {
                '#card_seq .card' : {
                    transform : 'translateY(0px)',
                    show : true,
                },
                '#active_background_b' : {
                    retrieve : true,
                },
                '#page2' : {
                    show : true,
                },
            },
        },
        frame3 : {
            prev : {
            },
            next : {
                '#active_background_b' : {
                    delete : true,
                },
                '#card_seq .card2, #card_seq .card3, #card_seq .card4, #card_seq .card5' : {
                    transform : 'translateY(-250px)',
                    hide : true,
                },
                ' #card_seq .card1' : {
                    transform : 'translate(3em, 9em)',
                    height : '250px',
                    classList : ['image_shadow'],
                },
                ' #card_seq .card1 .card_tail img' : {
                    opacity : 0,
                },
                '#card_num_b_1' : {
                    show : true,
                    transform : 'translateY(-2em)',
                },
                '#page3 .image' : {
                    show : true,
                },
                '#page3 .title' : {
                    transform : 'translateY(0px)',
                    show : true,
                },
                '#page3' : ['gradient1'],
            },
            transition : 'all .8s',
        },
        frame4 : {
            prev : {
            },
            next : {
                '#page3 .key1' : {
                    classList : ['page4_image_p'],
                },
                '#page3 .key2' : {
                    classList :['page4_image_v'], 
                },
                '#page3 .key3' : {
                    classList :['page4_image_a'], 
                },
                '#page3 .key4' : {
                    classList :['page4_image_t'], 
                },
                '#page3, #page3 .image' : {
                    hide : true,
                },
                '#page4' : {
                    show : true,
                    classList : ['gradient2'],
                },
                '#page4 .image, #page4 .title' : {
                    show : true,
                },
                '#page4 .title' : {
                    transform : 'translateY(0em)',
                },
                '#card_seq .card1' : {
                    transform : 'translate(3em, 6em)',
                    hide : true,
                },
                '#card_num_b_1' : {
                    transform : 'translateY(-3em)',
                    hide : true,
                },
                '#card_seq2 .card2' : {
                    transform : 'translateY(-4em)',
                    show : true,
                },
                '#card_num_b_2' : {
                    show : true,
                    transform : 'translateY(-3em)',
                },
            },
            transition : 'all .8s',
        },
    };

    if ( typeof module != 'undefined' )
        module.exports = animationConfig;
    else
        window.animationConfig = animationConfig;

})( window )
