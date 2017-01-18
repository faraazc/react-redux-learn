import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getname} from '../actions/index';
import {getid} from '../actions/index';

class App extends Component {

  getnameId() {
    this.props.getname();
    this.props.getid();
  }
  render() {
    if (!this.props.name){
      return <div>
      <button onClick={() => this.getnameId()}>GetNameID </button>
      </div>
    }
    return (
      <div>
      React simple starter
      <p> {this.props.name} </p>
      <p> {this.props.id} </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.name,
    id: state.id
  }
}

export default connect(mapStateToProps,{getname:getname,getid:getid})(App);

