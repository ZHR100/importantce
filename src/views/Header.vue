<template>
    <div class="header">
        <h1>头部</h1>
        <div>
            <router-link to="/">发现音乐</router-link> | 
            <router-link to="/my">我的音乐</router-link> | 
            <router-link to="/friend">朋友</router-link>
        </div>
        <!-- <keep-alive :include="['My']">
            <router-view></router-view>
        </keep-alive> -->
        <!-- <keep-alive :exclude="['My']"> -->
            <router-view></router-view>
        <!-- </keep-alive> -->
    </div>
</template>