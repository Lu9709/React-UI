import React from 'react';
import Icon from './icon';

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
};

const IconExample1:React.FunctionComponent = ()=>{
  return(
    <div>
      <Icon name="react"
            onClick={fn}
            className="521"
            onMouseEnter={() => console.log('enter')}
            onMouseLeave={() => console.log('leave')}
            onTouchStart={()=>console.log('start')}
      />
      <Icon name="vue"/>
      <Icon name="github"/>
    </div>
  )
}
export default IconExample1