import React, {Component} from 'react';

import Spaces from './spaces';
import Button from './button';

const TILEKEY = "tileSave";

class Canvas extends Component {
  state = {
    spaces: [{id: 1, name: ""}, {id: 2, name: ""}, {id: 3, name: ""}, {id: 4, name: ""}, {id: 5, name: ""}, {id: 6, name: ""}, {id: 7, name: ""}, {id: 8, name: ""}, {id: 9, name: ""}],
    history: [],
    redo: [],
    canSave: false,
    canLoad: false
  }

  componentDidMount() {
    const tileSave = localStorage.getItem(TILEKEY);

    if (tileSave) {
      this.setState(prevState => {
        return ({
          ...prevState,
          canLoad: true
        })
      })
    }
  }

  onChangeTile = (e) => {
    e.preventDefault();
    const targetID = parseInt(e.target.parentElement.id, 10);
    const targetSpace = this.state.spaces.find((space) => space.id === targetID)
    const value = e.target.value;
    const updatedTarget = {...targetSpace, name: value};

    this.setState((prevState) => {
      return ({
        ...prevState,
        history: [...prevState.history, prevState],
        spaces: [
          ...prevState.spaces.slice(0, targetID -1),
          updatedTarget,
          ...prevState.spaces.slice(targetID)
        ],
        canSave: true,
      })
    })
  }

  onClickSave = () => {
    localStorage.setItem(TILEKEY, JSON.stringify(this.state));

    this.setState((prevState) => {
      return ({
        ...prevState,
        canSave: false,
        canLoad: true,
      })
    })
  }

  onClickLoad = () => {
    const loadedState = JSON.parse(localStorage.getItem(TILEKEY));

    this.setState({
      ...loadedState,
      canSave: false,
      canLoad: false,
    })
  }

  onClickUndo = () => {
    const priorState = this.state.history.pop();
    
    this.setState((prevState) => ({
      ...priorState,
      redo: [...prevState.redo, this.state],
    }))
  }

  onClickRedo = () => {
    const redoState = this.state.redo.pop();
    
    this.setState(prevState => ({
      ...redoState,
      history: [...prevState.history, this.state],
    }))
  }


  render() {
    const {spaces} = this.state
    
    return (
      <div>
        <div className="save-load-buttons">
          <Button classes="sl-button save" name="save" onClick={this.onClickSave} disabled={!this.state.canSave} />
          <Button classes="sl-button load" name="load" onClick={this.onClickLoad} disabled={!this.state.canLoad} />
        </div>

        <div className="mid-area">

          <div className="edit-select">
            <h3>EDIT MODE:</h3>
          </div>

          <div className="canvas-area">
            <h2 className="canvas-title">This is the canvas area.</h2> 
            {spaces.length && spaces.map(space => <Spaces key={space.id} id={space.id} name={space.name} onChange={this.onChangeTile}/>)}
          </div>
          
        </div>

        <div className="history-buttons">
          <Button classes="history-button undo" onClick={this.onClickUndo} name="undo" disabled={this.state.history.length === 0}/>
          <Button classes="history-button redo" onClick={this.onClickRedo} name="redo" disabled={this.state.redo.length === 0}/>
        </div>

      </div>
    )
  }
}

export default Canvas