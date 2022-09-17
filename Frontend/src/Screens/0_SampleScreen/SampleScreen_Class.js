import React, { Component } from "react";
import "./SampleScreen.css";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nak",
    };
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps, nextState) {}

  additionalFunc(name, value) {
    // do s.th
  }

  render() {
    const { myData } = this.props;

    return (
      <div className="Sample-comp">
        <div className="Sample-sth-con Sample-sth-2"></div>
      </div>
    );
  }
}
