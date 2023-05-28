import ButtonC from '../buttons/ButtonC.vue';
import { mount } from '@vue/test-utils';
import { test, describe, expect } from 'vitest';

describe('ButtonC', () => {
  test('Should display label', () => {
    const slot = 'Button';

    // @ts-ignore
    const wrapper = mount(ButtonC, {
      slots: {
        default: slot,
      },
    });

    expect(wrapper.html()).toContain(slot);
  });

  test('Should has correct class', () => {
    const size = 'small';

    // @ts-ignore
    const wrapper = mount(ButtonC, {
      props: {
        size,
      },
    });

    expect(wrapper.html()).toContain(`button-${size}`);
  });
});
