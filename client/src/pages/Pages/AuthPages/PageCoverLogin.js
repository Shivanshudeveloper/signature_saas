// React Basic and Bootstrap
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Label,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import user01 from "../../../assets/images/user/01.jpg";

import { auth } from "../../../Firebase/index";

const PageCoverLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    if (userId !== null) {
      history.push("/dashboard");
    }
  }, []);

  const checkUser = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        auth.onAuthStateChanged(function (user) {
          if (user) {
            sessionStorage.setItem("userId", user.uid);
            sessionStorage.setItem("userEmail", user.email);
            sessionStorage.setItem("userName", user.displayName);
            setMessage("");
            history.push("/dashboard");
          } else {
            console.log(
              "We have send a Verification Link on your Email Address"
            );
          }
        });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        setMessage(errorMessage);
      });
  };

  return (
    <React.Fragment>
      <div className="back-to-home rounded d-none d-sm-block">
        <Link to="/" className="btn btn-icon btn-soft-primary">
          <i>
            <FeatherIcon icon="home" className="icons" />
          </i>
        </Link>
      </div>

      <section className="cover-user bg-white">
        <Container fluid className="px-0">
          <Row className="g-0 position-relative">
            <Col lg={4} xs={{ order: 2 }} className="cover-my-30">
              <div className="cover-user-img d-flex align-items-center">
                <Row>
                  <Col xs={12}>
                    <Card
                      className="login-page border-0"
                      style={{ zIndex: "1" }}
                    >
                      <CardBody className="p-0">
                        <h4 className="card-title text-center">Login</h4>
                        <AvForm className="llogin-form mt-4">
                          <Row>
                            <Col lg={12}>
                              <div className="mb-3">
                                <Label className="form-label" htmlFor="email">
                                  Your Email{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <div className="form-icon position-relative">
                                  <i>
                                    <FeatherIcon
                                      icon="user"
                                      className="fea icon-sm icons"
                                    />
                                  </i>
                                </div>
                                <AvField
                                  type="text"
                                  className="form-control ps-5"
                                  name="email"
                                  id="email"
                                  placeholder="Enter Email"
                                  required
                                  errorMessage=""
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  validate={{
                                    required: {
                                      value: true,
                                      errorMessage: "Please enter your email",
                                    },
                                    pattern: {
                                      value:
                                        "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                                      errorMessage: "E-Mail is not valid!",
                                    },
                                  }}
                                />
                              </div>
                            </Col>

                            <Col lg={12}>
                              <div className="mb-3">
                                <Label
                                  className="form-label"
                                  htmlFor="password"
                                >
                                  Password
                                  <span className="text-danger">*</span>
                                </Label>
                                <div className="form-icon position-relative">
                                  <i>
                                    <FeatherIcon
                                      icon="lock"
                                      className="fea icon-sm icons"
                                    />
                                  </i>
                                </div>
                                <AvField
                                  type="password"
                                  className="form-control ps-5"
                                  name="password"
                                  id="password"
                                  placeholder="Enter password"
                                  required
                                  errorMessage=""
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  validate={{
                                    required: {
                                      value: true,
                                      errorMessage: "Please enter Password",
                                    },
                                    minLength: {
                                      value: 6,
                                      errorMessage:
                                        "Your password must be between 6 and 8 characters",
                                    },
                                    maxLength: {
                                      value: 16,
                                      errorMessage:
                                        "Your password must be between 6 and 8 characters",
                                    },
                                  }}
                                />
                              </div>
                            </Col>

                            <Col lg="12">
                              <div className="d-flex justify-content-between">
                                <div className="mb-3">
                                  <div className="form-check">
                                    <Input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="customCheck1"
                                    />
                                    <Label
                                      className="form-check-label"
                                      htmlFor="customCheck1"
                                    >
                                      Remember me
                                    </Label>
                                  </div>
                                </div>
                                <p className="forgot-pass mb-0">
                                  <Link
                                    to="auth-cover-re-password"
                                    className="text-dark fw-bold"
                                  >
                                    Forgot password ?
                                  </Link>
                                </p>
                              </div>
                            </Col>

                            <Col lg={12} className="mb-0">
                              <div className="d-grid">
                                <Button onClick={checkUser} color="primary">
                                  Sign in
                                </Button>
                              </div>
                              <p style={{ fontSize: "12px", color: "red" }}>
                                {message}
                              </p>
                            </Col>

                            <Col className="text-center">
                              <p className="mb-0 mt-3">
                                <small className="text-dark me-2">
                                  Don't have an account ?
                                </small>{" "}
                                <Link to="signup" className="text-dark fw-bold">
                                  Sign Up
                                </Link>
                              </p>
                            </Col>
                          </Row>
                        </AvForm>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col
              lg={{ size: 8, offset: 4 }}
              xs={{ order: 1 }}
              className="padding-less img "
              style={{ backgroundImage: `url(${user01})` }}
            ></Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
export default PageCoverLogin;
