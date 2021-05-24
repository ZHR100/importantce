<template>
    <div>
        <h2>{{ name }}</h2>
        <Button>点击</Button>
        <Button type="primary">确定</Button>
        <Button type="success">取消</Button>
    </div>
</template>

<script>
import Button from './Button.vue'
export default {
    components: {
        Button
    },
    data() {
        return {
            name: '张三'
        }
    }
}
</script>

<style scoped>

</style>