import React from "react";
import { Reviews } from "./Reviews";

export class GymPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <div>Gym Details</div>

        <Reviews name={this.state.name} />
      </>
    );
  }
}
