import React from 'react';
import './MyJsx3.css';

// jsx에서 변수를 사용할 땐 `을 이용하고 괄호는 {} 사용한다.
// jsx에서는 class가 아닌 className으로 입력해야한다.
const MyJsx003 = () => {
  const numX = 3;
  const numY = 5;

  return (
    <>
      <div>{`${numX}+${numY} = ${numX + numY}`}</div>
      <div className='line'>LineTest</div>
    </>
  );
};

export default MyJsx003;
