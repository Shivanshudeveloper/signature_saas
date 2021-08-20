import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { useHistory } from "react-router";

//Import Images
import imgbg from "../../../assets/images/account/bg.png";
import "./PageProfile.css";
import Header from "./Header";
import Dashboard from "./Dashboard";

class PageProfile extends Component {
  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-primary";
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-light";
    }
  };

  render() {
    const logout = () => {
      sessionStorage.clear();
      window.location.href = "/login";
    };
    return (
      <React.Fragment>
        <section
          className="d-table w-100 bg-primary"
          style={{
            background: `url(${imgbg}) center center`,
            paddingBottom: "50px",
          }}
        >
          <Header />
          <Dashboard />
        </section>
        <section></section>
        {/* <section className="section" style={{ paddingTop: 0 }}>
          <Container className="mt-lg-3">
            <Row>
              <Col lg="4" md="6" xs="12" className="d-lg-block d-none">
                <div className="sidebar sticky-bar p-4 rounded shadow">
                  <div className="widget mt-4">
                    <ul
                      className="list-unstyled sidebar-nav mb-0"
                      id="navmenu-nav"
                    >
                      {this.state.widgets.map((widget, key) => (
                        <li className={widget.className} key={key}>
                          <Link
                            to={widget.link}
                            className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                          >
                            <span className="h4 mb-0">
                              <i className={widget.icon}></i>
                            </span>
                            <h6 className="mb-0 ms-2">{widget.title}</h6>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>

              <Col lg="8" md="12" xs="12">
                <div className="border-bottom pb-4">
                  <Row>
                    <Col lg="12" className="mt-4 pt-2 pt-sm-0">
                      <h5>Templates :</h5>

                      <TemplateOne />
                      <TemplateTwo />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
      </React.Fragment>
    );
  }
}

export default PageProfile;
