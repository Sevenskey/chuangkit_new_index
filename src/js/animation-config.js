;(function( window ) {
    const animationConfig = {
        frame1 : {
            prev : {
                '#slogan h1, #slogan h2, #slogan #start_btn, #page1_icons, #mouse' : {
                    transform : 'translateY(0px)',
                    opacity : 1,
                },
                '#blue_banner' : {
                    transform : 'translateY(-10px)',
                    opacity : 1,
                },
            },
            next : {
                '#blue_banner' : {
                    transform : 'translateY(-300px)',
                    hide : true,
                },
                '#slogan h1, #slogan h2, #slogan #start_btn, #page1_icons' : {
                    transform : 'translateY(-300px)',
                    hide : true,
                },
                '#page1' : {
                    hide : true,
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
                //'#mouse' : {
                    //hide : true,
                //}
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
                    up : '15.75em',
                    hide : true,
                },
                '#card_seq .card1 .card_tail img' : {
                    opacity : 0,
                },
                //变形
                '#card_seq .card1' : {
                    down : '6.75em',
                    toRight : '2.25em',
                    height : '15.75em',
                    classList : ['image_shadow'],
                },
                //出现
                '#card_num_b_1' : {
                    show : true,
                    up : '1.5em',
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
                    up : '4.5em',
                    hide : true,
                },
                '#card_num_b_1' : {
                    up : '2.25em',
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
                '#page7 .image_hdimg img' : {
                    down : '1.5em',
                },
                '#page7 .image_bqtp img' : {
                    down : '1.5em',
                },
                '#page7 .image_jpg img' : {
                    down : '1.5em',
                },
                '#page7 .image_pj img' : {
                    down : '1.5em',
                },
                '#page7 .image_ppt img' : {
                    down : '1.5em',
                },
                '#page7 .image_tmbj img' : {
                    down : '1.5em',
                },
            },
            next : {
                //隐藏
                '#page6, #page6 .image img' : {
                    hide : true,
                },
                '#card_seq2 .card4' : {
                    up : '4.5em',
                    hide : true,
                },
                '#card_num_b_4' : {
                    up : '2.25em',
                    hide : true,
                },
                '#gradient4' : {
                    hide : true,
                },
                '#page3 .key1, #page3 .key2' : {
                    hide : true,
                },
                //出现
                '#page7' : {
                    show : true,
                },
                '#page7 .image_hdimg img' : {
                    transform : 'translate(0px, 0px)',
                },
                '#page7 .image_bqtp img' : {
                    transform : 'translate(0px, 0px)',
                },
                '#page7 .image_jpg img' : {
                    transform : 'translate(0px, 0px)',
                },
                '#page7 .image_pj img' : {
                    transform : 'translate(0px, 0px)',
                },
                '#page7 .image_ppt img' : {
                    transform : 'translate(0px, 0px)',
                },
                '#page7 .image_tmbj img' : {
                    transform : 'translate(0px, 0px)',
                },
                '.page7 .image, .page7 .title' : {
                    show : true,
                    transform : 'translate(0px, 0px)',
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
                '#gradient5' : {
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
                //'#page7, #page7 .image img, #page7 .image .title' : {
                    //hide : true,
                //},
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
                //'#gradient5' : {
                    //hide : true,
                //},
                //变形
                '#gradient5' : {
                    up : '100%',
                },
                '#page7' : {
                    up : '100%',
                },
                '.user_feedback li:nth-child(1)' : {
                    transform : 'translate(0px, 0px)',
                },
                '.user_feedback li:nth-child(2)' : {
                    transform : 'translate(0px, 0px)',
                },
                '.user_feedback li:nth-child(3)' : {
                    transform : 'translate(0px, 0px)',
                },
                '.user_feedback li:nth-child(4)' : {
                    transform : 'translate(0px, 0px)',
                },
                '.user_feedback li:nth-child(5)' : {
                    transform : 'translate(0px, 0px)',
                },
                '.user_feedback li:nth-child(6)' : {
                    transform : 'translate(0px, 0px)',
                },
                //出现
                '#active_background_w' : {
                    retrieve : true,
                },
                '.page8' : {
                    transform : 'translateY(0px)',
                    show : true,
                },
                '.user_feedback li' : {
                    show : true,
                },
                //'#mouse' : {
                    //show : true,
                //}
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
                    up : '2.25em',
                },
                '#user_feedback li' : {
                    hide : true,
                },
                '#mouse' : {
                    hide : true,
                },
                //变形
                '#medium_feedback' : {
                    transform : 'translateY(0px)',
                },
                '.content_box' : {
                    transform : 'translateY(0px)',
                },
                '#footer' : {
                    transform : 'translateY(0px)',
                },
                //出现
                '#page9, #medium_feedback, .content_box, #footer' : {
                    show : true,
                },
            },
            transitionDuration : '.8s',
        }
    };

    if ( typeof module != 'undefined' )
        module.exports = animationConfig;
    else
        window.animationConfig = animationConfig;

})( window )
