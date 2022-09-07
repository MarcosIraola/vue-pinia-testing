import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter' , {

	state: () => ({
		counter: 0,
		name: "Marcos"
	}),
	getters: {
		doubleCount: (state) => {
			return state.counter * 2
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
