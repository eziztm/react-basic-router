import React from "react";
import {Link} from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
         <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
         <Link to="/"> home </Link>
         <Link to="second"> second-page </Link>
         
         {this.props.children}

         <Footer  />
      </div>
    );
  }
}
