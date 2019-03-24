import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Table extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      table: {
        name: "Name",
        lastname: "No Test",
      },
    }
  }

  handleClick() {
    
  }

  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="col">
              <table className="highlight">
                <thead>
                  <tr>
                  { Object.keys(this.state.table).map((name, i) => (
                    <th>
                    { name }
                    </th>
                  )) } 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    { Object.keys(this.state.table).map((name, i) => (
                      <td contenteditable="true">
                      { this.state.table[name] }
                      </td>
                    )) } 

                    <td onClick={this.handleClick}>
                      Adicionar
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>

        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
