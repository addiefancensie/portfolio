import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Home extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="Home-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Aden Fancensie</h1>
              <hr />
              <h2>Web Developer</h2>
              <p>
                HTML <i class="fab fa-html5"></i>/ CSS{" "}
                <i class="fab fa-css3-alt"></i>/ Bootstrap{" "}
                <i class="fab fa-bootstrap"></i>/ React{" "}
                <i className="fab fa-react"></i>/ Node.js{" "}
                <i className="fab fa-node-js"></i>/Mongo.db{" "}
                <i class="fas fa-database"></i>/Python
                <i className="fab fa-python"></i>
              </p>
            </div>
            <img src="Img1.jpg" alt="avatar" className="avatar-img" />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
