import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Registro.module.css';
import logo from '../../assets/login-register-assets/logo-icon.png';

const Registro: React.FC = () => {
  return(
    <div className={styles.container}>
      <div className={styles.registroContainer}>

        <div className={styles.logoContainer}>
          <img src={logo} alt="ToDo" className={styles.logoImg} />
        </div>

        <form action="" className={styles.formContainer}>
          <div className={styles.nomeSobrenomeContainer}>
            <div className={styles.nomeContainer}>
              <label htmlFor="">Nome</label>
              <input type="text" />
            </div>

            <div className={styles.sobrenomeContainer}>
              <label htmlFor="">Sobrenome</label>
              <input type="text" />
            </div>
          </div>

          <div className={styles.nomeUsuarioContainer}>
            <label htmlFor="" className={styles.userName}>Usuário</label>
            <input type="text" />
          </div>

          <div className={styles.senhaConfContainer}>
            <div className={styles.senhaContainer}>
              <label htmlFor="">Senha</label>
              <input type="password" />
            </div>

            <div className={styles.confirmarSenhaContainer}>
              <label htmlFor="">Confirme a sua Senha</label>
              <input type="password" />
            </div>
          </div>

          <div className={styles.emailConfContainer}>
            <div className={styles.emailContainer}>
              <label htmlFor="">E-mail</label>
              <input type="email" />
            </div>

            <div className={styles.confirmarEmailContainer}>
              <label htmlFor="">Confirme o seu E-mail</label>
              <input type="email" />
            </div>
          </div>

          <div className={styles.btnRegistrarContainer}>
            <button type='submit' className={styles.registrarBtn}>Entrar</button>
          </div>

          <div className={styles.facaLoginContainer}>
            <h3>Já tem uma conta?</h3>
            <Link to="/">Faça Login</Link>
          </div>
        </form>
      </div>
      <div className={styles.registroBackgroundContainer}>
        <div className={styles.backgroundImage}></div>
      </div>
    </div>
  );
}

export default Registro;