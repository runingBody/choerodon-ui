import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import { ButtonType, ButtonFuncType } from '../button/button';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import { getConfirmLocale } from './locale';
import Dialog from '../rc-components/dialog';
import addEventListener from '../rc-components/util/Dom/addEventListener';
import Sidebar from './Sidebar';

let mousePosition: { x: number, y: number } | null;
let mousePositionEventBinded: boolean;

export interface ModalProps {
  /** 对话框是否可见*/
  visible?: boolean;
  /** 确定按钮 loading*/
  confirmLoading?: boolean;
  /** ok按钮是否禁用 loading*/
  disableOk?: boolean;
  /** Cancel按钮是否禁用 loading*/
  disableCancel?: boolean;
  /** 标题*/
  title?: React.ReactNode | string;
  /** 是否显示右上角的关闭按钮*/
  closable?: boolean;
  /** 点击确定回调*/
  onOk?: (e: React.MouseEvent<any>) => void;
  /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调*/
  onCancel?: (e: React.MouseEvent<any>) => void;
  afterClose?: () => void;
  animationEnd?: () => void;
  /** 宽度*/
  width?: string | number;
  /** 底部内容*/
  footer?: React.ReactNode;
  /** 确认按钮文字*/
  okText?: string;
  /** 确认按钮类型*/
  okType?: ButtonType;
  /** 取消按钮文字*/
  cancelText?: string;
  /** 点击蒙层是否允许关闭*/
  maskClosable?: boolean;
  destroyOnClose?: boolean;
  style?: React.CSSProperties;
  wrapClassName?: string;
  maskTransitionName?: string;
  transitionName?: string;
  className?: string;
  getContainer?: (instance: React.ReactInstance) => HTMLElement;
  zIndex?: number;
  bodyStyle?: React.CSSProperties;
  maskStyle?: React.CSSProperties;
  mask?: boolean;
  keyboard?: boolean;
  funcType?: ButtonFuncType;
  center?: boolean;
}

export interface ModalFuncProps {
  prefixCls?: string;
  className?: string;
  visible?: boolean;
  title?: React.ReactNode;
  content?: React.ReactNode;
  onOk?: (...args: any[]) => any | PromiseLike<any>;
  onCancel?: (...args: any[]) => any | PromiseLike<any>;
  width?: string | number;
  iconClassName?: string;
  okText?: string;
  okType?: ButtonType;
  cancelText?: string;
  iconType?: string;
  maskClosable?: boolean;
  zIndex?: number;
  okCancel?: boolean;
  style?: React.CSSProperties;
  type?: string;
  keyboard?: boolean;
  transitionName?: string;
  funcType?: ButtonFuncType;
  confirmLoading?: boolean,
  disableOk?: boolean,
  disableCancel?: boolean,
  footer?: React.ReactNode;
}

export type ModalFunc = (props: ModalFuncProps) => {
  destroy: () => void,
};

export interface ModalLocale {
  okText: string;
  cancelText: string;
  justOkText: string;
}

export default class Modal extends React.Component<ModalProps, {}> {
  static info: ModalFunc;
  static success: ModalFunc;
  static error: ModalFunc;
  static warn: ModalFunc;
  static warning: ModalFunc;
  static confirm: ModalFunc;
  static Sidebar: typeof Sidebar;

  static defaultProps = {
    prefixCls: 'ant-modal',
    width: 520,
    transitionName: 'zoom',
    maskTransitionName: 'fade',
    confirmLoading: false,
    disableOk: false,
    disableCancel: false,
    visible: false,
    okType: 'primary',
    center: false,
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    okText: PropTypes.node,
    cancelText: PropTypes.node,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    confirmLoading: PropTypes.bool,
    visible: PropTypes.bool,
    align: PropTypes.object,
    footer: PropTypes.node,
    title: PropTypes.node,
    closable: PropTypes.bool,
    transitionName: PropTypes.string,
    funcType: PropTypes.string,
    center: PropTypes.bool,
  };

  handleCancel = (e: any) => {
    const onCancel = this.props.onCancel;
    if (onCancel) {
      onCancel(e);
    }
  };

  handleOk = (e: any) => {
    const onOk = this.props.onOk;
    if (onOk) {
      onOk(e);
    }
  };

  componentDidMount() {
    if (mousePositionEventBinded) {
      return;
    }
    // 只有点击事件支持从鼠标位置动画展开
    addEventListener(document.documentElement, 'click', (e: MouseEvent) => {
      mousePosition = {
        x: e.pageX,
        y: e.pageY,
      };
      // 100ms 内发生过点击事件，则从点击位置动画展示
      // 否则直接 zoom 展示
      // 这样可以兼容非点击方式展开
      setTimeout(() => mousePosition = null, 100);
    });
    mousePositionEventBinded = true;
  }

  renderFooter = (locale: ModalLocale) => {
    const { okText, okType, cancelText, confirmLoading, funcType, disableOk, disableCancel } = this.props;
    return (
      <div>
        <Button
          disabled={disableCancel || confirmLoading}
          onClick={this.handleCancel}
          funcType={funcType}
        >
          {cancelText || locale.cancelText}
        </Button>
        <Button
          type={okType}
          funcType={funcType}
          disabled={disableOk}
          loading={confirmLoading}
          onClick={this.handleOk}

        >
          {okText || locale.okText}
        </Button>
      </div>
    );
  };

  render() {
    const { footer, visible } = this.props;
    const defaultFooter = (
      <LocaleReceiver
        componentName="Modal"
        defaultLocale={getConfirmLocale()}
      >
        {this.renderFooter}
      </LocaleReceiver>
    );
    return (
      <Dialog
        {...this.props}
        footer={footer === undefined ? defaultFooter : footer}
        visible={visible}
        mousePosition={mousePosition}
        onClose={this.handleCancel}
      />
    );
  }
}
