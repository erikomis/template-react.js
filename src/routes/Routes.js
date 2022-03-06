import { Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Page404 from '../pages/Page404/Page404';
import MyRoute from './MyRoute';

export default function Rout() {
  return (
    <Switch>
      <MyRoute exact path="/login" component={Login} />
      <MyRoute exact path="/" component={Home} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
