// import logo from './logo.svg';
// import './App.css';

import React from 'react'
import axios from 'axios'
import AuthorList from './components/AuthorList.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'authors': [
        // {
        //   "id": 1,
        //   "first_name": "abc",
        //   "last_name": "cde",
        //   "birthday_year": 123
        // }
      ]
    }
  }

  componentDidMount() {
    axios
      .get('https://127.0.0.1:8000/api/authors/')
      .then(response => {
        let authors = response.data
        this.setState({
          'authors': authors
        })
      })
      .catch(error => console.log)
  }

  render() {
    return (
      <div>
        <AuthorList authors={this.state.authors} />
      </div>
    )
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
