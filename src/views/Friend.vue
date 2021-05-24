<template>
    <div>
        <h1>朋友</h1>
        <button @click="btnClick">点击</button>
        <h2 v-if="show">{{ msg }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '你好',
            show: true
        }
    },
    beforeCreate() {
        console.log(this.msg);
        console.log('beforeCreate');
    },
    created() {
        console.log(this.msg);
        console.log('created');
    },
    beforeMount() {
        var h2 = document.querySelector('h2')
        console.log(h2);
        console.log('beforeMount');
    },
    mounted() {
        var h2 = document.querySelector('h2')
        console.log(h2);
        console.log('mounted');
    },
    beforeUpdate() {
        var h2 = document.querySelector('h2')
        console.log(h2);
        console.log('beforeUpdate');
    },
    updated() {
        var h2 = document.querySelector('h2')
        console.log(h2);
        console.log('updated');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    },
    methods: {
        btnClick() {
            this.show = false
        }
    },
}
</script>