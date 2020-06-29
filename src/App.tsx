import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {getTodos} from './actions/todoAction';
import {AppProps, AppState} from './actions/interface'
import PropTypes from 'prop-types';
import PageNotFound from './PageNotFound';
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom'

export class App extends React.Component<AppProps, AppState> {
  simpleAction = () => {
    this.props.getTodos();
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <pre>
            {
              JSON.stringify(this.props)
            }
          </pre>
          <button onClick={this.simpleAction}>Test redux action</button>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            <p>
              <Router>
                <Link to = "/404">404 page</Link>
                <Switch>
                  <Route path="/404" exact component={PageNotFound} />
                </Switch>
              </Router>
            </p>
          </a>
          <button>React/Redux with Typescript</button>
        </header>
      </div>
    );
  }
}

// App.PropTypes = {
//   todos: PropTypes.array.isRequired
// }

const mapStateToProps = (state: any) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: Function) => ({
  getTodos: () => dispatch(getTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);