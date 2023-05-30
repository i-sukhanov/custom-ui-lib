import ButtonC from '@/components/buttons/ButtonC.vue';
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

    expect(wrapper.find('button').text()).toEqual(slot);
  });

  test.each(['small', 'medium', 'large'])(
    'Should has correct class',
    (size) => {
      // @ts-ignore
      const wrapper = mount(ButtonC, {
        props: {
          size,
        },
      });

      expect(wrapper.classes()).toContain(`button-${size}`);
    }
  );
});
