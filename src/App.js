import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import TeamList from './component/TeamList';
import MemberList from './component/MemberList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/team/:id" component={MemberList} />
              <Route path="/team" component={TeamList} exact/>
            </Switch>
          </Router>
        </Provider>
    );
  }
}

export default App;
