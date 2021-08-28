import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import React from 'react';
import './App.css';
import { auth, createUserProfileDocument } from './firebase';
import SignInSignUp from './pages/signin-signup';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        onSnapshot(userRef, (snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      else {
        this.setState({ currentUser: userAuth })
      }


    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <SignInSignUp currentUser={this.state.currentUser} />
      </div>
    );
  }
}

export default App;
