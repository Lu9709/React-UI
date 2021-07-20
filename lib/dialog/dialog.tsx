import React from 'react';
import {scopedClassMarker} from '../classes';
import './dialog.scss';
import {Icon} from '../index';
import {ReactElement} from 'react';

interface Props {
  visible: boolean
  buttons?: Array<ReactElement>
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean
}

const scopedClass = scopedClassMarker('react-ui-dialog');
const sc = scopedClass;


const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };
  return (
    props.visible ?
      <React.Fragment>
        <div className={sc('mask')} onClick={onClickMask}/>
        <div className={sc()}>
          <div className={sc('close')} onClick={onClickClose}>
            <Icon name="close"/>
          </div>
          <header className={sc('header')}>
            提示
          </header>
          <main className={sc('main')}>
            {props.children}
          </main>
          <footer className={sc('footer')}>
            {props.buttons && props.buttons.map((button, index) =>
              React.cloneElement(button, {key: index})
            )}
          </footer>
        </div>
      </React.Fragment>
      : null
  );
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

export default Dialog;
