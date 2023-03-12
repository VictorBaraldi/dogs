import React from 'react';
import UserNav from './UserNav';
import styles from '../../styles/user/Header.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('teste');
  const location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      case '/conta/postar':
        setTitle('Adicionar Foto');
        break;
      default:
        setTitle('Minha Conta');
        break;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserNav />
    </header>
  );
};

export default UserHeader;
