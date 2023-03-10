import { useState } from 'react';

const MyuseState004 = () => {
  const [customer, setCustomer] = useState({
    name: '고수',
    address: '서울시 강남구',
    phone: '010-000-0000',
  });

  const handleName = (e) => {
    setCustomer({ ...customer, name: e.target.value });
    // setCustomer((prevState) => {
    //   return { ...prevState, name: e.target.value };
    // });
  };

  const handleAddress = (e) => {
    setCustomer({ ...customer, address: e.target.value });
  };

  const handlePhone = (e) => {
    setCustomer({ ...customer, phone: e.target.value });
  };

  const handleCommit = (e) => {
    console.log(`${customer.name} ${customer.address} ${customer.phone}`);
  };

  // state값을 value에 넣을시 이벤트를 주거나 readonly를 넣어줘야한다.
  return (
    <div>
      <p>
        <span>이름</span>
        <input type='text' value={customer.name} onChange={handleName} />
      </p>
      <p>
        <span>주소</span>
        <input type='text' value={customer.address} onChange={handleAddress} />
      </p>
      <p>
        <span>전화</span>
        <input type='text' value={customer.phone} onChange={handlePhone} />
      </p>

      <button onClick={handleCommit}>확인</button>
    </div>
  );
};

export default MyuseState004;
