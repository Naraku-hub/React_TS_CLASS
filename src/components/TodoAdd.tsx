import React, {Component} from 'react';

type Props = {
  onAddTodo(text: string): void,
}

type State = {
  text: string
}

class TodoAdd extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  onChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: e.target.value
    })
  }

  onAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.code === "Enter") {
      if(this.state.text === "") return;
      this.props.onAddTodo(this.state.text);
      this.setState({
        text: ""
      })
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.text}
          onChange={this.onChange}
          onKeyDown={this.onAdd}
        />
      </header>
    );
  }
}

export default TodoAdd;