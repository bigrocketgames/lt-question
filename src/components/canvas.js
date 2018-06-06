import React, {Component} from 'react';

import Spaces from './spaces';

class Canvas extends Component {
  state = {
    spaces: [{id: 1, name: "test"}, {id: 2, name: "test"}, {id: 3, name: "test"}, {id: 4, name: "test"}, {id: 5, name: "test"}, {id: 6, name: "test"}, {id: 7, name: "test"}, {id: 8, name: "test"}, {id: 9, name: "test"}],
    history: [],
    redo: [],
  }


  render() {
    const {spaces} = this.state
    
    return (
      <div className="canvas-area">
        <h2 className="canvas-title">This is the cavas area.</h2> 
        
        {spaces.length && spaces.map(space => <Spaces key={space.id} name={space.name} />)}
      </div>
    )
  }
}

export default Canvas