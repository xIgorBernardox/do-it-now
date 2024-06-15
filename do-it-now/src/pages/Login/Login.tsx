import styles from './Login.module.css';

interface ILogin {
  nomeUsuario: string;
  senha: string;
  email: string;
}

const Login = () => {
  return(
    <div className={styles.container}>
      <h1>username</h1>
      <input />
    </div>
  );
}

export default Login;