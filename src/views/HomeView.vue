<script setup>
import { storeToRefs } from 'pinia'
import TheWelcome from '../components/TheWelcome.vue';
import { useCounterStore } from '../stores/counter';

const main = useCounterStore();
const {counter, name} = storeToRefs(main);

function add(value) {
    main.$patch({
        counter: counter.value + value
    })

    //or
    
    // main.$patch((state) => (state.counter += value))
}

</script>

<template>
    <div class="container">
        <!-- <TheWelcome /> -->
        <h2>Test: Setteo Pinia y Testing</h2>
        <h3>Name from store: {{name}}</h3>
        <h3>Counter from store: {{counter}}</h3>
        <div class="cointainer-buttons">
            <button @click="main.addOne">Click Me</button>
            <button @click="add(15)">Add different (15 in this case)</button>

            <!-- <span >{{main.doubleCount(counter)}}</span> -->
            <button @click="main.reset">Reset</button>
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
</style>
