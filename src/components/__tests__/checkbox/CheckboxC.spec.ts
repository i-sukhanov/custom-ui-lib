import CheckboxC from '../../checkbox/CheckboxC.vue';
import { mount } from '@vue/test-utils';
import { test, describe, expect } from 'vitest';

describe('CheckboxC', () => {
  test('Should has correct label', () => {
    const label = 'Checkbox';

    const wrapper = mount(CheckboxC, {
      props: {
        label,
        id: '0',
      },
    });

    expect(wrapper.find('label').text()).toEqual(label);
  });

  test('Should emit event', async () => {
    const label = 'Checkbox';

    const wrapper = mount(CheckboxC, {
      props: {
        label,
        id: '0',
      },
    });

    await wrapper.find('input').trigger('change');

    expect(wrapper.emitted('change')).toBeTruthy();
  });
});
