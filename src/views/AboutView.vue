
<script setup>
import {ref, reactive} from 'vue';
import View from '../components/View.vue'

    const counter = ref(0);

    const addOne = () => {
        counter.value++
    }

    const addWith = (value) => {
        counter.value += value
    }

    const reset = () => {
        counter.value = 0;
    }
    
</script>


<template>
    <div class="about">
        <h1>Testing</h1>
        <h2>Counter</h2>
        <h2>counter: {{ counter }}</h2>

        <div class="container_buttons">
            <button @click="addOne">Sumar</button>
            <button @click="addWith(20)">Sumar 20</button>
            <button @click="reset">reset</button>
        </div>

        <View element="div" class="test-div">Hello from VieComp</View>

    </div>
</template>


<style scoped>

    .container_buttons {
        display: flex;
        flex-direction: column;
    }

    .container_buttons button {
        width: 30%;
        margin: 2px auto;
        padding: 5px 0;
    }
    
    .about {
        text-align: center;
    }

    .test-div {
        background-color: green;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 5px;
    }
</style>
