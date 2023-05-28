import TextInput from '../../inputs/TextInput.vue';
import { mount } from '@vue/test-utils';
import { test, describe, expect } from 'vitest';

describe('TextInput', () => {
  test('Should display label', () => {
    const label = 'Label';

    const wrapper = mount(TextInput, {
      props: {
        label,
      },
    });

    expect(wrapper.find('.text-input--label span').text()).toEqual(label);
  });

  test('Should emit input event with value', async () => {
    const wrapper = mount(TextInput);
    const value = 'Value';

    await wrapper.find('input').setValue(value);

    expect(wrapper.emitted()).toHaveProperty('input');
    expect(wrapper.emitted('input')).toEqual([[value]]);
  });
});
