import { useRef, useState } from 'react';

// useRef, useState
const MyuseState006 = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState('');
  const [userList, setUserList] = useState([
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
    { id: 3, name: 'ccc' },
  ]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const pushNewUser = () => {
    // 타입이 같아야한다. 배열이면 배열, 문자면 문자 등...
    //setUserList([...userList, { id: userList.length + 1, name: input }]);
    //setInput('');

    // inputRef는 바로 value 값을 가져오지 못하기때문에 current를 거쳐야한다.
    console.log(inputRef.current.value);
    setUserList([
      ...userList,
      { id: userList.length + 1, name: inputRef.current.value },
    ]);
    setInput('');
  };

  return (
    <div>
      <input
        type='text'
        ref={inputRef}
        style={{ display: 'block' }}
        id='fname'
        value={input}
        onChange={handleChange}
      />
      <button onClick={pushNewUser} style={{ display: 'block' }}>
        등록
      </button>
      {userList.map((element, idx) => {
        return (
          <p key={idx}>
            <span>{element.id}</span>
            <span>{element.name}</span>
          </p>
        );
      })}
    </div>
  );
};

export default MyuseState006;
