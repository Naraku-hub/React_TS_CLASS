import React, {Component} from 'react';
import { TodoItem } from "../todos";

interface Props {
  list: TodoItem[];
  checkedOne(checked: boolean,id: number): void;
  changeStatus(id: number): void;
}

class TodoList extends Component<Props> {

  checkedHandler = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    this.props.checkedOne(e.target.checked, id);
  }

  changeStatus = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log(e)
    this.props.changeStatus(id)
  };

  render() {
    return (
      <ul className="todo-list">
        {
          this.props.list.map(todo => {
            return (
              <li key={todo.id} className={todo.done ? 'completed' : "" }>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.checked}
                    onChange={(e) =>this.checkedHandler(e, todo.id)}
                  />
                  <label>{todo.text}</label>
                  <button
                    className="destroy"
                    onClick={(e) => {this.changeStatus(e, todo.id)}}
                  />
                </div>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default TodoList;