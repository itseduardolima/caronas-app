import { HeaderContainer } from "./styled";
import Logo from "../../assets/images/Logo Carro.jpg";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo do App Caronas" id="fotoo" />
      <h3>Cadastro</h3>
    </HeaderContainer>
  );
};
