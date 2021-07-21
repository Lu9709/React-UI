import React, {useState} from 'react';
import Dialog, {alert, confirm, modal} from './dialog';


const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const openModal = () => {
    const close = modal(
      <div>
        <h1>你好</h1>
        <button onClick={() => close()}>close</button>
      </div>);
  };
  return (
    <div>
      <div>
        <h1>example 1</h1>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog visible={x} buttons={
          [
            <button onClick={() => {setX(false);}}>Ok</button>,
            <button onClick={() => {setX(false);}}>Cancel</button>
          ]
        } onClose={() => setX(false)}>
          <strong>hi</strong>
        </Dialog>
      </div>
      <div>
        <h1>example 2</h1>
        <button onClick={() => setY(!y)}>click</button>
        <Dialog visible={y} closeOnClickMask={true} buttons={
          [
            <button onClick={() => {setY(false);}}>OK</button>,
            <button onClick={() => {setY(false);}}>Cancel</button>
          ]
        } onClose={() => setY(false)}>
          <strong>hi</strong>
        </Dialog>
      </div>
      <div>
        <h1>example 3</h1>
        <button onClick={() => alert('1')}>alert</button>
        <button onClick={() => confirm('2', () => {
            console.log('点击了yes');
          },
          () => {console.log('点击了no');}
        )}>confirm
        </button>
      </div>
      <div>
        <h1>example 4</h1>
        <button onClick={openModal}>modal</button>
      </div>
    </div>
  );
};
export default DialogExample;
