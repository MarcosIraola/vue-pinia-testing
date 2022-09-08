<script setup>

defineProps({
    element: {
        type: String,
        required: true
    },
    ariaLabel: {
        type: String
    },
    isDisabled: {
        type: Boolean
    }
})

const emits = defineEmits('pressed');

const getConsoleLog = () => {
    emits('pressed')
}

</script>

<template>
    <component id="#vue-main-component" :is="element" :aria-label="ariaLabel" :disabled="isDisabled" @click="getConsoleLog()">
        <slot></slot>
    </component>
</template>