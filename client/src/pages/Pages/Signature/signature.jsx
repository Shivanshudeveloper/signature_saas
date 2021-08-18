import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
// IMPORTS
import Friendly1 from "../Templates/Categories/Friendly/Friendly1";
import Friendly2 from "../Templates/Categories/Friendly/Friendly2";
import Friendly3 from "../Templates/Categories/Friendly/Friendly3";
import Friendly4 from "../Templates/Categories/Friendly/Friendly4";
import Friendly5 from "../Templates/Categories/Friendly/Friendly5";
import Friendly6 from "../Templates/Categories/Friendly/Friendly6";
import Friendly7 from "../Templates/Categories/Friendly/Friendly7";
import Friendly8 from "../Templates/Categories/Friendly/Friendly8";
import Friendly9 from "../Templates/Categories/Friendly/Friendly9";
import Friendly10 from "../Templates/Categories/Friendly/Friendly10";
import Free1 from "../Templates/Categories/Free/Free1";
import Free2 from "../Templates/Categories/Free/Free2";
import Free3 from "../Templates/Categories/Free/Free3";
import Free4 from "../Templates/Categories/Free/Free4";
import Free5 from "../Templates/Categories/Free/Free5";
import Modern1 from "../Templates/Categories/Modern/Modern1";
import Modern2 from "../Templates/Categories/Modern/Modern2";
import Modern3 from "../Templates/Categories/Modern/Modern3";
import Modern4 from "../Templates/Categories/Modern/Modern4";
import Modern5 from "../Templates/Categories/Modern/Modern5";
import Modern6 from "../Templates/Categories/Modern/Modern6";
import Modern7 from "../Templates/Categories/Modern/Modern7";
import Modern8 from "../Templates/Categories/Modern/Modern8";
import Modern9 from "../Templates/Categories/Modern/Modern9";
import Modern10 from "../Templates/Categories/Modern/Modern10";
import Modern11 from "../Templates/Categories/Modern/Modern11";
import Elegant1 from "../Templates/Categories/Elegant/Elegant1";
import Elegant2 from "../Templates/Categories/Elegant/Elegant2";
import Elegant3 from "../Templates/Categories/Elegant/Elegant3";
import Elegant4 from "../Templates/Categories/Elegant/Elegant4";
import Elegant5 from "../Templates/Categories/Elegant/Elegant5";
import Elegant6 from "../Templates/Categories/Elegant/Elegant6";
import Elegant7 from "../Templates/Categories/Elegant/Elegant7";
import Elegant8 from "../Templates/Categories/Elegant/Elegant8";
import Elegant9 from "../Templates/Categories/Elegant/Elegant9";
import Elegant10 from "../Templates/Categories/Elegant/Elegant10";
import Creative1 from "../Templates/Categories/Creative/Creative1";
import Creative2 from "../Templates/Categories/Creative/Creative2";
import Creative3 from "../Templates/Categories/Creative/Creative3";
import Creative4 from "../Templates/Categories/Creative/Creative4";
import Creative5 from "../Templates/Categories/Creative/Creative5";
import Creative6 from "../Templates/Categories/Creative/Creative6";
import Creative7 from "../Templates/Categories/Creative/Creative7";
import Creative8 from "../Templates/Categories/Creative/Creative8";
import Creative9 from "../Templates/Categories/Creative/Creative9";
import Creative10 from "../Templates/Categories/Creative/Creative10";
import Professional1 from "../Templates/Categories/Professional/Professional1";
import Professional2 from "../Templates/Categories/Professional/Professional2";
import Professional3 from "../Templates/Categories/Professional/Professional3";
import Professional4 from "../Templates/Categories/Professional/Professional4";
import Professional5 from "../Templates/Categories/Professional/Professional5";
import Professional6 from "../Templates/Categories/Professional/Professional6";
import Professional7 from "../Templates/Categories/Professional/Professional7";
import Professional8 from "../Templates/Categories/Professional/Professional8";
import Professional9 from "../Templates/Categories/Professional/Professional9";
import Professional10 from "../Templates/Categories/Professional/Professional10";
import "./signature.css";
const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("Select Signature");
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const handleChange = (se) => {
    setSelected(se.target.value);
    props.modalCategory(se.target.value);
  };
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{selected}</DropdownToggle>
      <DropdownMenu color="primary">
        <DropdownItem onClick={handleChange} value="Friendly">
          Friendly
        </DropdownItem>
        <DropdownItem onClick={handleChange} value="Professional">
          Professional{" "}
        </DropdownItem>
        <DropdownItem onClick={handleChange} value="Modern">
          Modern{" "}
        </DropdownItem>
        <DropdownItem onClick={handleChange} value="Elegant">
          Elegant{" "}
        </DropdownItem>
        <DropdownItem onClick={handleChange} value="Creative">
          Creative{" "}
        </DropdownItem>
        <DropdownItem onClick={handleChange} value="Free">
          Free{" "}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
const Modern = () => {
  return (
    <>
      <Col className="coll">
        <Card className="cardd">
          <Modern1 />
        </Card>
        <Card className="cardd">
          <Modern2 />
        </Card>
        <Card className="cardd">
          <Modern3 />
        </Card>
        <Card className="cardd">
          <Modern4 />
        </Card>
        <Card className="cardd">
          <Modern5 />
        </Card>
        <Card className="cardd">
          <Modern6 />
        </Card>
      </Col>
      <Col className="coll">
        <Card className="cardd">
          <Modern7 />
        </Card>
        <Card className="cardd">
          <Modern8 />
        </Card>
        <Card className="cardd">
          <Modern9 />
        </Card>
        <Card className="cardd">
          <Modern10 />
        </Card>
        <Card className="cardd">
          <Modern11 />
        </Card>
      </Col>
    </>
  );
};
const Professional = () => {
  return (
    <>
      <Col className="coll">
        <Card className="cardd">
          <Professional1 />
        </Card>
        <Card className="cardd">
          <Professional2 />
        </Card>
        <Card className="cardd">
          <Professional3 />
        </Card>
        <Card className="cardd">
          <Professional4 />
        </Card>
        <Card className="cardd">
          <Professional5 />
        </Card>
        <Card className="cardd">
          <Professional6 />
        </Card>
      </Col>
      <Col className="coll">
        <Card className="cardd">
          <Professional7 />
        </Card>
        <Card className="cardd">
          <Professional8 />
        </Card>
        <Card className="cardd">
          <Professional9 />
        </Card>
        <Card className="cardd">
          <Professional10 />
        </Card>
      </Col>
    </>
  );
};
const Elegant = () => {
  return (
    <>
      <Col className="coll">
        <Card className="cardd">
          <Elegant1 />
        </Card>
        <Card className="cardd">
          <Elegant2 />
        </Card>
        <Card className="cardd">
          <Elegant3 />
        </Card>
        <Card className="cardd">
          <Elegant4 />
        </Card>
        <Card className="cardd">
          <Elegant5 />
        </Card>
        <Card className="cardd">
          <Elegant6 />
        </Card>
      </Col>
      <Col className="coll">
        <Card className="cardd">
          <Elegant7 />
        </Card>
        <Card className="cardd">
          <Elegant8 />
        </Card>
        <Card className="cardd">
          <Elegant9 />
        </Card>
        <Card className="cardd">
          <Elegant10 />
        </Card>
      </Col>
    </>
  );
};
const Creative = () => {
  return (
    <>
      <Col className="coll">
        <Card className="cardd">
          <Creative1 />
        </Card>
        <Card className="cardd">
          <Creative2 />
        </Card>
        <Card className="cardd">
          <Creative3 />
        </Card>
        <Card className="cardd">
          <Creative4 />
        </Card>
        <Card className="cardd">
          <Creative5 />
        </Card>
        <Card className="cardd">
          <Creative6 />
        </Card>
      </Col>
      <Col className="coll">
        <Card className="cardd">
          <Creative7 />
        </Card>
        <Card className="cardd">
          <Creative8 />
        </Card>
        <Card className="cardd">
          <Creative9 />
        </Card>
        <Card className="cardd">
          <Creative10 />
        </Card>
      </Col>
    </>
  );
};
const Friendly = () => {
  return (
    <>
      <Col className="coll">
        <Card className="cardd">
          <Friendly1 />
        </Card>
        <Card className="cardd">
          <Friendly2 />
        </Card>
        <Card className="cardd">
          <Friendly3 />
        </Card>
        <Card className="cardd">
          <Friendly4 />
        </Card>
        <Card className="cardd">
          <Friendly5 />
        </Card>
        <Card className="cardd">
          <Friendly6 />
        </Card>
      </Col>
      <Col className="coll">
        <Card className="cardd">
          <Friendly7 />
        </Card>
        <Card className="cardd">
          <Friendly8 />
        </Card>
        <Card className="cardd">
          <Friendly9 />
        </Card>
        <Card className="cardd">
          <Friendly10 />
        </Card>
      </Col>
    </>
  );
};
const Free = () => {
  return (
    <>
      <Col className="coll">
        <Card className="cardd">
          <Free1 />
        </Card>
        <Card className="cardd">
          <Free2 />
        </Card>
        <Card className="cardd">
          <Free3 />
        </Card>
      </Col>
      <Col className="coll">
        <Card className="cardd">
          <Free4 />
        </Card>
        <Card className="cardd">
          <Free5 />
        </Card>
      </Col>
    </>
  );
};
const AllCategory = () => {
  return (
    <>
      <Col>
        <Card style={{ marginTop: "20px" }}>
          <Professional1 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Professional2 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Professional3 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Professional4 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Professional5 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Professional6 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Professional7 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Professional8 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Professional9 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Professional10 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Elegant1 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Elegant2 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Elegant3 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Elegant4 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Elegant5 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Elegant6 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Elegant7 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Elegant8 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Elegant9 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Elegant10 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Modern1 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Modern2 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Modern3 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Modern4 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Modern5 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Modern6 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Modern7 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Modern8 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Modern9 />
        </Card>
      </Col>
      <Col>
        <Card style={{ marginTop: "20px" }}>
          <Creative1 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Creative2 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Creative3 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Creative4 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Creative5 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Creative6 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Creative7 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Creative8 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Creative9 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Creative10 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Friendly1 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Friendly2 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Friendly3 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Friendly4 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Friendly5 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Friendly6 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Friendly7 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Friendly8 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Friendly9 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Friendly10 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Free1 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Free2 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Free3 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Free4 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Free5 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Modern10 />
        </Card>
        <Card style={{ marginTop: "20px" }}>
          <Modern11 />
        </Card>
      </Col>
    </>
  );
};
const Signature = () => {
  const [modalCategory, setModalCategory] = useState("All");
  const [modal, setModal] = useState(false);
  const [curr, setCurr] = useState("Friendly");
  const handleClick = (event) => {
    document.getElementById(curr).classList.remove("sig-cat-link-active");
    setCurr(event.target.id);
    document
      .getElementById(event.target.id)
      .classList.add("sig-cat-link-active");
    // if(event.target.classList) console.log(event.target.classList);
    // document.getElementsByClassName(`${event.target.classList[1]}`)[0].classList.remove("sig-cat-link-active")
  };
  const toggle = () => setModal(!modal);
  useEffect(() => {
    const scrollNavigation = () => {
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (top > 80) {
        document.getElementById("topnav").classList.add("nav-sticky");
      } else {
        document.getElementById("topnav").classList.remove("nav-sticky");
      }
    };
    document.body.classList = "";
    document.getElementById("topnav").classList.add("bg-white");
    window.addEventListener("scroll", scrollNavigation, true);
    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, []);
  return (
    <>
      <Container
        style={{
          paddingTop: "20px",
          marginTop: "200px",
          marginBottom: "150px",
        }}
      >
        <Row>
          <Col lg="12">
            <Card
              className="public-profile border-0 rounded"
              style={{ zIndex: "1" }}
            >
              <CardBody>
                <Row className="align-items-center">
                  <Col lg="12" md="12" className="text-md-start text-center">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <h1 style={{ color: "#131fa6" }}>
                        {" "}
                        Email Signature Examples
                      </h1>
                    </div>
                  </Col>
                  <Col lg="12" md="12" className="align-items-center">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "35px",
                      }}
                    >
                      <h3 style={{ color: "#7c849a" }}>
                        Get inspired by email signatures created by MySignature
                      </h3>
                    </div>
                  </Col>
                  <Col lg="12" md="12" className="align-items-center">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <h6 style={{ color: "#7c849a" }}>
                        Keep your emails professional and branded
                      </h6>
                    </div>
                  </Col>
                  <Col lg="12" md="12" className="align-items-center">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "25px",
                      }}
                    >
                      <Button
                        color="primary"
                        style={{ padding: "15px 60px", borderRadius: "50px" }}
                        onClick={toggle}
                      >
                        Create Free Email Signature
                      </Button>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingBottom: "40px",
          }}
        >
          <h1>Email Signature Examples</h1>
          <h3>Choose email signature that will fit your brand voice:</h3>
        </Container>
        <ul className="sig-cat-list">
          <li>
            <a
              id="Friendly"
              className="sig-cat-link sig-cat-link-active"
              onClick={handleClick}
            >
              {" "}
              Friendly
            </a>
          </li>
          <li>
            <a id="Professional" className="sig-cat-link" onClick={handleClick}>
              {" "}
              Professional
            </a>
          </li>
          <li>
            <a id="Elegant" className="sig-cat-link" onClick={handleClick}>
              {" "}
              Elegant
            </a>
          </li>
          <li>
            <a id="Free" className="sig-cat-link" onClick={handleClick}>
              {" "}
              Free
            </a>
          </li>
          <li>
            <a id="Creative" className="sig-cat-link" onClick={handleClick}>
              {" "}
              Creative
            </a>
          </li>
          <li>
            <a id="Modern" className="sig-cat-link" onClick={handleClick}>
              {" "}
              Modern
            </a>
          </li>
        </ul>
        <Container>
          <Row xs={2}>
            {curr === "Modern" ? (
              <Modern />
            ) : curr === "Professional" ? (
              <Professional />
            ) : curr === "Elegant" ? (
              <Elegant />
            ) : curr === "Friendly" ? (
              <Friendly />
            ) : curr === "Creative" ? (
              <Creative />
            ) : (
              <Free />
            )}
          </Row>
        </Container>
      </Container>

      <div>
        <Modal isOpen={modal} toggle={toggle} size="xl">
          {/* <ModalHeader>New Signature</ModalHeader> */}
          <ModalBody>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Example modalCategory={setModalCategory} />
            </div>

            <Row xs={2}>
              {modalCategory === "Modern" ? (
                <Modern />
              ) : modalCategory === "Professional" ? (
                <Professional />
              ) : modalCategory === "Elegant" ? (
                <Elegant />
              ) : modalCategory === "Friendly" ? (
                <Friendly />
              ) : modalCategory === "Creative" ? (
                <Creative />
              ) : modalCategory === "Free" ? (
                <Free />
              ) : (
                <AllCategory />
              )}
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Select Signature
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default Signature;
