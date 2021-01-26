// import React, { useState, useEffect } from 'react';
import './App.scss';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className="App">
        <Main />
        <Footer />
    </div>
  );
}

export default App;

// add to package.json to query local server for API data
// "proxy": "http://localhost:5000",


// const [data, setData] = useState({data: ""});

//   let callBackendAPI = async () => {
//     const response = await fetch('http://localhost:5000/express_backend',{mode:'no-cors'});
//     console.log(response);
//     const body = await response.json();

//     if (response.status !== 200) {
//       throw Error(body.message) 
//     }
//     return body;
//   };

//   useEffect(() => {
//       // Call our fetch function below once the component mounts
//     callBackendAPI()
//       .then(res => setData( res.body ))
//       .catch(err => console.log(err));
//   })

//     // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  