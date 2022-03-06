import history from '../../services/history';
import { Container } from '../../styles/GlobalStyles';

export default function Page404() {
  history.push('/');
  return (
    <Container>
      <h1>Essa pagina nao existe :/ </h1>
    </Container>
  );
}
