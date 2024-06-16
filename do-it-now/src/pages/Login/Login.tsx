import styles from './Login.module.css';
import logo from '../../assets/login-register-assets/logo-icon.png';

// interface ILogin {
//   nomeUsuario: string;
//   senha: string;
//   email: string;
// }

const Login = () => {
  return(
    <div className={styles.container}>

      <div className={styles.loginBackgroundImage}>
        <div className={styles.backgroundImage}></div>
      </div>

      <div className={styles.loginContainer}>
        <div className={styles.logoTitleContainer}>
          <img src={logo} alt="ToDo" className={styles.logoImg} />
          <h1 className={styles.title}>LOGIN</h1>
        </div>

        <form action="" className={styles.formContainer}>

          <div className={styles.iconsContainer}>
            <i className="devicon-google-plain"></i>
            <i className="devicon-facebook-plain"></i>
          </div>

          <div className={styles.nomeUsuarioContainer}>
            <label htmlFor="">Usuário</label>
            <input type="text" />
          </div>

          <div className={styles.senhaContainer}>
            <label htmlFor="">Senha</label>
            <input type="password" />
          </div>

          <div className={styles.esqueceuSenhaContainer}>
            <a href="#" className={styles.esqueceuSenhaLink}>Esqueceu a sua senha?</a>
          </div>

          <div className={styles.manterConectadoContainer}>
            <label>Manter Conectado</label>
            <input type="checkbox" className={styles.checkboxInput} />
          </div>

          <div className={styles.btnEntrarContainer}>
            <button type='submit' className={styles.entrarBtn}>Entrar</button>
          </div>

          <div className={styles.registrarContainer}>
            <h3>Já tem uma conta?</h3>
            <a href="">Registre-se</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;