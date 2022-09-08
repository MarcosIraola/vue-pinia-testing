
<script setup>
import {ref, reactive} from 'vue';

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
    
    @media (min-width: 1024px) {
        .about {
            min-height: 100vh;
            display: flex;
            align-items: center;
        }
    }

    .about {
        text-align: center;
    }
</style>
