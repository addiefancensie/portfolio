import React, { Component } from "react";
import { Grid, Cell, Card, CardTitle, CardText } from "react-mdl";
import Img2 from "./Images/Img2.jpg";
import Img3 from "./Images/Img3.jpg";
import Img4 from "./Images/Img4.jpg";
import Img5 from "./Images/Img5.jpg";
import Img6 from "./Images/Img6.jpg";

class Testimonials extends Component {
  render() {
    return (
      <div style={{ width: "80%", margin: "auto" }}>
        <Grid className="testimonials-cards">
          <Cell col={4}>
            <Card
              shadow={0}
              style={{ width: "395px", height: "395px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "white",
                  background: `url(${Img2})`,
                }}
              >
                Godwin Dzvapatsva - Head of curriculum and learning
              </CardTitle>
              <CardText>
                Aden possesses a cheerful and easy-going disposition. Her
                performance is satisfactory but has the potential to make
                further Progress.
              </CardText>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card
              shadow={0}
              style={{ width: "395px", height: "395px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "white",
                  background: `url(${Img3})`,
                }}
              >
                Brittney Bowers - Peer
              </CardTitle>
              <CardText>
                Aden is an individual who is passionate about her work and has a
                determined mind. She is an open-minded person who can take on
                any challenge given to her.
              </CardText>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card
              shadow={0}
              style={{ width: "395px", height: "395px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "white",
                  background: `url(${Img4})`,
                }}
              >
                Yonela Ntsangani - Peer
              </CardTitle>
              <CardText>
                Aden is a team player, an excellent problem solver and an
                enthusiaatic individual. Her passion for her work is truly
                honorable. It would be a great privilege to have her on your
                team.
              </CardText>
            </Card>
          </Cell>
        </Grid>
        <Grid className="testimonials-cards">
          <Cell col={4}>
            <Card
              shadow={0}
              style={{ width: "395px", height: "395px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "white",
                  background: `url(${Img5})`,
                }}
              >
                Ryan Barron - Peer
              </CardTitle>
              <CardText>
                Aden is a very hardworking and diligent individual that does all
                she can to get the job done and to assist those who need her,
                she learns from both success and failure and believes in
                striving to become the best.
              </CardText>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card
              shadow={0}
              style={{ width: "395px", height: "395px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "white",
                  background: `url(${Img6})`,
                }}
              >
                Asaph Franks - Peer
              </CardTitle>
              <CardText>
                Aden is very enthusiastic about not only her work but life as
                well. She possesses great communication and presentation skills.
                I highly recommend her because she would serve as a great asset
                to any company she may find herself in.
              </CardText>
            </Card>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Testimonials;
