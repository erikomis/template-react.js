import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();
  const botaoClicado = useSelector((state) => state.example.botaoClicado);
  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clicaBotaoRequest());
  }
  return (
    <Container>
      tela de Login
      <p>teste</p>
      <p>lorem lorer,</p>
      <button type="button" onClick={handleClick}>
        enviar
      </button>
      {botaoClicado ? 'clicado' : 'nao clicado'}
    </Container>
  );
}
