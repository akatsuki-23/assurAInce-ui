import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { login } from './api';
import { userDetails } from '../../store/atoms';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const [user, setUser] = useRecoilState(userDetails);

  useEffect(() => {
    if (user.email) {
      navigate('/home');
    }
  }, [user]);

  const onLogIn = useCallback(async () => {
    const resp = await login(email, password);

    if (resp) {
      localStorage.setItem('token', resp?.token);

      setUser(resp.user || {});
    }
  }, [password, email]);

  return (
    <div className="flex flex-col justify-center items-center gap-[20px]">
      <h1>Login</h1>
      <div className="flex gap-[10px]">
        <div>Email: </div>
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e?.target?.value);
          }}
        />
      </div>
      <div className="flex gap-[10px]">
        <div>Password: </div>
        <Input
          value={password}
          onChange={(e) => {
            setPassword(e?.target?.value);
          }}
        />
      </div>
      <Button onClick={onLogIn}>Login</Button>
    </div>
  );
};

export default LoginPage;
