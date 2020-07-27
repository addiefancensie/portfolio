import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
const App = () => {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="Navbar-color" title="Aden Fancensie" scroll>
          <Navigation>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Testimonials">Testimonials</Link>
            <Link to="/Resume">Resume</Link>
          </Navigation>
        </Header>
        <Content>
          <div className="page-content" />
          <Route path="/" exact component={Home} />
          <Route path="/Projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/Testimonials" component={Testimonials} />
          <Route path="/Resume" component={Resume} />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
