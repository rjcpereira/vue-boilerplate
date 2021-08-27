<template>
    <button :class="[ type, !border ? '' : 'border']" :disabled="disabled">
        {{title}}
        <icon v-if="icon" :name="icon" :paint="paint"/>
        <slot/>
    </button>
</template>

<script>
export default {

    props: {
        title: String,
        type: {
            type: String,
            default: 'primary'
        },
        icon: String,
        paint: String,
        disabled: Boolean,
        border: Boolean
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
@import '@/styles/variables.scss';

button {
    @include reset();
    padding: 0 1rem;
    height: 32px;
    line-height: 32px;

    &.primary {
        color: $btn-primary-color;
        background: $btn-primary-bg;
        &.border {
            border: 1px solid $btn-primary-border;
        }

        &:focus,
        &:hover {
            color: $btn-primary-color-press;
            background: $btn-primary-bg-press;
            &.border {
                border-color: $btn-primary-border-press;
            }
        }
    }

    &.secondary {
        color: $btn-secondary-color;
        background: $btn-secondary-bg;
        &.border {
            border: 1px solid $btn-secondary-border;
        }

        &:focus,
        &:hover {
            color: $btn-secondary-color-press;
            background: $btn-secondary-bg-press;
            &.border {
                border-color: $btn-secondary-border-press;
            }
        }
    }
}
</style>