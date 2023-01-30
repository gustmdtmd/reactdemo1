import React, { Fragment } from 'react';

// div로 하나로 의미없이 묶을때 Fragment로 대신 작성해준다.
// Fragment로 작성해주면 페이지에서 소스를 보면 의미없이 묶어준건 보이지않는다.
// <></>도 같은 가능이다.
const MyJsx002 = () => {
  return (
    //<Fragment>
    <>
      <p>start</p>
      <span>!!!</span>
    </>
    //</Fragment>
  );
};

export default MyJsx002;
