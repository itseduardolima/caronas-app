import { Header } from "../../components/Header";
import { Button } from "../../styles/Button";
import { Input } from "../../styles/Input";
import { ContendInput, InputContainer, LoginContainer } from "./styled";

import "./style.css";

export const Login = () => {
  return (
    <div>
      <Header />
      <LoginContainer>
        <ContendInput>
          <InputContainer>
            <span>E-mail</span>
            <Input type="email" id="email" />
          </InputContainer>

          <InputContainer>
            <span>Senha</span>
            <Input type="password" id="password" />
          </InputContainer>

          <Button>Entrar</Button>
        </ContendInput>

        <div className="links">
          <a href="#" id="forgot-password">
            Esqueceu a senha?
          </a>
          <div className="overlay" id="overlay">
            <div className="alert" id="alert">
              <span id="alert-text"></span>
              <span className="button-close">X</span>
            </div>
          </div>

          <a href="##" onClick="navigate('register')">
            Cadastrar
          </a>
        </div>
      </LoginContainer>
    </div>
  );
};
