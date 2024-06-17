import styled from "styled-components"
import RegisterForm from "./registerForm/registerForm";

function RegisterPage() {
    const LoginPage = styled.div`
    background-color: #3E3D3D;
    display: flex;
    justify-content: center;
    height: 100vh;
  `
  return (
  <LoginPage>
    <RegisterForm/>
  </LoginPage> 
  );
}
  
export default RegisterPage;