import { shallowMount, mount } from "@vue/test-utils";
import {describe, it, expect} from "vitest";
import AboutView from '@/views/AboutView.vue';


describe('AboutView', () => {
    it('render about view compoenent', () => {
        const wrapper = shallowMount(AboutView)
        const component = wrapper.find('.about')

        expect(wrapper.text()).toContain('Testing')
        expect(component.classes()).toContain('about')

        expect(wrapper.vm.counter).toBe(0);

        wrapper.vm.addOne()
        expect(wrapper.vm.counter).toBe(1)
        wrapper.vm.addWith(10)
        expect(wrapper.vm.counter).toBe(11)
        wrapper.vm.reset()
        expect(wrapper.vm.counter).toBe(0)

    })
    it('renders txt input, change its value and see if stored', () => {
        const inputValue = 'MarcosIraola'
        const wrapper = shallowMount(AboutView)
        const component = wrapper.find('#name_input')
        
        expect(component.element.value).toBe('');
        component.setValue(inputValue)
        expect(component.element.value).toBe(inputValue);
    })

    it('button click should increment and be rendered', async () => {
        const wrapper = shallowMount(AboutView)
        const component = wrapper.find('#button-add')
        await component.trigger('click')

        expect(wrapper.vm.counter).toBe(1)
        expect(wrapper.find('#counter-show').text()).toBe('counter: 1')
    })

    it('button click should add 20 and be rendered', async () => {
        const wrapper = shallowMount(AboutView)
        const component = wrapper.find('#button-addWith')
        await component.trigger('click')

        expect(wrapper.vm.counter).toBe(20)
        expect(wrapper.find('#counter-show').text()).toBe('counter: 20')
    })

    it('button reset counter and be rendered', async () => {
        const wrapper = shallowMount(AboutView)
        const component = wrapper.find('#button-reset')
        await component.trigger('click')

        expect(wrapper.vm.counter).toBe(0)
        expect(wrapper.find('#counter-show').text()).toBe('counter: 0')
    })

    // it('button click should call increment and counter data increments', async () => {
    //     const spyAddOne = jest.spyOn(AboutView.methods, 'addOne')

    //     const wrapper = shallowMount(AboutView)
    //     const component = wrapper.find('#button-add')
    //     await component.trigger('click')

    //     expect(spyAddOne).toHaveBeenCalled(1)
    //     expect(wrapper.vm.counter).toBe(1)
    // })
    
})