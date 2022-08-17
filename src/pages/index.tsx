import { useState } from 'react';

const IndexPage = () => {
  console.log('INDEXPAGE RENDERING');
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <span>名前: {name}</span>
      </div>
      <div>
        <button
          onClick={() => {
            setAge(age + 1);
          }}
        >
          -
        </button>
        <p>{age}</p>
        <button
          onClick={() => {
            setAge(age - 1);
          }}
        >
          +
        </button>
        <span>年齢: {age}</span>
      </div>
    </>
  );
};

export default IndexPage;

/***
 * 状態管理
 * データフェッチ
 *
 * ***/
