const MyProps003 = ({ name = '아무개', age = 10, loc = '제주' }) => {
  return (
    <div>
      <p>
        고객님 이름: {name} 나이: {age} 지역: {loc}
      </p>
    </div>
  );
};

export default MyProps003;
