import React from 'react';

const {func, object} = React.PropTypes;

export default class Search extends React.Component {

  constructor() {
    super();

    this.state = {
      inputChanges: 0
    }
  }

  _handleOnChange(event) {
    const {setFilter} = this.props;
    const value = event.target.value;

    this.state.inputChanges++;
    const inputChanges = this.state.inputChanges;

    setTimeout(() => {
      if(inputChanges !== this.state.inputChanges) {
        return;
      }
      setFilter(value);
    }, 300);
  }

  render() {
    return <div className="search">
      <input type="text" placeholder="Search" onChange={this._handleOnChange.bind(this)} />
    </div>
  }
}
