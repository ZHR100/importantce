<template>
    <div>
        <h1>{{ msg }}</h1>
        <User></User>
    </div>
</template>

<script>
import User from './User.vue'
export default {
    components: {
        User
    },
    data() {
        return { 
            msg: 'nihao'
        }
    }
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>