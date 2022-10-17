<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../stores/counter';

const main = useCounterStore();
const { counter, name, doubleCount } = storeToRefs(main);
const { addOne, reset, setName } = main;

function add(value) {
    main.$patch({
        counter: counter.value + value
    })

    //or
    
    // main.$patch((state) => (state.counter += value))
}


main.$subscribe((mutation, state) => {
    console.log("mutation", mutation)
    console.log("state", state)
})

</script>

<template>
    <div class="container">
        <h2>Pinia</h2>
        <h3>Name from store: {{name}}</h3>
        <h3>Counter from store: {{counter}}</h3>
        <h3>DoubleCount getter: {{doubleCount}}</h3>

        <div class="input-container">
            <h3>Change store name from v-model</h3>
            <input class="input" type="text" placeholder="hola" v-model="name"/>
        </div>

        <div class="cointainer-buttons">
            <button @click="addOne">Click Me</button>
            <button @click="add(15)">Add 15</button>
            <button @click="reset">Reset</button>
            <button @click="setName('Asd')"> Change Name of store</button>
        </div>
    </div>
</template>

<style scoped>

    .container {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .cointainer-buttons {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    button {
        margin: 5px 0;
        height: 30px;
    }

    .input-container {
        margin: 20px;
    }

    .input {
        width: 180px;
        padding: 5px;
        margin: 5px;
    }
</style>
