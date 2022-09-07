import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
// 	const count = ref(0)
// 	const doubleCount = computed(() => count.value * 2)
// 	function increment() {
// 		count.value++
// 	}

//   	return { count, doubleCount, increment }
// })

export const useCounterStore = defineStore('counter' , {

	state: () => ({
		counter: 0,
		name: "Marcos"
	}),
	getters: {
		doubleCount: (state) => {
			state.counter * 2
		}
	},
	actions: {
		reset(){
			this.counter = 0;
		},
		addOne() {
			this.counter++
		}
	}
})
