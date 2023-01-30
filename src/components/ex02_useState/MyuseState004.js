import { useState } from 'react';

const MyuseState004 = () => {
  const [customer, setCustomer] = useState({
    name: '고수',
    address: '서울시 강남구',
    phone: '010-000-0000',
  });

  const handleName = (e) => {
    setCustomer((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

  const handleCommit = (e) => {
    console.log(`${customer.name} ${customer.address} ${customer.phone}`);
  };

  return (
    <div>
      <p>
        <span>이름</span>
        <input type='text' value={customer.name} onChange={handleName} />
      </p>
      <p>
        <span>주소</span>
        <input type='text' value={customer.address} onChange={handleName} />
      </p>
      <p>
        <span>전화</span>
        <input type='text' value={customer.phone} onChange={handleName} />
      </p>

      <buttom onClick={handleCommit}>확인</buttom>
    </div>
  );
};

export default MyuseState004;
