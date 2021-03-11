import './App.css';
import React, { Component } from 'react';
import Fruit from './Components/Fruit/Fruit';
import Table from './Components/Table/Table';
class App extends Component {

  state = {
    fruits: [],
    currentvalue: ''
  }

  addHandler = (event) => {
    event.preventDefault();
    const fruits = [...this.state.fruits];
    const item = this.state.currentvalue.split("-");
    fruits.push({ name: item[0], quantity: item[1] });
    this.setState({ currentvalue: '' });

    this.setState({ fruits: fruits }, () => {

      console.log(this.state.fruits);
    });
  }
  updateInputHandler = (event) => {
    this.setState({ currentvalue: event.target.value });

  }

  deleteHandler = (delIndex) => {
    console.log(delIndex);
    const fruits = [...this.state.fruits];
    fruits.splice(delIndex, 1);
    this.setState({ fruits: fruits });
  }

  onkeypress = (event) => {
    if (event.which === 13) {
      this.addHandler(event);
    }
  }

  render() {
    return (
      <div className="App">
        <Fruit
          onkeypress={this.onkeypress}
          add={this.addHandler}
          currentadd={this.updateInputHandler}
          currentvalue={this.state.currentvalue}
        />

        <Table list={this.state.fruits}
          delete={this.deleteHandler}></Table>
      </div>
    )
  }

}

export default App;
