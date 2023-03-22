import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import UseForm from '../../Hooks/UseForm';
import UseFetch from '../../Hooks/UseFetch';
import { PASSWORD_LOST } from '../../api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginPasswordLost = () => {
  const login = UseForm();
  const { data, loading, error, request } = UseFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <div>
      <Head title="Recuperar Senha" description="Página de recuperar senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error erro={error} />
    </div>
  );
};

export default LoginPasswordLost;
