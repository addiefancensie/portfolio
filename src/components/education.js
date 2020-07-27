import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.Nameofschool}</h4>
          <p>{this.props.Highestgadepassed}</p>
          <p>{this.props.Yearofcompletion}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
