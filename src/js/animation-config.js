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
            transitionDuration : '.7s'
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
                //隐藏
                '#active_background_b' : {
                    delete : true,
                },
                '#card_seq .card2, #card_seq .card3, #card_seq .card4, #card_seq .card5' : {
                    up : '21em',
                    hide : true,
                },
                '#card_seq .card1 .card_tail img' : {
                    opacity : 0,
                },
                //变形
                '#card_seq .card1' : {
                    down : '9em',
                    toRight : '3em',
                    height : '21em',
                    classList : ['image_shadow'],
                },
                //出现
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
                '#page3' : {
                    show : true,
                },
                '#gradient1' : {
                    show : true,
                },
            },
            transitionDuration : '.8s',
        },
        frame4 : {
            prev : {
            },
            next : {
                //隐藏
                '#page3 .image_a' : {
                    hide : true,
                },
                '#card_seq .card1' : {
                    up : '6em',
                    hide : true,
                },
                '#card_num_b_1' : {
                    up : '3em',
                    hide : true,
                },
                '#page3 .image img, #page3 .image .title' : {
                    hide : true,
                },
                '#gradient1' : {
                    hide : true,
                },
                //变形
                '#page3 .key1' : {
                    classList : ['page4_image_p'],
                },
                '#page3 .key2' : {
                    classList : ['page4_image_v'], 
                },
                '#page3 .key3' : {
                    classList : ['page4_image_a'], 
                },
                '#page3 .key4' : {
                    classList : ['page4_image_t'], 
                },
                //出现
                '#page4' : {
                    show : true,
                    //classList : ['gradient2'],
                },
                '#page4 .image, #page4 .title' : {
                    show : true,
                },
                '#page4 .title' : {
                    transform : 'translateY(0em)',
                },
                '#card_seq2 .card2' : {
                    up : '4em',
                    show : true,
                },
                '#card_num_b_2' : {
                    up : '3em',
                    show : true,
                },
                '#gradient2' : {
                    show : true,
                },
            },
            transitionDuration : '.8s',
        },
        frame5 : {
            prev : {
                '#page5 .key1' : {
                    toLeft : 80,
                },
                '#page5 .key2' : {
                    toLeft : 100,
                }
            },
            next : {
                //隐藏
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
                '#gradient2' : {
                    hide : true,
                },
                '#page3 .key3' : {
                    hide : true,
                },
                '#page3 .key4' : {
                    hide : true,
                },
                //变形
                '#page3 .key1' : {
                    classList : ['page5_image_2'], 
                },
                '#page3 .key2' : {
                    classList : ['page5_image_3'], 
                },
                //出现
                '#page5' : {
                    show : true,
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
                '#gradient3' : {
                    show : true,
                },
            },
            transitionDuration: '.8s',
        },
        frame6 : {
            prev :{
                '#page6 .image_1' : {
                    toRight : '3em',
                },
                '#page6 .image_2' : {
                    toRight : '3em',
                },
                '#page6 .image_3' : {
                    toRight : '5em',
                },
                '#page6 .image_4' : {
                    toRight : '5em',
                },
                '#page6 .image_5' : {
                    toRight : '7em',
                },
                '#page6 .image_6' : {
                    toRight : '9em',
                },
                '#page6 .image_7' : {
                    toRight : '11em',
                },
                '#page6 .image_8' : {
                    down : '1em',
                },
                '#page6 .image_9' : {
                    down : '3em',
                },
                '#page6 .image_10' : {
                    down : '5em',
                },
                '#page6 .image_11' : {
                    down : '10em',
                    toRight : '15em',
                },
                '#page6 .image_12 img' : {
                    width : '20em',
                },
                '#page6 .image_13' : {
                    down : '4em',
                },
                '#page6 .image_14' : {
                    toLeft : '5em',
                },
                '#page6 .image_15' : {
                    toLeft : '4em',
                },
                '#page6 .image_16' : {
                    toLeft : '3em',
                },
                '#page6 .image_17' : {
                    toLeft : '2em',
                },
                '#page6 .image_18' : {
                    toLeft : '1em',
                },
            },
            next : {
                //隐藏
                '#page5, #page5 .image img' : {
                    hide : true,
                },
                '#card_seq2 .card3' : {
                    up : '6em',
                    hide : true,
                },
                '#card_num_b_3' : {
                    up : '3em',
                    hide : true,
                },
                '#gradient3' : {
                    hide : true,
                },
                //变化
                '#page3 .key1' : {
                    'z-index' : 9,
                    classList : ['page6_box1'], 
                },
                '#page3 .key2' : {
                    classList : ['page6_box2'], 
                },
                //出现
                '#page6' : {
                    show : true,
                },
                '#page6 .image_1' : {
                    transform : 'translate(0px,0px)',
                },
                '#page6 .image_2' : {
                    transform : 'translate(0px,0px)',
                },
                '#page6 .image_3' : {
                    transform : 'translate(0px,0px)',
                },
                '#page6 .image_4' : {
                    transform : 'translate(0px,0px)',
                },
                '#page6 .image_5' : {
                    transform : 'translate(0px,0px)',
                },
                '#page6 .image_6' : {
                    transform : 'translate(0px,0px)',
                },
                '#page6 .image_7' : {
                    transform : 'translate(0px,0px)',
                },
                '#page6 .image_8' : {
                    transform : 'translate(0px,0px)',
                },
                '#page6 .image_9' : {
                    transform : 'translate(0px,0px)',
                },
                '#page6 .image_10' : {
                    transform : 'translate(0px,0px)',
                },
                '#page6 .image_11' : {
                    transform : 'translate(0px,0px)',
                },
                '#page6 .image_13' : {
                    transform : 'translate(0px,0px)',
                },
                '#page6 .image_14' : {
                    transform : 'translate(0px,0px)',
                },
                '#page6 .image_15' : {
                    transform : 'translate(0px,0px)',
                },
                '#page6 .image_16' : {
                    transform : 'translate(0px,0px)',
                },
                '#page6 .image_17' : {
                    transform : 'translate(0px,0px)',
                },
                '#page6 .image_18' : {
                    transform : 'translate(0px,0px)',
                },
                '#page6 .image' : {
                    show : true,
                },
                '#page6 .image_12 img' : {
                    width : '',
                },
                '#card_seq2 .card4' : {
                    up : '4em',
                    show : true,
                    height : '22em',
                },
                '#card_num_b_4' : {
                    up : '3em',
                    show : true,
                },
                '#gradient4' : {
                    show : true,
                },
            },
            transitionDuration: '1s',
        },
        frame7 : {
            prev : {
            }
        },
    };

    if ( typeof module != 'undefined' )
        module.exports = animationConfig;
    else
        window.animationConfig = animationConfig;

})( window )
