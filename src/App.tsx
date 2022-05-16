import React, { Component } from 'react';
import _ from 'lodash';
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import { TodoItem } from "./todos";
import './App.scss';

type State = {
  todos: TodoItem[],
  allChecked: boolean,
}

const todos: TodoItem[] = [
  {
    id: 1,
    text: "吃饭",
    done: true,
    checked: false
  },
  {
    id: 2,
    text: "休息",
    done: false,
    checked: false
  }
];

class App extends Component<{}, State>{
  constructor(props: {}) {
    super(props);
    this.state = {
      todos,
      allChecked: false,
    }
  }

  onAddTodo = (text: string) => {
    const { allChecked, todos } = this.state;
    if(todos.some(o => o.text === text)) {
      alert("有重名的了！")
      return;
    }
    this.setState({
      todos: [
        ...todos,
        {
          id: todos.length + 2,
          text,
          done: false,
          checked: allChecked
        }
      ]
    })
  }

  onCheckAll = (checked: boolean) => {
    const newTodos = this.state.todos.map(item => ({
      ...item,
      checked: checked
    }))
    this.setState({
      todos: newTodos,
      allChecked: checked
    })
  }

  checkedOne = (checked: boolean ,id: number) => {
    const newTodos = this.state.todos.map(item => (
      {
        ...item,
        checked: item.id === id ? checked : item.checked
      }
    ))
    const filtered = newTodos.filter(o => o.checked)
    if(filtered.length === newTodos.length) {
      this.setState({
        allChecked: true
      })
    }else if (filtered.length === 0){
      this.setState({
        allChecked: false
      })
    }else {
      this.setState({
        allChecked: false
      })
    }
    this.setState({
      todos: newTodos
    })
  }

  changeStatus = (id: number) => {
    const { todos } = this.state;
    const newTodos = todos.map(item => (
      {
        ...item,
        done: item.id === id ? !item.done: item.done
      }
    ))
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <section className="todoapp">
        <TodoAdd
          onAddTodo={this.onAddTodo}
        />
        <section className="main">
          <TodoList
            checkedOne={this.checkedOne}
            list={this.state.todos}
            changeStatus={this.changeStatus}
          />
        </section>
        <TodoFooter allChecked={this.state.allChecked} onCheckAll={this.onCheckAll}/>
      </section>
    );

  }
}

export default App;
