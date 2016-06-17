import React from "react";

export default class SecondPage extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
         <p>Second page {this.props.name}</p> 
         
      </div>
    );
  }
}
