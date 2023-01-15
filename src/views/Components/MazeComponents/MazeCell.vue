<template>
    <div class="maze-cell">
        <span :key="`cell-${row}-${col}-${value}`" :class="classes"></span>
    </div>
</template>
<script>
export default {
    props: {
        row: Number,
        col: Number,
        value: String || Number
    },
    watch: {
        value() {
            console.log('vqlue chqnged')
        }
    },
    computed: {
        classes() {
            switch (this.value) {
                case 'w':
                    return 'wall';
                    break;
                case 's':
                    return 'start';
                    break;
                case 'e':
                    return 'end';
                    break;
                case 'v':
                    return 'visited';
                    break;
                default:
                    return this.value;
                    break;
            }
        }
    }
}
</script>
<style lang="">
    
</style>