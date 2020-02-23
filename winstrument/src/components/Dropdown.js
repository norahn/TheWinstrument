import React from 'react';
import $ from 'jquery';
import axios from 'axios';

class Dropdown extends React.Component {
  constructor(props) {
      super(props);
  }




  render() {
    var names = []
    return (
      <div>
        {this.state.instruments.sounds.map((item, i) => {
          return (
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sound options
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div class="checkbox">
                  <label><input type="checkbox"/>{this.state.instruments.sounds[i].name}</label>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}
export default Dropdown;
