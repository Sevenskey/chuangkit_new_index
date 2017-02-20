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
                    //up : 300,
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
                '#mouse' : {
                    hide : true,
                }
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
                    up : '21em',
                    hide : true,
                },
                ' #card_seq .card1' : {
                    down : '9em',
                    toRight : '3em',
                    height : '21em',
                    classList : ['image_shadow'],
                },
                ' #card_seq .card1 .card_tail img' : {
                    opacity : 0,
                },
                '#card_num_b_1' : {
                    show : true,
                    up : '2em',
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
                    up : '6em',
                    hide : true,
                },
                '#card_num_b_1' : {
                    up : '3em',
                    hide : true,
                },
                '#card_seq2 .card2' : {
                    up : '4em',
                    show : true,
                },
                '#card_num_b_2' : {
                    up : '3em',
                    show : true,
                },
            },
            transition : 'all .8s',
        },
        frame5 : {
            prev : {
                '#page5 .key1' : {
                    toLeft : 50,
                },
                '#page5 .key2' : {
                    toLeft : 80,
                }
            },
            next : {
                //隐藏
                '#page4 .key1' : {
                    transition : 'all .8s',
                    classList :['page5_image_2'], 
                },
                '#page4 .key2' : {
                    transition : 'all .8',
                    classList :['page5_image_3'], 
                },
                '#page4, #page4 .image img' : {
                    hide : true,
                },
                '#card_seq2 .card2' : {
                    up : '6em',
                    hide : true,
                },
                '#card_num_b_2' : {
                    up : '3em',
                    hide : true,
                },
                //出现
                '#page5' : {
                    show : true,
                    classList : ['gradient3'],
                },
                '#page5 .key1' : {
                    transform : 'translate(0px, 0px)',
                },
                '#page5 .key2' : {
                    transform : 'translate(0px, 0px)',
                },
                '#page5 .image' : {
                    show : true,
                },
                '#card_seq2 .card3' : {
                    up : '4em',
                    show : true,
                    height : '22em',
                },
                '#card_num_b_3' : {
                    up : '4em',
                    show : true,
                },
            },
            transition: 'all .8s',
        },
    };

    if ( typeof module != 'undefined' )
        module.exports = animationConfig;
    else
        window.animationConfig = animationConfig;

})( window )
