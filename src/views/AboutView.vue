
<script setup>
import {ref, reactive} from 'vue';
import View from '../components/View.vue'

    const counter = ref(0);
    const inputValue = ref('')

    const addOne = () => {
        counter.value++
    }

    const addWith = (value) => {
        counter.value += value
    }

    const reset = () => {
        counter.value = 0;
    }

    const onChange = (event) => {
        console.log('input', inputValue.value)
    }
    
</script>


<template>
    <div class="about">
        <h1>Testing</h1>
        <h2>Counter</h2>
        <p id="counter-show">counter: {{ counter }}</p>

        <div class="div-container">
            <button id="button-add" @click="addOne">Sumar</button>
            <button id="button-addWith" @click="addWith(20)">Sumar 20</button>
            <button id="button-reset" @click="reset">reset</button>
        </div>

        <div class="div-container">
            <input 
                id="name_input"
                type="text" 
                placeholder="Escribe tu nombre" 
                v-model="inputValue" 
                @input="onChange($event)"
            >
        </div>
        <View element="div" class="test-div">Hello from VieComp</View>
    </div>
</template>


<style scoped>

    .div-container {
        display: flex;
        flex-direction: column;
    }

    .div-container button {
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
