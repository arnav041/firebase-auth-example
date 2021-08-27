import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import './App.css';
import SignIn from './components/sign-in';
import { auth } from './firebase';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth =  onAuthStateChanged(auth, (user) => {
      this.setState({ currentUser: user }, () => console.log(user))
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <SignIn currentUser={this.state.currentUser} />
      </div>
    );
  }
}

export default App;
