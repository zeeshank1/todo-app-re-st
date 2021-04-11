import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    //update react state
    this.setState({ [key]: value });
  }

  addItem() {
    //create a newItem with unique Id
    const itemObj = {
      id: 1 + Math.random(),
      value: this.state.newItem,
    };

    //copy the list object
    const listCopy = [...this.state.list];

    //updating list object
    listCopy.push(itemObj);

    //update state
    this.setState({
      list: listCopy,
      newItem: "",
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({
      list: updatedList,
    });
  }

  render() {
    return (
      <div className="App">
        Add an item ...
        <br />
        <input
          type="text"
          value={this.state.item}
          onChange={(e) => this.updateInput("newItem", e.target.value)}
        />
        <button onClick={() => this.addItem()}>Add</button>
        <br />
        <ul>
          {this.state.list.map((item) => {
            return (
              <li key={item.id}>
                {item.value}
                <button onClick={() => this.deleteItem(item.id)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
