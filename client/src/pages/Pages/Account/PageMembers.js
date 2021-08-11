import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Progress,
  Card,
  CardBody,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";
import imgbg from "../../../assets/images/account/bg.png";

import Header from "./Header";

const logout = () => {
  sessionStorage.clear();
  window.location.href("/login");
};

class PageMembers extends Component {
  state = {
    widgets: [
      {
        id: 1,
        icon: "uil uil-dashboard",
        className: "navbar-item account-menu px-0",
        title: "Templates",
        link: "/dashboard",
      },
      {
        id: 2,
        icon: "uil uil-users-alt",
        className: "navbar-item account-menu px-0 mt-2 active",
        title: "My Signatures",
        link: "/page-members",
      },
      {
        id: 3,
        icon: "uil uil-file",
        className: "navbar-item account-menu px-0 mt-2",
        title: "Portfolio",
        link: "/page-works",
      },
      // {
      //   id: 4,
      //   icon: "uil uil-envelope-star",
      //   className: "navbar-item account-menu px-0 mt-2",
      //   title: "Messages",
      //   link: "/page-messages",
      // },
      // {
      //   id: 5,
      //   icon: "uil uil-transaction",
      //   className: "navbar-item account-menu px-0 mt-2",
      //   title: "Payments",
      //   link: "/page-payments",
      // },
      {
        id: 6,
        icon: "uil uil-setting",
        className: "navbar-item account-menu px-0 mt-2",
        title: "Settings",
        link: "/page-profile-edit",
      },
    ],
  };

  // componentDidMount() {
  //   document.body.classList = "";
  //   document.getElementById("top-menu").classList.add("nav-light");
  //   document.getElementById("buyButton").className = "btn btn-light";
  //   window.addEventListener("scroll", this.scrollNavigation, true);
  // }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

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
    return (
      <React.Fragment>
        <section
          className="d-table w-100 bg-primary"
          style={{ background: `url(${imgbg}) center center` }}
        >
          <Header />
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
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
              <Col lg={8} xs={12}></Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default PageMembers;
