import { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

class Filter extends Component {

    handleChange = event => {
    const {value} = event.target;
    this.props.onFilterChange(value);
  }

render() {
  return (
    <div className={css.filter}>
    <label htmlFor='filter'>Please type a name</label>
    <input
      type="text"
      name="filter"
      value={this.props.filter}
      onChange={this.handleChange}
      placeholder="Search for contacts"
    />
    </div>
  );
};
}

Filter.propTypes = {
    onFilterChange: PropTypes.func,
    filter: PropTypes.string,
}

export default Filter;
