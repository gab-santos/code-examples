/* eslint-disable no-lone-blocks */
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useReducer,
  useImperativeHandle
} from 'react';

interface IUser {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  // useState
  const [users, setUsers] = useState<[IUser]>();
  async function loadData() {
    const response = await fetch('http://api.github.com/users')
    const data = await response.json()
    setUsers(data)
  }
  loadData()

  // useMemo
  const names = useMemo(
    () => users?.map(user => user.name).join(", "),
    [users]
  )

  // useCallback
  const greeting = useCallback(
    (user: IUser) => alert(`Hello ${user.name}`),
    []
  )

  // useRef
  const inputRef = useRef<HTMLInputElement>(null);
  inputRef.current?.focus();

  return (
    <form action="">
      <input type="text" ref={inputRef} />
    </form>
  );
}

export default App;
