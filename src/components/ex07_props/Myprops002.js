const MyProps002 = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        고객님 이름: {props.name} 나이: {props.age} 지역: {props.loc}
      </p>
    </div>
  );
};

export default MyProps002;
