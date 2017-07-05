import React from 'react';
import { PropTypes } from 'prop-types';


const Input = props => {
  return <p className={`control${props.isLoading ? ' is-loading' : ''}`}>
    <input
      type={'text'}
      className={'input'}
      placeholder={'search repositories...'}
      value={props.queryString}
      onChange={props.onChange}
    />
  </p>;
};

Input.propTypes = {
  isLoading: PropTypes.bool,
  queryString: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;

