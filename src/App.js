import React from 'react';
import './css/App.css';
import HelloWorld from "./components/HelloWorld";
import getWork from "./components/getWork";
import Gitlab  from '@gitbeaker/browser';

function testApi() {
    console.log( 'GitLab-----', Gitlab )
    let api = new Gitlab.Gitlab( {
        jobToken: '4644cebd0074f77d34bd947f169a8469c3db955d492471c70a64e89e8e617731',
        host: 'https://code.bonc.com.cn',
    } );
    let all = api.Projects
        .all(  )
        .then( ( res )=>{
            console.log( 'pro-res-', res )
        })
        .catch( ( err ) => {
            console.log( 'pro-err-', err )
        } );
}

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <p onClick = { testApi }> TestClick </p>
            <HelloWorld/>
            <getWork
                time={ 1001 }
            />
        </header>
        <body>
        </body>
    </div>
  );
}

export default App;
