import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import InputText from '@/components/InputText';
import InputPassword from '@/components/InputPassword';
import Button from '@/components/Button';

export default function Login() {
  const [userLogin, setUserLogin] = useState({ email: '', password: '' });

  const handleChangeLogin: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;
    setUserLogin((previousValue) => ({ ...previousValue, [name]: value }));
  };

  return (
    <section className="login-page">
      <form className="login-form">
        <div className="login-img-container">
          <img src="login.gif" alt="Login" />
        </div>
        <InputText
          title="Email"
          id="email-login"
          name="email"
          type="text"
          value={userLogin.email}
          enableLabel={false}
          Icon={FaUser}
          handleChange={handleChangeLogin}
        />

        <InputPassword
          title="Senha"
          id="password-login"
          name="password"
          value={userLogin.password}
          enableLabel={false}
          handleChange={handleChangeLogin}
        />

        <Button
          type="submit"
          title="Login"
          className="login-submit-btn"
        />
      </form>
    </section>
  );
}
