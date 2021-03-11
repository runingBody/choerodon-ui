import React from 'react';
import { mount } from 'enzyme';
import NumberField from '..';
import NumberDataTest from './numberData';
import focusTest from '../../../tests/shared/focusTest';
import mountTest from '../../../tests/shared/mountTest';

mountTest(NumberField);
focusTest(NumberField);

describe('NumberField-pro', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders NumberField correctly', () => {
    const wrapper = mount(<NumberField />);
    expect(wrapper).toMatchSnapshot();
  });

  it('step renders correctly', () => {
    const wrapper = mount(<NumberField />);
    expect(wrapper.find('.c7n-pro-input-number-inner-button')).toHaveLength(0);
    wrapper.setProps({ step: 1 });
    wrapper.update();
    expect(wrapper.find('.c7n-pro-input-number-inner-button')).toHaveLength(1);
  });

  it('step should have different value', () => {
    const wrapper = mount(<NumberField step={0.1} min={0.1} />);
    wrapper.setProps({ step: 0.01 });
    wrapper.update();
    wrapper.setProps({ min: -1 });
    wrapper.update();
    wrapper.setProps({ step: 1.1 });
    wrapper.update();
    wrapper.setProps({ min: null });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('{step,min} null renders correctly', () => {
    const wrapper = mount(<NumberField step={null} min={null} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ step: 20 });
    wrapper.update();
    wrapper.setProps({ min: 20 });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('step icon click renders correctly', () => {
    const wrapper = mount(<NumberField value={18} />);
    expect(
      wrapper
        .find('input')
        .at(0)
        .prop('value'),
    ).toBe('18');
    wrapper.setProps({ value: '198' });
    wrapper.update();
    expect(
      wrapper
        .find('input')
        .at(0)
        .prop('value'),
    ).toBe('198');
    wrapper.setProps({ value: '-1' });
    wrapper.update();
    expect(
      wrapper
        .find('input')
        .at(0)
        .prop('value'),
    ).toBe('-1');
    wrapper.setProps({ value: '1' });
    wrapper.update();
    expect(
      wrapper
        .find('input')
        .at(0)
        .prop('value'),
    ).toBe('1');
    wrapper.setProps({ value: '12' });
    wrapper.update();
    expect(
      wrapper
        .find('input')
        .at(0)
        .prop('value'),
    ).toBe('12');
    wrapper.setProps({ value: null });
    wrapper.update();
    expect(
      wrapper
        .find('input')
        .at(0)
        .prop('value'),
    ).toBe('');
  });

  it('step multiple renders correctly', () => {
    const handleChange = jest.fn();
    const wrapper = mount(
      <NumberField onChange={handleChange} step={1} multiple max={10} min={5} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('the range value should render correctly', () => {
    const handleChange = jest.fn();
    const wrapper = mount(
      <NumberField
        range={['start', 'end']}
        defaultValue={{ start: 0, end: 4 }}
        placeholder={['Range Start', 'Range End']}
        onChange={handleChange}
      />,
    );
    // expect(wrapper).toMatchSnapshot();
    expect(
      wrapper
        .find('.c7n-pro-input-number-range-start')
        .at(0)
        .prop('value'),
    ).toBe('0');
    expect(
      wrapper
        .find('.c7n-pro-input-number-range-end')
        .at(0)
        .prop('value'),
    ).toBe('4');
  });

  it('input should render readOnly correctly', () => {
    const wrapper = mount(<NumberField />);
    expect(wrapper.prop('readOnly')).toBe(false);
    wrapper.setProps({ readOnly: true });
    wrapper.update();
    expect(wrapper.prop('readOnly')).toBe(true);
  });

  it('the input number should add when the {plus} icon clicked', () => {
    const wrapper = mount(<NumberField step={1} min={0} max={10} />);
    wrapper
      .find('.c7n-pro-input-number-plus')
      .at(0)
      .simulate('mousedown');
    jest.runOnlyPendingTimers();
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('the input number should reduce when the {minus} icon clicked', () => {
    const wrapper = mount(<NumberField step={1} min={-10} max={0} />);
    wrapper
      .find('.c7n-pro-input-number-minus')
      .at(0)
      .simulate('mousedown');
    jest.runOnlyPendingTimers();
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });


  it('the input number should correctly add when the {plus} icon clicked and nonStrictStep', () => {
    const wrapper = mount(<NumberField step={3} nonStrictStep defaultValue={5} />);
    wrapper
      .find('.c7n-pro-input-number-plus')
      .at(0)
      .simulate('mousedown');
    jest.runOnlyPendingTimers();
    wrapper.update();
    expect(wrapper.find('.c7n-pro-input-number').prop('value')).toBe('8');
  });

  it('the input number should correctly add when the {plus} icon clicked and no nonStrictStep', () => {
    const wrapper = mount(<NumberField step={3} defaultValue={5} />);
    wrapper
      .find('.c7n-pro-input-number-plus')
      .at(0)
      .simulate('mousedown');
    jest.runOnlyPendingTimers();
    wrapper.update();
    expect(wrapper.find('.c7n-pro-input-number').prop('value')).toBe('6');
  });

  it('the input number should show correctly when set formatter ', () => {
    const wrapper = mount(<NumberField step={1} defaultValue={5000} formatter={(value)=>value} />);
    const noFormatterWrapper = mount(<NumberField step={1} defaultValue={5000} />);

    expect(wrapper.find('.c7n-pro-input-number').prop('value')).toBe('5000');
    expect(noFormatterWrapper.find('.c7n-pro-input-number').prop('value')).toBe('5,000');

  });

  it('the input number should show correctly when set formatterOptions ', () => {
    const wrapper = mount(<NumberField step={0.1} defaultValue={5000.3} formatterOptions={{options:{useGrouping:false}}}  />);
    expect(wrapper.find('.c7n-pro-input-number').prop('value')).toBe('5000.3');
  });


  it('{min,step} should control the input value', () => {
    const wrapper = mount(<NumberField step={1.1} min={-0.3} />);
    expect(wrapper.find('.c7n-pro-input-number').prop('value')).toBe('');
    wrapper
      .find('.c7n-pro-input-number-minus')
      .at(0)
      .simulate('mousedown');
    jest.runOnlyPendingTimers();
    wrapper.update();
    expect(wrapper.find('.c7n-pro-input-number').prop('value')).toBe('-0.3');
  });
  it('the restrictInput method render correctly', () => {
    const wrapper = mount(<NumberField step={1.1} min={0.3} max={9} />);
    wrapper.instance().restrictInput('8');
    jest.runOnlyPendingTimers();
    wrapper.update();
    expect(wrapper.find('.c7n-pro-input-number').prop('value')).toBe('');
    wrapper.instance().step(true);
    jest.runOnlyPendingTimers();
    wrapper.update();
  });

  it('the keydown event should render keyCode { up, down } correctly', () => {
    const wrapper = mount(<NumberField step={1} />);
    wrapper.find('input').simulate('keydown', { keyCode: 38 });
    jest.runOnlyPendingTimers();
    wrapper.find('input').simulate('keydown', { keyCode: 40 });
    jest.runOnlyPendingTimers();
    wrapper.update();
    wrapper.find('input').simulate('keydown', { keyCode: 13 });
    jest.runOnlyPendingTimers();
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('the dataset value should render correctly', () => {
    const wrapper = mount(<NumberDataTest />);
    expect(wrapper.find('NumberField').props().name).toEqual('age');
    expect(wrapper.find('input').props().value).toEqual('10,000,000');
    expect(wrapper).toMatchSnapshot();
  });
});
