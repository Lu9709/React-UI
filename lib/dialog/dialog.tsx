import * as React from 'react';
import {scopedClassMarker} from '../classes';
import './dialog.scss'
import {Icon} from '../index';
interface Props {
  visible: boolean
}

const scopedClass = scopedClassMarker('react-ui-dialog')
const sc = scopedClass

const Dialog: React.FunctionComponent<Props> = (props) => {
  return (
    props.visible ?
      <div>
        <React.Fragment>
          <div className={sc('mask')}/>
          <div className={sc()}>
            <div className={sc('close')}>
              <Icon name="close"/>
            </div>
            <header className={sc('header')}>hi</header>
            <main className={sc('main')}>{props.children}</main>
            <footer className={sc('footer')}>
              <button>ok</button>
              <button>cancel</button>
            </footer>
          </div>

        </React.Fragment>

      </div>
      : null
  );
};
export default Dialog;
