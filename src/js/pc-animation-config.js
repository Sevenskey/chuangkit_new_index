;(function( window ) {
    const animationConfig_pc = {
        frame1 : {
            prev : {
                '#blue_banner, #slogan h1, #slogan h2, #slogan #start_btn, #page1_icons' : {
                    classList : ['page1-elem-show'],
                },
                '#mouse' : {
                    classList : ['mouse-show'],
                },
            },
            next : {
                '#blue_banner, #slogan h1, #slogan h2, #slogan #start_btn, #page1_icons' : {
                    hide : true,
                    classList : ['page1-elem-hide'],
                },
                '#page1, #active_background_w' : {
                    hide : true,
                },
            },
            transitionDuration : '.7s'
        },
        frame2 : {
            prev : {
            },
            next : {
                '#card_seq .card' : {
                    show : true,
                    classList : ['page2-elem-show'],
                },
                '#active_background_b, #page2' : {
                    show : true,
                },
            },
        },
        frame3 : {
            prev : {
                '#box_set .key1' : {
                    classList : ['page3_image_c'],
                },
                '#box_set .key2' : {
                    classList : ['page3_image_s'],
                },
                '#box_set .key3' : {
                    classList : ['page3_image_w'],
                },
                '#box_set .key4' : {
                    classList : ['page3_image_l'],
                },
                '#box_set .other' : {
                    classList : ['page3_image_a'],
                },
            },
            next : {
                //隐藏
                '#active_background_b, #card_seq .card1 .card_tail img' : {
                    hide : true,
                },
                '#card_seq .card2, #card_seq .card3, #card_seq .card4, #card_seq .card5' : {
                    hide : true,
                    classList : ['page2-elem-hide'],
                },
                //变形
                '#card_seq .card1' : {
                    classList : ['image_shadow', 'page2-card-switch'],
                },
                //出现
                '#card_num_b_1' : {
                    show : true,
                    classList : ['card_num_b_1_show'],
                },
                '#page3 .title' : {
                    classList : ['title_show'],
                    show : true,
                },
                '#page3, #gradient1, #page3 .image, #box_set .image' : {
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
                    classList : ['card1-hide'],
                    hide : true,
                },
                '#card_num_b_1' : {
                    classList : ['card_num_b_1_hide'],
                    hide : true,
                },
                '#gradient1, #page3 .image img, #page3 .image .title' : {
                    hide : true,
                },
                '#box_set .other' : {
                    hide : true,
                },
                //变形
                '#box_set .key1' : {
                    classList : ['page4_image_p'],
                },
                '#box_set .key2' : {
                    classList : ['page4_image_v'], 
                },
                '#box_set .key3' : {
                    classList : ['page4_image_a'], 
                },
                '#box_set .key4' : {
                    classList : ['page4_image_t'], 
                },
                //出现
                '#gradient2, #page4, #page4 .image, #page4 .title' : {
                    show : true,
                },
                '#page4 .title' : {
                    transform : 'translateY(0.0em)',
                },
                '#card_seq2 .card2' : {
                    up : '3.0em',
                    show : true,
                },
                '#card_num_b_2' : {
                    up : '2.25em',
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
                    up : '4.5em',
                    hide : true,
                },
                '#card_num_b_2' : {
                    up : '2.25em',
                    hide : true,
                },
                '#gradient2' : {
                    hide : true,
                },
                '#box_set .key3' : {
                    hide : true,
                },
                '#box_set .key4' : {
                    hide : true,
                },
                //变形
                '#box_set .key1' : {
                    classList : ['page5_image_2'], 
                },
                '#box_set .key2' : {
                    classList : ['page5_image_3'], 
                },
                '#box_set .other' : {
                    show : true,
                    classList : ['page5_image_1'],
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
                    up : '3.0em',
                    show : true,
                    height : '16.5em',
                },
                '#card_num_b_3' : {
                    up : '3.0em',
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
                    toRight : '2.25em',
                },
                '#page6 .image_2' : {
                    toRight : '2.25em',
                },
                '#page6 .image_3' : {
                    toRight : '3.75em',
                },
                '#page6 .image_4' : {
                    toRight : '3.75em',
                },
                '#page6 .image_5' : {
                    toRight : '5.25em',
                },
                '#page6 .image_6' : {
                    toRight : '6.75em',
                },
                '#page6 .image_7' : {
                    toRight : '8.25em',
                },
                '#page6 .image_8' : {
                    down : '0.75em',
                },
                '#page6 .image_9' : {
                    down : '2.25em',
                },
                '#page6 .image_10' : {
                    down : '3.75em',
                },
                '#page6 .image_11' : {
                    down : '7.5em',
                    toRight : '11.25em',
                },
                '#page6 .image_12 img' : {
                    width : '15.0em',
                },
                '#page6 .image_13' : {
                    down : '3.0em',
                },
                '#page6 .image_14' : {
                    toLeft : '3.75em',
                },
                '#page6 .image_15' : {
                    toLeft : '3.0em',
                },
                '#page6 .image_16' : {
                    toLeft : '2.25em',
                },
                '#page6 .image_17' : {
                    toLeft : '1.5em',
                },
                '#page6 .image_18' : {
                    toLeft : '0.75em',
                },
            },
            next : {
                //隐藏
                '#page5, #page5 .image img' : {
                    hide : true,
                },
                '#card_seq2 .card3' : {
                    up : '4.5em',
                    hide : true,
                },
                '#card_num_b_3' : {
                    up : '2.25em',
                    hide : true,
                },
                '#gradient3' : {
                    hide : true,
                },
                '#box_set .other' : {
                    hide : true,
                },
                //变化
                '#box_set .key1' : {
                    //'z-index' : 9,
                    classList : ['page6_box1'], 
                },
                '#box_set .key2' : {
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
                    up : '3.0em',
                    show : true,
                    height : '16.5em',
                },
                '#card_num_b_4' : {
                    up : '2.25em',
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
            },
            next : {
                //隐藏
                '#card_seq2 .card4' : {
                    up : '4.5em',
                    hide : true,
                },
                '#card_num_b_4' : {
                    up : '2.25em',
                    hide : true,
                },
                '#page6, #page6 .image img, #gradient4, #page3 .key1, #page3 .key2, .box_set .key1, .box_set .key2' : {
                    hide : true,
                },
                //出现
                '#gradient5, #page7' : {
                    show : true,
                },
                '#page7 .image img' : {
                    classList : ['page7-elem-show'],
                },
                '.page7 .image, .page7 .title' : {
                    show : true,
                    classList : ['page7-elem-show'],
                },
                '#card_seq2 .card5' : {
                    up : '3.0em',
                    show : true,
                    height : '16.5em',
                },
                '#card_num_b_5' : {
                    up : '2.25em',
                    show : true,
                },
            },
            transitionDuration: '1s',
        },
        frame8 : {
            prev : {
            },
            next : {
                //隐藏
                '#page2' : {
                    hide : true,
                },
                '#card_seq2 .card5' : {
                    up : '4.5em',
                    hide : true,
                },
                '#card_num_b_5' : {
                    up : '2.25em',
                    hide : true,
                },
                '#page3,#page4,#page5,#page6' : {
                    display : 'none',
                },
                //变形
                '#page7, #gradient5' : {
                    classList : ['page7-hide'],
                },
                '#user_feedback li' : {
                    classList : ['page8-elem-show'],
                },
                //出现
                '.page8' : {
                    classList : ['translate0'],
                    show : true,
                },
                '#active_background_w, #user_feedback li' : {
                    show : true,
                },
            },
            transitionDuration : '1s',
        },
        frame9 : {
            prev : {
                '#medium_feedback' : {
                    down : '1.5em',
                },
                '.content_box' : {
                    down : '1.5em',
                },
                '#footer' : {
                    down : '30%',
                },
            },
            next : {
                //隐藏
                '.page8' : {
                    hide : true,
                    classList : ['page8-hide'],
                },
                '#user_feedback li' : {
                    hide : true,
                },
                '#mouse' : {
                    hide : true,
                },
                //出现
                '#medium_feedback, .content_box, #footer' : {
                    classList : ['page9-elem-show'],
                },
                '#page9' : {
                    show : true,
                },
            },
            transitionDuration : '.8s',
        }
    };

    if ( typeof module != 'undefined' )
        module.exports = animationConfig_pc;
    else
        window.animationConfig_pc = animationConfig_pc;

})( window )
