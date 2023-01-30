const name = 'react';
const age = undefined;

// jsx에서는 if를 사용하지 않고 조건부 연산자를 사용한다.
const MyJsx005 = () => {
  return (
    <div>
      {/*출력결과 <p></p>*/}
      <p>{name === 'REACT' ? name : null}</p>

      {/*출력결과 <p></p>*/}
      <p>{age}</p>
    </div>
  );
};

export default MyJsx005;
