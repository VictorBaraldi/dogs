import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import UseForm from '../../Hooks/UseForm';

const LoginForm = () => {
  const username = UseForm();
  const password = UseForm();

  function handleSubmit(e) {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
          return json;
        });
    }
  }

  return (
    <div>
      <section>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <Input label="Usuário" type="text" name="username" {...username} />
          <Input label="Senha" type="password" name="password" {...password} />
          <Button>Entrar</Button>
        </form>
        <Link to="/login/criar">Cadastro</Link>
      </section>
    </div>
  );
};

export default LoginForm;
