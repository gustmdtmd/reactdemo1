import { useState } from 'react';

const Myusestate003 = () => {
  const [names, setNames] = useState(['고수', '여진구', '송중기']);
  const [input, setInput] = useState('');
  const handleChageName = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  // ...names는 기본값을 복사해 가져온것.
  const handleClick = (e) => {
    setNames([...names, input]);
    setInput('');
  };

  return (
    <div>
      <input type='text' id='fname' onChange={handleChageName} value={input} />
      <button onClick={handleClick}>ADD</button>

      {/* map을 사용할 때 {}이면 return을 입력해줘야하지만, ()이면 return을 생략하여 사용가능하다. */}
      {/* {names.map((value, index) => {
        return <p key={index}>{value}</p>;
      })} */}
      {names.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  );
};

export default Myusestate003;
