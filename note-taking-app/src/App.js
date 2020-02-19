import React, { Component } from 'react';
import NoteTaking from './component/NoteTaking';
class App extends Component {
  render() {
    return (
      <div className='Note-background'>
     <div className='position'>Quick Notes</div>
     <NoteTaking/>
     </div>
    );
  }
}

export default App;
