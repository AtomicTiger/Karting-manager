import styled from "styled-components"
import './loginForm.css';


function LoginForm() {

    const LoginForm = styled.div`
        background: #525252;
        box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        width: 33%;
        height: 65vh;
    `
    const LoginInput = styled.input`
        font-family: 'Assistant';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 39px;
        color: #FFFFFF;
        background: #484848;
        box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        width: 67%;
        height: 6vh;
        margin-top: 8.6vh;
        align-self: center;
        padding-left: 15px;
        transition-duration: 0.5s;
    `
    const Button = styled.button`
        width: 48%;
        height: 6vh;
        background: #393C43;
        box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        font-family: 'Assistant';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 63px;
        margin-top: 5vh;
        padding-bottom: 60px;
        align-self: center;
        color: #FFFFFF;
        cursor:pointer;
        user-select:none;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s; /* Safari */

    `
    return (
      <LoginForm>
            <LoginInput className="no-border" placeholder="Login"/>
            <LoginInput className="no-border"  placeholder="Password"/>  
            <Button className="button no-border">Log in</Button>
            <Button className="button no-border">Create new Team</Button>
      </LoginForm> 
    );
  }
export default LoginForm;


