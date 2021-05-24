<template>
    <button :class="[type]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: () => ''
        }
    }
}
</script>

<style scoped>
.primary {
    background: rgb(64,158,255);
}
.success {
    background: rgb(103,194,58);
}
.info {
    background: rgb(144,147,153);
}
</style>