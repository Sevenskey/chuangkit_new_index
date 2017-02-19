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
                '#page3 .image_c' : {
                    top : '10em',
                    left : '18em',
                },
                '#page3 .image_a' : {
                    top : '27em',
                    left : '27em',
                },
                '#page3 .image_w' : {
                    top : '26em',
                    left : '65.5em',
                },
                '#page3 .image_s' : {
                    top : '8.5em',
                    left : '35em',
                },
                '#page3 .image_l' : {
                    top : '6em',
                    left : '69em',
                },
                '#card_num_b_1' : {
                    transform : 'translate(18em, 34em)',
                },
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
                    transform : 'translate(18em, 32em)',
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
                '#page4 .image_v' : {
                    top : '7em',
                    left : '40em',
                },
                '#page4 .image_p' : {
                    top : '9em',
                    left : '23em',
                },
                '#page4 .image_t' : {
                    top : '10em',
                    left : '78em',
                },
                '#page4 .image_a' : {
                    top : '9em',
                    left : '58em',
                },
                '#card_num_b_2' : {
                    transform : 'translate(18em, 34em)',
                },
            },
            next : {
                '#page3 .key1' : {
                    top : '9em',
                    left : '23em',
                    classList : ['page4_image_p'],
                },
                '#page3 .key2' : {
                    top : '7em',
                    left : '40em',
                    classList :['page4_image_v'], 
                },
                '#page3 .key3' : {
                    top : '9em',
                    left : '58em',
                    classList :['page4_image_a'], 
                },
                '#page3 .key4' : {
                    top : '10em',
                    left : '78em',
                    classList :['page4_image_t'], 
                },
                '#page3 .image' : {
                    opacity : 0,
                },
                '#page3' : {
                    hide : true,
                },
                '#page4' : {
                    show : true,
                    classList : ['gradient2'],
                },
                '#card_seq .card1' : {
                    transform : 'translate(3em, 6em)',
                    hide : true,
                },
                '#card_num_b_1' : {
                    transform : 'translate(18em, 30em)',
                    hide : true,
                },
                '#card_seq .card2' : {
                    transform : 'translate(-11em, 7em)',
                    height : '250px',
                    show : true,
                    classList : ['image_shadow'],
                },
                '#card_seq .card2 .card_tail img' : {
                    opacity : 0,
                },
                '#card_num_b_2' : {
                    show : true,
                    transform : 'translate(18em, 32em)',
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
