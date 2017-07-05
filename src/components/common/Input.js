import React from 'react';
import { PropTypes } from 'prop-types';

let timeout = null;

const Input = props => {
  const finishEditing = () => {
    clearTimeout(timeout);

    // Make a new timeout set to go off in 800ms
    timeout = setTimeout(() => {
      if (props.queryString !== '') {
        props.onFinishEditing(props.queryString);
      }
    }, 500);
  };

  return <p className={`control has-icons-left${props.isLoading ? ' is-loading' : ''}`}>
    <input
      type={'text'}
      className={'input'}
      placeholder={'search repositories...'}
      value={props.queryString}
      onChange={props.onChange}
      onKeyUp={finishEditing}
    />
    <span className="icon is-small is-left">
      <i className="fa fa-search"></i>
    </span>
  </p>;
};

Input.propTypes = {
  isLoading: PropTypes.bool,
  queryString: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFinishEditing: PropTypes.func.isRequired,
};

export default Input;

