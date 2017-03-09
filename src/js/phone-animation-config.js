;(function( window ) {
    const animationConfig_phone = {
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
                '#page1' : {
                    hide : true,
                },
                '#active_background_w' : {
                    delete : true,
                },
            },
            transitionDuration : '0.5s'
        },
        frame2 : {
            prev : {
            },
            next : {
                '#page2' : {
                    show : true,
                },
                '#active_background_b' : {
                    retrieve : true,
                },
            },
            transitionDuration : '0.5s'
        },
        frame3 : {
            prev : {
            },
            next : {
                //隐藏
                '#card_seq' : {
                    hide : true,
                },
                '#active_background_b' : {
                    delete : true,
                },
                //出现
                '#page3, #gradient1, #card_num_b_1, #card_seq2 .card1' : {
                    show : true,
                },
            },
            transitionDuration : '0.5s'
        },
        frame4 : {
            prev : {
            },
            next : {
                //隐藏
                '#page3, #gradient1, #card_num_b_1, #card_seq2 .card1' : {
                    hide : true,
                },
                //出现
                '#page4, #gradient2, #card_num_b_2, #card_seq2 .card2' : {
                    show : true,
                },
            },
            transitionDuration : '0.5s'
        },
        frame5 : {
            prev : {
            },
            next : {
                //隐藏
                '#page4, #gradient2, #card_num_b_2, #card_seq2 .card2' : {
                    hide : true,
                },
                //出现
                '#page5, #gradient3, #card_num_b_3, #card_seq2 .card3' : {
                    show : true,
                },
            },
            transitionDuration : '0.5s'
        },
        frame6 : {
            prev : {
            },
            next : {
                //隐藏
                '#page5, #gradient3, #card_num_b_3, #card_seq2 .card3' : {
                    hide : true,
                },
                //出现
                '#page6, #gradient4, #card_num_b_4, #card_seq2 .card4' : {
                    show : true,
                },
            },
            transitionDuration : '0.5s'
        },
        frame7 : {
            prev : {
            },
            next : {
                //隐藏
                '#page6, #gradient4, #card_num_b_4, #card_seq2 .card4' : {
                    hide : true,
                },
                //出现
                '#page7, #gradient5, #card_num_b_5, #card_seq2 .card5' : {
                    show : true,
                },
            },
            transitionDuration : '0.5s'
        },
        frame8 : {
            prev : {
            },
            next : {
                //隐藏
                '#page7, #gradient5, #card_num_b_5, #card_seq2 .card5, #page2' : {
                    hide : true,
                },
                //出现
                '#page8' : {
                    show : true,
                }
            },
            transitionDuration : '0.5s'
        },
        frame9 : {
            prev : {
            },
            next : {
                '#page8' : {
                    hide : true,
                },
                '#page9' : {
                    show : true,
                }
            },
            transitionDuration : '0.5s'
        },
    };

    if ( typeof module != 'undefined' )
        module.exports = animationConfig_phone;
    else
        window.animationConfig_phone = animationConfig_phone;
})( window )
