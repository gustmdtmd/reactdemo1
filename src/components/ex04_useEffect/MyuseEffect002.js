import { useEffect, useState } from 'react';

const MyuseEffect002 = () => {
  let data = 0;
  const [num, setNum] = useState(0);

  const handleData = (e) => {
    console.log((data = data + 1));
  };

  const handleName = (e) => {
    //setNum(e.target.value + 1); // 11. 문자로 가져오기때문.
    //setNum(parseInt(e.target.value) + 1); //2
    setNum(num + 1);
  };

  // [data] 값을 넣어주므로 data값이 변경될때만 출력이 된다.
  // data는 일반 변수이므로 출력이 안된다.
  // [data] = []
  useEffect(() => {
    console.log('data:' + data);
  }, []);

  useEffect(() => {
    console.log('num:' + num);
  }, [num]);

  return (
    <div>
      <input type='text' placeholder='date' onChange={handleData} />
      <input type='text' placeholder='num' onChange={handleName} />
      <button>등록</button>
    </div>
  );
};

export default MyuseEffect002;
