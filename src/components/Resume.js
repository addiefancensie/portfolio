import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";

import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ paddingTop: "2em" }}>Aden Fancensie</h2>
              <img src="Img1.jpg" alt="avatar" style={{ height: "200px" }} />
            </div>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              Nameofschool="Name Of School: Heideveld Senior Secondary"
              Highestgadepassed="Highest Grade: Matric"
              Yearofcompletion="Year Finished: 2017"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>
            <Skills skill="javascript" progress={75} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={40} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
