import React, {Component} from 'react';

interface Props {
  onCheckAll(checked: boolean): void;
  allChecked: boolean;
}

interface State {
}


class TodoFooter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    }
  }
  onCheckAll = (e:  React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      allChecked: e.target.checked
    })
    this.props.onCheckAll(e.target.checked);
  }

  render() {
    return (
      <footer className="footer">
        <input
          checked={this.props.allChecked}
          type="checkbox"
          onChange={this.onCheckAll}
          className="toggle-all"
        />
      </footer>
    );
  }
}

export default TodoFooter;