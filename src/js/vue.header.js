/**
 *
 * Created by suti on 2017/1/16.
 */
"use strict";
// import {SS} from '../lib/ss';
// import {Vue} from '../lib/vue';
class SS{
    constructor(){

    }

    $(el){
        return document.querySelector(el);
    }
}

const ss=new SS();

let liActive=[
    {active:0},
    {active:true},
    {active:0},
    {active:0},
    {active:0},
    {active:0},
]

Vue.component('header-comp',{

    template:`
        <div id="header" v-bind:class="isWhite">
            <div class="logo">
                <a v-bind:href="index"></a>
            </div>
            <nav v-if="isIndex">
                <ul v-on:mouseleave="ulOut">
                    <li v-bind:class="liActive[0]" >
                        <a v-bind:href="index" v-on:mouseover.stop="liOver">首页</a>
                    </li>
                    <li v-bind:class="liActive[1]">
                        <a v-bind:href="perice" v-on:mouseover.stop="liOver">价格</a>
                    </li>
                    <li v-bind:class="liActive[2]" >
                        <a v-bind:href="mobile" v-on:mouseover.stop="liOver">移动端</a>
                    </li>
                    <li v-bind:class="liActive[3]">
                        <a v-bind:href="man" v-on:mouseover.stop="liOver">使用教程</a>
                    </li>
                    <li v-bind:class="liActive[4]">
                        <a v-bind:href="blog" v-on:mouseover.stop="liOver">博客</a>
                    </li>
                    <li v-bind:class="liActive[5]">
                        <a v-bind:href="community" v-on:mouseover.stop="liOver">社区</a>
                    </li>
                    <div class="dec"></div>
                </ul>
            </nav>
            <nav v-else>
                <ul v-on:mouseleave="ulOut">
                    <li v-bind:class="liActive[0]">
                        <a v-bind:href="openDesign" v-on:mouseover.stop="liOver">开启设计</a>
                    </li>
                    <li v-bind:class="liActive[1]">
                        <a v-bind:href="modCenter" v-on:mouseover.stop="liOver">模板中心</a>
                    </li>
                    <li v-bind:class="liActive[2]">
                        <a v-bind:href="designCtrl" v-on:mouseover.stop="liOver">设计管理</a>
                    </li>
                    <li v-bind:class="liActive[3]">
                        <a v-bind:href="perice2" v-on:mouseover.stop="liOver">价格</a>
                    </li>
                    <div class="dec"></div>
                </ul>
            </nav>
            <div class="float-right user-bar" v-if="isLogin">
                <comp is="user-bar"></comp>
            </div>
            <div class="float-right login" v-else>
                <span>
                    <a v-bind:href="login">登录</a>
                    \/
                    <a v-bind:href="register">注册</a>
                </span>
            </div>
        </div>
            `,

    data:function(){

        return {
            isIndex:true,
            isLogin:false,
            index:"http://www.chuangkit.com",
            perice:"",
            mobile:"",
            man:"",
            blog:"",
            community:"",
            openDesign:"",
            modCenter:"",
            designCtrl:"",
            perice2:"",
            login:"",
            register:"",
            liActive:liActive,
            "isWhite":[{
                "white":false
            }]
            //......
        }

    },

    methods: {

        liOver:function(event){
            let it=event.target;
            ss.$(".dec").style.left=it.parentNode.offsetLeft+'px';
            ss.$(".dec").style.width=it.offsetWidth+'px';
        },

        ulOut:function () {
            ss.$(".dec").style.left=ss.$('li[class*="active"] a').parentNode.offsetLeft+'px';
            ss.$(".dec").style.width=ss.$('li[class*="active"] a').offsetWidth+'px';
        }

    },

    mounted:function(){
        this.ulOut();
    }

});

Vue.component('user-bar',{
    template:`
        <div id="user-bar">
            <div class="message">
                <a v-bind:href="userMessage"></a>
            </div>
            <div class="user-bar-right">
                <div class="user-img">
                    <img v-bind:src="userImg" v-bind:alt="userName">
                </div>
                <div class="user-text">
                    <div class="user-name">
                        <a>{{userName}}</a>
                    </div>
                    <div v-bind:class="userVersionC()" class="user-version">
                        <a v-bind:href="userVersionUrl">{{userVersionName()}}</a>
                    </div>
                </div>
                <div class="pop-line">
                    <div class="pop-line-top">
                        <div class="user-name">
                            <a>{{userName}}</a>
                            <div class="setup"></div>
                        </div>
                        <div class="user-email">
                            <a>{{userEmail}}</a>
                        </div>
                        
                    </div>
                    <div class="pop-line-list">
                        <ul>
                            <li>
                                <a v-bind:class="userVersion" class="user-version">{{userVersionName()}}</a>
                                <a v-bind:href="userVersionUrl" v-if="bestVersion()">立即升级</a>
                            </li>
                            <li class="has-icon">
                                <div class="message-icon"></div>
                                <a v-bind:href="userMessage">消息中心</a>
                                <a v-bind:href="userMessage" class="messageCount">{{messageCount}}</a>
                            </li>
                            <li class="has-icon">
                                <div class="ipad-icon"></div>
                                <a v-bind:href="ipad">创客贴 For iPad</a>
                            </li>
                            <li class="has-icon">
                                <div class="iphone-icon"></div>
                                <a v-bind:href="iphone">创客贴 For iPhone</a>
                            </li>
                            <li class="has-icon">
                                <div class="logout-icon"></div>
                                <a v-bind:href="logout">退出登录</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
             `,
    data:function () {
        return {
            "userName":"LiXiangYu",
            "userEmail":"lxy96@outlook.com",
            "userVersion":1,
            "userVersionUrl":"",
            "userImg":"https://avatars3.githubusercontent.com/u/7871813?v=3&s=88",
            "userMessage":"",
            "messageCount":"3",
            "ipad":"",
            "iphone":"",
            "logout":"",

        }
    },
    methods:{
        "userVersionName":function () {
            switch (this['userVersion']){
                case 1 : return "个人免费版";
                case 2 : return "个人会员版";
                case 3 : return "企业协作版";
            }
        },
        "userVersionC":function () {
            switch (this['userVersion']){
                case 1 : return {'ver1':true};
                case 2 : return {'ver2':true};
                case 3 : return {'ver3':true};
            }
        },
        "bestVersion":function () {
            if (this['userVersion']==3){
                return false;
            } else {
                return true;
            }
        },
    }
});
