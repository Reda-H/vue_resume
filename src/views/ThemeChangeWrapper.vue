<template>
    <div class="single-page-wrapper" :class="theme">
        <div class="theme-change" @click="changeTheme">
            <span class="beads">
                <span class="bead" />
                <span class="bead" />
                <span class="bead" />
                <span class="bead" />
            </span>
        </div>
        <div class="theme-logo">
            <Icon>
                <Sun v-if="theme == 'light'"/>
                <Moon v-else/>
            </Icon>
        </div>
        <slot />
    </div>
</template>

<script>
import Icon from './Icon.vue'
import Moon from './Icons/Moon.vue'
import Sun from './Icons/Sun.vue'
export default {
    name: "ThemeChangeWrapper",
    components: {
        Icon,
        Moon,
        Sun
    },
    props: {},
    data() {
        return {
            theme: 'light'
        };
    },
    methods: {
        changeTheme: function () {
            if (this.theme == 'light') this.theme = 'dark';
            else this.theme = 'light';
        }
    }
}
</script>

<style lang="scss">
.theme-change {
    z-index: 1;
    color: black;
    position: fixed;
    top: 0;
    right: 5%;
    height: 56px;
    width: 11px;
    cursor: pointer;

    @media only screen and (max-width: 992px) {
        right: 7%;
    }
}

.theme-logo {
    position: fixed;
    top: 5px;
    right: calc(5% - 25px);
    height: 20px;
    width: 20px;

    @media only screen and (max-width: 992px) {
        right: calc(7% - 25px);
    }
}

.beads {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2px;

    .bead {
        width: 10px;
        height: 10px;
        outline: black 1px solid;
        background: grey;
        border-radius: 50%;
    }

    .bead:last-of-type {
        height: 20px;
        border-radius: 25%;
    }
}</style>