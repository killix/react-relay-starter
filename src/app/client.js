import 'babel/polyfill';
import createHashHistory from 'history/lib/createHashHistory';
import {Route, Router} from 'react-router';
import ReactRouterRelay from 'react-router-relay';
import App from './components/App';
import ViewerQueries from './queries/ViewerQueries';

ReactDOM.render(
  <Router
    createElement={ReactRouterRelay.createElement}
    history={createHashHistory({queryKey: false})}
  >
    <Route
      path="/" component={App}
      queries={ViewerQueries} />
  </Router>,
  document.getElementById('root')
);
