import React from 'react';
import '../css/button.css';

class Button extends React.Component {
  render() {
    return (
      <svg onClick={this.props.onClick} style={{color:this.props.color, width:"95%", height:"95%"}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="record-vinyl"
      className="svg-inline--fa fa-record-vinyl fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <path className="vinylBtn" fill="currentColor" d="M256 152a104 104 0 1 0 104 104 104 104 0 0 0-104-104zm0 128a24
      24 0 1 1 24-24 24 24 0 0 1-24 24zm0-272C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 376a128 128 0 1 1 128-128 128 128 0 0 1-128 128z">
      </path></svg>
    );
  }
}
export default Button;
