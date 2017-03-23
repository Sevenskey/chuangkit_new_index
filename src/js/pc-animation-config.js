;(function( window ) {
    const init_hide_list = [
        '#page8 #user_feedback li',
        '#page2 .card',
        '#page2 .card_num_b img',
        '#box_set .image',
        '#page9 #medium_feedback',
        '#page9 .footer',
        '#page9 .content_box',
        '.image .title',
    ];
    const init_hide_str = init_hide_list.join(',');

    const animationConfig_pc = {
        init : {
            prev : {
                [init_hide_str] : {
                    hide : true,
                }
            },
            next : {},
        },
        frame1 : {
            prev : {
                '#blue_banner, #slogan h1, #slogan h2, #slogan #start_btn, #page1_icons' : {
                    show : true,
                    classList : ['page1-elem-show'],
                },
                '#mouse' : {
                    show : true,
                    classList : ['mouse-show'],
                },
            },
            next : {
                '#blue_banner, #slogan h1, #slogan h2, #slogan #start_btn, #page1_icons' : {
                    classList : ['page1-elem-hide'],
                    hide : true,
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
                '#active_background_b, #page2, #card_seq .card' : {
                    show : true,
                },
                '#card_seq .card' : {
                    classList : ['page2-elem-show'],
                },
            },
        },
        frame3 : {
            prev : {
                '#box_set .box1' : {
                    classList : ['page3_image_c'],
                },
                '#box_set .box2' : {
                    classList : ['page3_image_s'],
                },
                '#box_set .box3' : {
                    classList : ['page3_image_w'],
                },
                '#box_set .box4' : {
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
                    vhide : true,
                    classList : ['page2-elem-hide'],
                },
                //变形
                '#card_seq .card1' : {
                    classList : ['image_shadow', 'page2-card-switch'],
                },
                //出现
                '#page3 .title, #card_num_b_1, #page3, #gradient1, #page3 .image, #box_set .box' : {
                    show : true,
                },
                '#card_num_b_1' : {
                    classList : ['card_num_b_1_show'],
                },
                '#page3 .title' : {
                    classList : ['title_show'],
                },
            },
            transitionDuration : '.8s',
        },
        frame4 : {
            prev : {
            },
            next : {
                //隐藏
                '#card_seq .card' : {
                    hide : true,
                    classList : ['card1-hide'],
                },
                '#card_num_b_1' : {
                    hide : true,
                    classList : ['card_num_b_1_hide'],
                },
                '#gradient1, #page3 .image img, #page3 .image .title, #page3 .image_a, #box_set .other' : {
                    hide : true,
                },
                //变形
                '#box_set .box1' : {
                    classList : ['page4_image_p'],
                },
                '#box_set .box2' : {
                    classList : ['page4_image_v'], 
                },
                '#box_set .box3' : {
                    classList : ['page4_image_a'], 
                },
                '#box_set .box4' : {
                    classList : ['page4_image_t'], 
                },
                //出现
                '#gradient2, #page4, #page4 .image, .page4_image .title, #card_seq2 .card2, #card_num_b_2, #box_set .page4_image' : {
                    show : true,
                },
                '.page4_image .title' : {
                    transform : 'translateY(0.0em)',
                },
                '#card_seq2 .card2' : {
                    up : '3.0em',
                },
                '#card_num_b_2' : {
                    up : '2.25em',
                },
            },
            transitionDuration : '.8s',
        },
        frame5 : {
            prev : {
                '.page5 .image_2' : {
                    toLeft : 80,
                },
                '.page5 .image_3' : {
                    toLeft : 100,
                }
            },
            next : {
                //隐藏
                '#gradient2, #page4, #page4 .image, #box_set .page4_image, #box_set .box4, #box_set .box3' : {
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
                //变形
                '#box_set .box1' : {
                    classList : ['page5_image_2'], 
                },
                '#box_set .box2' : {
                    classList : ['page5_image_3'], 
                },
                '#box_set .other' : {
                    show : true,
                    classList : ['page5_image_1'],
                },
                //出现
                '#gradient3, #page5, #page5 .image, #card_seq2 .card3, #card_num_b_3, #box_set .page5_image' : {
                    show : true,
                },
                '.page5 .image_2' : {
                    transform : 'translate(0px, 0px)',
                },
                '.page5 .image_3' : {
                    transform : 'translate(0px, 0px)',
                },
                '#card_seq2 .card3' : {
                    up : '3.0em',
                    height : '16.5em',
                },
                '#card_num_b_3' : {
                    up : '3.0em',
                },
            },
            transitionDuration: '.8s',
        },
        frame6 : {
            prev :{
            },
            next : {
                //隐藏
                '#page5, .page5 .page5_image' : {
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
                '#box_set .box1' : {
                    classList : ['page6_box1'], 
                },
                '#box_set .box2' : {
                    classList : ['page6_box2'], 
                },
                //出现
                '#gradient4, #page6' : {
                    show : true,
                },
                '#page6 .image' : {
                    show : true,
                    classList : ['page6-elem-show'],
                },
                '#page6 .image_12' : {
                    classList : ['page6-image12-switch'],
                },
                '#card_seq2 .card4' : {
                    show : true,
                    up : '3.0em',
                    height : '16.5em',
                },
                '#card_num_b_4' : {
                    show : true,
                    up : '2.25em',
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
                '#page6, #page6 .image, #gradient4, #box_set' : {
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
                    show : true,
                    up : '3.0em',
                    height : '16.5em',
                },
                '#card_num_b_5' : {
                    show : true,
                    up : '2.25em',
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
                //变形
                '#page7, #gradient5' : {
                    classList : ['page7-hide'],
                },
                '#user_feedback li' : {
                    classList : ['page8-elem-show'],
                },
                //出现
                '.page8' : {
                    show : true,
                    classList : ['translate0'],
                },
                '#active_background_w, #user_feedback li' : {
                    show : true,
                },
            },
            transitionDuration : '1s',
        },
        frame9 : {
            prev : {
            },
            next : {
                //隐藏
                '.page8' : {
                    hide : true,
                    classList : ['page8-hide'],
                },
                '#mouse, #user_feedback li' : {
                    hide : true,
                },
                //出现
                '#footer, #page9, #medium_feedback, .content_box' : {
                    show : 1000,
                },
                '#medium_feedback, .content_box, #footer' : {
                    classList : ['page9-elem-show'],
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
