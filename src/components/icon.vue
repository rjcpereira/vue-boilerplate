<template>
    <svg v-if="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :viewBox="icon.box">
        <path :d="icon.path" :style="!paint ? {} : {
            fill: paint
        }"/>
    </svg>
</template>

<script>
import icons from '@/core/icons'

export default {

    props: {
        name: String,
        paint: String,
        width: {
            type: Number,
            default: 24
        },
        height: {
            type: Number,
            default: 24
        }
    },

    data() {
        return {
            box: '0 0 24 24'
        }
    },

    computed: {
        icon() {

            return !this.name || !icons[this.name] ? null : (typeof icons[this.name] == 'string' ? {
                box: this.box,
                path: icons[this.name]
            } : icons[this.name]);
        }
    }
}
</script>

<style scoped lang="scss">
.icon {
    path {}
}
</style>
