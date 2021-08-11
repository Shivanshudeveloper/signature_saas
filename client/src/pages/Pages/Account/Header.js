import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import profile from "../../../assets/images/client/05.jpg";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col lg="12">
          <Card
            className="public-profile border-0 rounded shadow"
            style={{ zIndex: "1" }}
          >
            <CardBody>
              <Row className="align-items-center">
                <Col lg="2" md="3" className="text-md-start text-center">
                  <img
                    src={profile}
                    className="avatar avatar-large rounded-circle shadow d-block mx-auto"
                    alt=""
                  />
                </Col>

                <Col lg="10" md="9">
                  <Row className="align-items-end">
                    <Col
                      md="7"
                      className="text-md-start text-center mt-4 mt-sm-0"
                    >
                      <h3 className="title mb-0">Krista Joseph</h3>
                    </Col>
                    {/* <Col md="5" className="text-md-end text-center">
                            <ul className="list-unstyled social-icon social mb-0 mt-4">
                              <li className="list-inline-item">
                                <Link to="#" className="rounded">
                                  <i className="uil uil-user-plus align-middle"></i>
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link to="#" className="rounded">
                                  <i className="uil uil-comment align-middle"></i>
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link to="#" className="rounded">
                                  <i className="uil uil-bell align-middle"></i>
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link
                                  to="/page-profile-edit"
                                  className="rounded"
                                >
                                  <i className="uil uil-cog align-middle"></i>
                                </Link>
                              </li>
                            </ul>
                          </Col> */}
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
