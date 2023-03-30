<template>
    <div class="single-page-wrapper"
        :class="theme">
        <div class="theme-change" @click="changeTheme"></div>
        <slot />
    </div>
</template>

<script>
export default {
    name: "ThemeChangeWrapper",
    props: {},
    data() {
        return {
            theme: 'light'
        };
    },
    methods: {
        changeTheme: function() {
            if(this.theme == 'light') this.theme = 'dark';
            else this.theme = 'light';
            console.log(this.theme)
        }
    }
}
</script>

<style lang="scss">
.theme-change {
    color: black;
    position: fixed;
    top: 0;
    right: 5%;
    height: 50px;
    width: 10px;
    background-color: black;
    cursor: pointer;
}
</style>