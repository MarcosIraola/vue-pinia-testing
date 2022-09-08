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

</script>

<template>
    <component :is="element" :aria-label="ariaLabel" :disabled="isDisabled">
        <slot></slot>
    </component>
</template>