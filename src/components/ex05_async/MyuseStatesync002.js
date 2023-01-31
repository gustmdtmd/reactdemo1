import { useState } from 'react';

/*
  React는 state가 변경이 될때마다 렌더링이 발생한다.
  React 렌더링이 발생되면 배치로 해서 처리한다.
  배치 16ms 단위로 처리한다.
  useState()은 비동기화로 처리한다.
*/

const MyuseStatesync002 = () => {
  const [number, setNumber] = useState(0);

  // setNumber(number + 1); 이 아닌
  // setNumber((number) => number + 1); 와 같은
  // 콜백함수를 넣어주면 순차적으로 처리가 된다.
  // state의 값을 순차적으로 변경할 때 콜백함수를 사용한다.
  const handleUpNumber = () => {
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
  };

  const handleDownNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={handleUpNumber}>UP</button>
      <button onClick={handleDownNumber}>DOWN</button>
    </div>
  );
};

export default MyuseStatesync002;
