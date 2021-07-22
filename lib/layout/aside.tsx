import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const sc = scopedClassMaker('react-ui-layout');
const Aside: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <div>
      <div className={sc('aside', {extra: className})} {...rest}>
        {props.children}
      </div>
    </div>
  );
};

export default Aside;
