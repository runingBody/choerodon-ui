import { Component } from 'react';
import PropTypes from 'prop-types';
import { ViewComponentProps } from '../core/ViewComponent';

export interface OptionProps extends ViewComponentProps {
  /**
   * 选项值
   */
  value?: any;
}

/* eslint-disable react/prefer-stateless-function,react/no-unused-prop-types */
export default class Option extends Component<OptionProps, any> {
  static propTypes = {
    /**
     * 选项值
     */
    value: PropTypes.any,
  };

  static __PRO_OPTION = true;
}
