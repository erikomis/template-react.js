import styled, { createGlobalStyle } from 'styled-components';
import {
  primaryColor,
  primaryDarkColor,
  errorColor,
  sucessColor,
} from '../config/color';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin:0 ;
    padding:0 ;
    outline:none ;
  }

  body {
    font-family: sans-serif ;
    background-color:${primaryDarkColor} ;
    color: ${primaryColor};
  }

  html,body , #root{
    height: 100% ;
  }


  button{
    cursor: pointer;
    background: ${primaryColor};
    border: none ;
    color: #fff ;
    padding: 10px 20px;
    font-weight:700 ;
    border-radius: 3px ;
  }

  a {
    text-decoration: none ;
    background: ${primaryColor};
    color: #fff ;
  }

  ul {
    list-style: none ;
  }

  body .Toastify .Toastify_toast-container .Toastify__toast--sucess {
    background: ${sucessColor} ;
  }
  body .Toastify .Toastify_toast-container .Toastify__toast--error {
    background: ${errorColor} ;
  }

`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
