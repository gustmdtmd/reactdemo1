import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.check) {
    case 'name':
      return { name: action.type };
    case 'nickName':
      return { nickName: action.type };
    default:
      return { state };
  }
}

const MyuseReducer002 = () => {
  const [state, dispatch] = useReducer(reducer, { name: '', nickName: '' });
  const { name, nickName } = state;

  const onChange = (e) => {
    dispatch({ check: e.target.name, type: e.target.value });
  };

  return (
    <div>
      <div>
        <input type='text' name='name' placeholder='name' onChange={onChange} />
        <input
          type='text'
          name='nickName'
          placeholder='nickName'
          onChange={onChange}
        />
      </div>

      <div>
        <b>이름:</b>
        {name}
      </div>

      <div>
        <b>닉네임:</b>
        {nickName}
      </div>
    </div>
  );
};

export default MyuseReducer002;
