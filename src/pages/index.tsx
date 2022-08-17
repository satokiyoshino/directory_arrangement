import { useState, memo } from 'react';

const IndexPage = () => {
  console.log('INDEXPAGE RENDERING');
  return (
    <>
      <NameComponent />
      <AgeComponent />
    </>
  );
};

export default IndexPage;

const useName = () => {
  const [name, setName] = useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return [name, onChange] as const;
};

const NameComponent = memo(() => {
  console.log('NAME COMPONENT RENDERING');
  const [name, onChange] = useName();
  return (
    <div>
      <input type="text" onChange={onChange} />
      <span>名前: {name}</span>
    </div>
  );
});

const useAge = () => {
  const [age, setAge] = useState<number>(0);
  const increment = () => {
    setAge(age + 1);
  };
  const decrement = () => {
    setAge(age - 1);
  };
  return [age, increment, decrement] as const;
};

const AgeComponent = memo(() => {
  console.log('AGE COMPONENT RENDERING');
  const [age, increment, decrement] = useAge();
  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>{age}</p>
      <button onClick={increment}>+</button>
      <span>年齢: {age}</span>
    </div>
  );
});
