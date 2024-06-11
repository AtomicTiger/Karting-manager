import styled from "styled-components"
import LoginForm from "./loginForm/loginForm";

function LoginPage() {
    const LoginPage = styled.div`
        background-color: #3E3D3D;
        display: flex;
        justify-content: center;
        height: 100vh;
    `
    return (
      <LoginPage>
        <LoginForm/>
      </LoginPage> 
    );
  }
export default LoginPage;