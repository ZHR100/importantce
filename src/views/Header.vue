<template>
<div id="app">
        <div class="g-topbar">
        <div class="m-top">
            <div class="wrap f-cb">
                <div class="logo">
                    <a hidefocus="true" href="/#"></a>
                </div>
                <div class="nav">
                    <span id="cloud"></span>
                    <ul id="navBar">
                          <li class="blackbg"><router-link to="/"><em>发现音乐</em>
                           <sub class="cor">&nbsp;</sub></router-link></li>
                            <li><router-link to="/my">我的音乐</router-link></li>
                            <li> <router-link to="/friend">朋友</router-link></li>
                            <li> <router-link to="/store">商城 </router-link></li>
                            <li><router-link to="/musician">音乐人</router-link></li>
                            <li><router-link to="/download">下载客户端</router-link></li>
                    </ul>
                </div>
            </div>
            <div id="g_nav2" class="m-subnav j-tflag">
                <div class="nav2">
                    <span id="cloud"></span>
                    <ul id="navBar">
                        <a class="">
                            <li class="blackbg">推荐
                                <sub class="cor">&nbsp;</sub></li>
                        </a>
                        <a>
                            <li>排行榜</li>
                        </a>
                        <a>
                            <li>歌单</li>
                        </a>
                        <a>
                            <li>主播电台</li>
                        </a>
                        <a>
                            <li>歌手</li>
                        </a>
                        <a>
                            <li>新碟上架</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<style>
     * {
        margin: 0;
        padding: 0;
    }
    
    .g-topbar {
        position: absolute;
        width: 100%;
        top: 0px;
        left: 0;
        z-index: 99;
        zoom: 1;
        color: rgb(204, 204, 204);

    }
    
    div {
        display: block;
    }
    
    .f-cb:after {
        clear: both;
        content: '.';
        display: block;
        height: 0;
        visibility: hidden;
    }
    
    .m-top {
        position: relative;
        z-index: 1000;
        height: 70px;
        box-sizing: border-box;
        background: #242424;
        border-bottom: 1px solid #000;
    }
    
    .m-top .wrap {
        width: 1100px;
        margin: 0 auto;
    }
    
    .m-top .logo {
        float: left;
        width: 176px;
        height: 69px;
        margin-left: 50px;
        background: url();
        background-position: 0 0;
    }
    
    .m-subnav-up {
        height: 5px;
        border-bottom: none;
    }
    
    .f-hide,
    .js-hide {
        display: none !important;
    }
    
    .f-pr {
        position: relative;
        zoom: 1;
    }
    
    .m-subnav {
        z-index: 90;
        height: 35px;
        box-sizing: border-box;
        background-color: #C20C0C;
        border-bottom: 1px solid #a40011;
    }
    
    .m-subnav .wrap {
        width: 1100px;
        height: 34px;
        margin: 0 auto;
    }
    
    .m-subnav .nav {
        float: left;
        padding-left: 180px;
    }
    

    ul {
        list-style: none;
    }
    
    .nav {
        width: 700px;
        height: 70px;
        margin: 0 auto;
        border-radius: 10px;
        position: relative;
        float: left;
        margin: 0 auto;
    }
    
    .nav li {
        width: 90px;
        height: 70px;
        text-align: center;
        line-height: 70px;
        float: left;
        cursor: pointer;
    }
    
    .nav .blackbg {
        background: rgb(0, 0, 0);
    }
    
    .nav li:hover {
        background: rgb(0, 0, 0);
    }
    
    ul {
        position: relative;
    }
    
    .nav span {
        position: absolute;
        top: 0;
        left: 0;
        width: 83px;
        height: 70px;
        background: url() no-repeat;
    }
    
    .nav2 {
        width: 100%;
        height: 35px;
        margin: 0 auto;
        position: relative;
        float: left;
        margin-left: 440px;
        color: white;
    }
    
    .nav2 li {
        width: 90px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        float: left;
        cursor: pointer;
        text-decoration-line: none;
    }
    
    .nav2 .blackbg {
        background: rgb(150, 9, 9);
        border-radius: 30%;
    }
    
    .nav2 li:hover {
        background: rgb(150, 9, 9);
        border-radius: 30%;
    }
    
    .nav2 span {
        position: absolute;
        top: 0;
        left: 0;
        width: 83px;
        height: 35px;
        background: url() no-repeat;
    }
    
    .nav2 .m-nav .cor {
        display: block;
        position: absolute;
        left: 50%;
        top: 64px;
        width: 12px;
        height: 7px;
        margin-left: -6px;
        overflow: hidden;
        background-position: -226px 0;
        background: url() no-repeat 0 9999px;
    }
</style>
