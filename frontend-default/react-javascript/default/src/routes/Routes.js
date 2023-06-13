import { Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';

function Routes() {
  return(
    <Switch>
      <Route path="/index" component={ Index } />
    </Switch>
  );
}

export default Routes;
