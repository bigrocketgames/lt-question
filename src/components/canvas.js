import React, {Component} from 'react';

import Spaces from './spaces';
import Button from './button';

class Canvas extends Component {
  state = {
    spaces: [{id: 1, name: "circle"}, {id: 2, name: "triangle"}, {id: 3, name: "square"}, {id: 4, name: "test"}, {id: 5, name: "test"}, {id: 6, name: "test"}, {id: 7, name: "test"}, {id: 8, name: "test"}, {id: 9, name: "test"}],
    history: [],
    redo: [],
  }


  render() {
    const {spaces} = this.state
    
    return (
      <div>
        <div className="canvas-area">
          <h2 className="canvas-title">This is the canvas area.</h2> 
          
          {spaces.length && spaces.map(space => <Spaces key={space.id} name={space.name} />)}
        </div>
        <div className="history-buttons">
          <Button classes="history-button undo" name="undo" disabled={this.state.history.length === 0}/>
          <Button classes="history-button redo" name="redo" disabled={this.state.redo.length === 0}/>
        </div>
      </div>
    )
  }
}

export default Canvas