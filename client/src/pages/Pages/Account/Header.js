import React, { useEffect } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { useHistory } from "react-router";

const Header = () => {
  const userName = sessionStorage.getItem("userName");
  const history = useHistory();

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    if (userId === null) {
      history.push("/login");
    }
  }, []);

  const logout = () => {
    sessionStorage.clear();
    history.push("/login");
  };

  return (
    <>
      <Container>
        <div style={{ textAlign: "right" }}>
          <br></br>
          <Button color="danger" onClick={logout}>
            Log Out
          </Button>
          <br></br>
          <br></br>
        </div>
      </Container>
      <Container>
        <Row>
          <Col lg="12">
            <Card
              className="public-profile border-0 rounded shadow"
              style={{ zIndex: "1" }}
            >
              <CardBody>
                <Row className="align-items-center">
                  <Col lg="12" md="12" className="text-md-start text-center">
                    Welcome
                  </Col>

                  <Col lg="10" md="9">
                    <Row className="align-items-end">
                      <Col
                        md="7"
                        className="text-md-start text-center mt-4 mt-sm-0"
                      >
                        <h3 className="title mb-0">{userName}</h3>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
