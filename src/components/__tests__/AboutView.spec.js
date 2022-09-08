import { shallowMount, mount } from "@vue/test-utils";
import {describe, it, expect} from "vitest";
import AboutView from '@/views/AboutView.vue'

describe('AboutView', () => {
    it('render about view compoenent', () => {
        const wrapper = mount(AboutView)
        const component = wrapper.find('.about')
        
        expect(wrapper.text()).toContain('Testing')
        expect(component.classes()).toContain('about')
    })
})