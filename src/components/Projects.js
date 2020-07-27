import React from "react";
import { Grid, Cell, Card, CardTitle, CardActions, Button } from "react-mdl";

const Projects = () => {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Grid className="demo-grid-1">
        <Cell col={4}>
          <Card shadow={0} style={{ width: "380px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://png.pngtree.com/element_our/png_detail/20180930/github-icon-design-vector-png_115671.jpg) center / cover",
              }}
            >
              Project 1
            </CardTitle>
            <CardActions border>
              <Button
                colored
                href="https://github.com/addiefancensie/End-of-module-project"
              >
                Github
              </Button>
            </CardActions>
          </Card>
        </Cell>
        <Cell col={4}>
          <Card shadow={0} style={{ width: "380px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://png.pngtree.com/element_our/png_detail/20180930/github-icon-design-vector-png_115671.jpg) center / cover",
              }}
            >
              project2
            </CardTitle>

            <CardActions border>
              <Button
                colored
                href="https://github.com/addiefancensie/github-finder.git"
              >
                Github
              </Button>
            </CardActions>
          </Card>
        </Cell>
        <Cell col={4}>
          <Card shadow={0} style={{ width: "380px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://png.pngtree.com/element_our/png_detail/20180930/github-icon-design-vector-png_115671.jpg) center / cover",
              }}
            >
              Project3
            </CardTitle>

            <CardActions border>
              <Button
                colored
                href="https://github.com/addiefancensie/contact-keeper"
              >
                Github
              </Button>
            </CardActions>
          </Card>
        </Cell>
      </Grid>

      <Cell col={4}>
        <Card shadow={0} style={{ width: "380px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://png.pngtree.com/element_our/png_detail/20180930/github-icon-design-vector-png_115671.jpg) center / cover",
            }}
          >
            Project4
          </CardTitle>

          <CardActions border>
            <Button colored href="https://github.com/addiefancensie/it-logger">
              Github
            </Button>
          </CardActions>
        </Card>
      </Cell>
    </div>
  );
};

export default Projects;
