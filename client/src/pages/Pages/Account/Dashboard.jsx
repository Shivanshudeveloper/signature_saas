import React, { useState, useEffect } from "react";
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
import PropTypes from "prop-types";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";

import { v4 as uuid4 } from "uuid";
import Dropzone from "react-dropzone";
import { firestore, storage } from "../../../Firebase/index";
import renderHTML from "react-render-html";

// IMPORTS
import "./Dashboard.css";
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

import { FormGroup, Label, Input } from "reactstrap";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import axois from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
const Modern = ({ edit }) => {
  return (
    <>
      <Col className="coll">
        <Card className="cardd">
          <Modern1 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Modern2 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Modern3 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Modern4 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Modern5 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Modern6 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
      </Col>
      <Col className="coll">
        <Card className="cardd">
          <Modern7 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Modern8 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Modern9 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Modern10 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Modern11 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
      </Col>
    </>
  );
};
const Professional = ({ edit }) => {
  return (
    <>
      <Col className="coll">
        <Card className="cardd">
          <Professional1 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Professional2 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Professional3 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Professional4 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Professional5 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Professional6 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
      </Col>
      <Col className="coll">
        <Card className="cardd">
          <Professional7 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Professional8 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Professional9 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Professional10 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
      </Col>
    </>
  );
};
const Elegant = ({ edit }) => {
  return (
    <>
      <Col className="coll">
        <Card className="cardd">
          <Elegant1 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Elegant2 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Elegant3 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Elegant4 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Elegant5 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Elegant6 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
      </Col>
      <Col className="coll">
        <Card className="cardd">
          <Elegant7 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Elegant8 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Elegant9 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Elegant10 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
      </Col>
    </>
  );
};
const Creative = ({ edit }) => {
  return (
    <>
      <Col className="coll">
        <Card className="cardd">
          <Creative1 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Creative2 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Creative3 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Creative4 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Creative5 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Creative6 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
      </Col>
      <Col className="coll">
        <Card className="cardd">
          <Creative7 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Creative8 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Creative9 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Creative10 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
      </Col>
    </>
  );
};
const Friendly = ({ edit }) => {
  return (
    <>
      <Col className="coll">
        <Card className="cardd">
          <Friendly1 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Friendly2 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Friendly3 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Friendly4 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Friendly5 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Friendly6 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
      </Col>
      <Col className="coll">
        <Card className="cardd">
          <Friendly7 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Friendly8 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Friendly9 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Friendly10 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
      </Col>
    </>
  );
};
const Free = ({ edit }) => {
  return (
    <>
      <Col className="coll">
        <Card className="cardd">
          <Free1 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Free2 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Free3 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
      </Col>
      <Col className="coll">
        <Card className="cardd">
          <Free4 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card className="cardd">
          <Free5 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
      </Col>
    </>
  );
};

const AllCategory = ({ edit }) => {
  return (
    <>
      <Col>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Professional1 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Professional2 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Professional3 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Professional4 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Professional5 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Professional6 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Professional7 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Professional8 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Professional9 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Professional10 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Elegant1 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Elegant2 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Elegant3 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Elegant4 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Elegant5 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Elegant6 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Elegant7 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Elegant8 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Elegant9 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Elegant10 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Modern1 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Modern2 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Modern3 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Modern4 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Modern5 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Modern6 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Modern7 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Modern8 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Modern9 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
      </Col>
      <Col>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Creative1 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Creative2 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Creative3 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Creative4 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Creative5 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Creative6 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Creative7 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Creative8 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Creative9 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Creative10 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Friendly1 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Friendly2 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Friendly3 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Friendly4 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Friendly5 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Friendly6 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Friendly7 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Friendly8 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Friendly9 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Friendly10 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Free1 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Free2 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Free3 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Free4 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Free5 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Modern10 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
        <Card style={{ marginTop: "20px" }} className="card2">
          <Modern11 />
          <Button
            style={{ margin: "10px" }}
            onClick={edit}
            outline
            color="primary"
          >
            Select
          </Button>
        </Card>
      </Col>
    </>
  );
};

const InputField = ({ label, name, value, onChange, xs }) => {
  return (
    <Grid item md={xs ? 4 : 12}>
      <FormGroup style={{ margin: "10px 0", width: "100%" }}>
        <Label>{label}</Label>
        <Input name={name} onChange={onChange} value={value} />
      </FormGroup>
    </Grid>
  );
};

const Dashboard = () => {
  const initialState = {
    name: "",
    position: "",
    phone: "",
    email: "",
    website: "",
    desc: "",
    address: "",
    instagram: "",
    twitter: "",
    facebook: "",
  };

  const initialStatus = {
    isInsta: false,
    isFacebook: false,
    isTwitter: false,
    isPin: false,
  };
  const [modalCategory, setModalCategory] = useState("All");
  const [modal, setModal] = useState(false);
  const [card, setCard] = useState("");
  const [file, setFile] = useState([]);
  const [filePath, setFilePath] = useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("");
  const [message1, setMessage1] = useState("");
  const [openSnack, setOpenSnack] = useState(false);
  const [openHTML, setOpenHTML] = React.useState(false);
  const [html, setHtml] = useState("");
  const [info, setInfo] = useState(initialState);
  const [status, setStatus] = useState(initialStatus);
  const [isInsta, setisInsta] = useState(false);
  const [isFacebook, setisFacebook] = useState(false);
  const [isTwitter, setisTwitter] = useState(false);
  const [signData, setSignData] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    axois
      .get(`http://localhost:5000/card/getsign?userId=${userId}`)
      .then((res) => setSignData(res.data));
  }, []);

  const checkFields = async () => {
    const SP = await document.querySelector("#signature-preview");
    const checkI = SP.children[0].getElementsByClassName("fa-instagram")[0];
    console.log(checkI);
    if (checkI !== undefined) {
      setisInsta(true);
      console.log("insta");
    }
    const checkF = SP.children[0].getElementsByClassName("fa-facebook")[0];
    if (checkF !== undefined) {
      setisFacebook(true);
      console.log("face");
    }
    const checkT = SP.children[0].getElementsByClassName("fa-twitter")[0];
    if (checkT !== undefined) {
      setisTwitter(true);
      console.log("twitter");
    }
  };

  const edit = (e) => {
    setCard(e.target.previousSibling.innerHTML);
    checkFields();
    handleClickOpen();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
    setStatus(initialStatus);
    setisInsta(false);
    setisFacebook(false);
    setisTwitter(false);
  };

  const toggle = () => setModal(!modal);

  const handleClick = () => {
    setOpenSnack(true);
  };
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  useEffect(() => {
    if (file.length > 0) {
      onSubmit();
    } else {
      console.log("N");
    }
  }, [file]);

  const onSubmit = () => {
    if (file.length > 0) {
      file.forEach((file) => {
        const timeStamp = Date.now();
        var uniquetwoKey = uuid4();
        uniquetwoKey = uniquetwoKey + timeStamp;
        const uploadTask = storage
          .ref(`pictures/products/${uniquetwoKey}/${file.name}`)
          .put(file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            handleClick();
            setMessage(`Uploading ${progress} %`);
          },
          (error) => {
            setMessage(error);
            handleClick();
          },
          async () => {
            // When the Storage gets Completed
            const fp = await uploadTask.snapshot.ref.getDownloadURL();
            setFilePath(fp);
            handleClick();
            setMessage("File Uploaded");
            const renderName = document
              .getElementsByClassName("renderPaper")[0]
              .children[0].getElementsByClassName("cardProfile")[0];
            console.log(renderName);
            if (renderName !== undefined) renderName.src = fp;
          }
        );
      });
    } else {
      setMessage("No File Selected Yet");
    }
  };

  const handleDrop = async (acceptedFiles) => {
    setFile(acceptedFiles.map((file) => file));
  };

  const changeInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    if (e.target.name === "name") {
      const renderName = document
        .getElementsByClassName("renderPaper")[0]
        .children[0].getElementsByClassName("cardName")[0];
      if (renderName !== undefined) renderName.innerHTML = e.target.value;
    } else if (e.target.name === "position") {
      const renderName = document
        .getElementsByClassName("renderPaper")[0]
        .children[0].getElementsByClassName("cardTitle")[0];

      if (renderName !== undefined) renderName.innerHTML = e.target.value;
    } else if (e.target.name === "email") {
      const renderName = document
        .getElementsByClassName("renderPaper")[0]
        .children[0].getElementsByClassName("cardEmail")[0];

      if (renderName !== undefined) renderName.innerHTML = e.target.value;
    } else if (e.target.name === "website") {
      const renderName = document
        .getElementsByClassName("renderPaper")[0]
        .children[0].getElementsByClassName("cardWebsite")[0];

      if (renderName !== undefined) renderName.innerHTML = e.target.value;
    } else if (e.target.name === "desc") {
      const renderName = document
        .getElementsByClassName("renderPaper")[0]
        .children[0].getElementsByClassName("cardDesc")[0];

      if (renderName !== undefined) renderName.innerHTML = e.target.value;
    } else if (e.target.name === "phone") {
      const renderName = document
        .getElementsByClassName("renderPaper")[0]
        .children[0].getElementsByClassName("cardPhone")[0];

      if (renderName !== undefined) renderName.innerHTML = e.target.value;
    } else if (e.target.name === "address") {
      const renderName = document
        .getElementsByClassName("renderPaper")[0]
        .children[0].getElementsByClassName("cardAddress")[0];

      if (renderName !== undefined) renderName.innerHTML = e.target.value;
    } else if (e.target.name === "instagram") {
      const renderName = document
        .getElementsByClassName("renderPaper")[0]
        .children[0].getElementsByClassName("fa-instagram")[0]?.parentElement;
      if (renderName !== undefined) renderName.href = e.target.value;
    } else if (e.target.name === "facebook") {
      const renderName = document
        .getElementsByClassName("renderPaper")[0]
        .children[0].getElementsByClassName("fa-facebook")[0]?.parentElement;
      if (renderName !== undefined) renderName.href = e.target.value;
    } else if (e.target.name === "twitter") {
      const renderName = document
        .getElementsByClassName("renderPaper")[0]
        .children[0].getElementsByClassName("fa-twitter")[0]?.parentElement;
      if (renderName !== undefined) renderName.href = e.target.value;
    }
  };

  const [openCopy, setOpenCopy] = React.useState(false);

  const handleClickCopy = () => {
    setMessage1("Copied To Clipboard");
    setOpenCopy(true);
  };

  const handleCloseCopy = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenCopy(false);
  };

  const copyToClipboard = () => {
    const text = document.getElementsByClassName("renderPaper")[0].innerHTML;
    navigator.clipboard.writeText(text);
    handleClickCopy();
  };

  const handleClickOpenHTML = () => {
    const text = document.getElementsByClassName("renderPaper")[0].innerHTML;
    setHtml(text);
    setOpenHTML(true);
  };

  const handleCloseHTML = () => {
    setOpenHTML(false);
  };

  const saveCard = () => {
    const text = document.getElementsByClassName("renderPaper")[0].innerHTML;
    const userId = localStorage.getItem("userId");
    axois
      .post(`http://localhost:5000/card/save`, { text, userId })
      .then((res) => {
        setMessage1("Saved To Database");
        setOpenCopy(true);
        handleClose();
        handleCloseHTML();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openCopy}
        autoHideDuration={6000}
        onClose={handleCloseCopy}
        message={message1}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseCopy}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <Dialog
        open={openHTML}
        onClose={handleCloseHTML}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {html}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseHTML} color="primary">
            Close
          </Button>
          <Button onClick={copyToClipboard} color="primary" autoFocus>
            Copy HTML
          </Button>
          <Button onClick={saveCard} color="primary" autoFocus>
            Save To Database
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <List>
          <ListItem style={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </ListItem>

          <ListItem
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                md={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper
                  style={{
                    padding: "20px",
                    width: "700px",
                    borderRadius: "20px",
                    background: "#e6ecf7",
                  }}
                >
                  <Typography variant="h5" align="center">
                    EDIT CARD
                  </Typography>
                  <Divider />
                  <Grid container spacing={2}>
                    <InputField
                      label="Name"
                      value={info.name}
                      name="name"
                      onChange={changeInfo}
                      xs
                    />
                    <InputField
                      label="Position"
                      name="position"
                      value={info.position}
                      onChange={changeInfo}
                      xs
                    />
                    <InputField
                      label="Phone"
                      name="phone"
                      value={info.phone}
                      xs
                      onChange={changeInfo}
                    />
                    <InputField
                      label="Email"
                      name="email"
                      value={info.email}
                      xs
                      onChange={changeInfo}
                    />
                    <InputField
                      label="Website"
                      name="website"
                      xs
                      value={info.website}
                      onChange={changeInfo}
                    />
                    <InputField
                      label="Description"
                      name="desc"
                      xs
                      value={info.desc}
                      onChange={changeInfo}
                    />
                    <InputField
                      label="Address"
                      name="address"
                      value={info.address}
                      onChange={changeInfo}
                    />
                    {isInsta && (
                      <InputField
                        label="Instagram"
                        name="instagram"
                        value={info.instagram}
                        onChange={changeInfo}
                      />
                    )}
                    {isFacebook && (
                      <InputField
                        label="Facebook"
                        name="facebook"
                        value={info.facebook}
                        onChange={changeInfo}
                      />
                    )}
                    {isTwitter && (
                      <InputField
                        label="Twitter"
                        name="twitter"
                        value={info.twitter}
                        onChange={changeInfo}
                      />
                    )}
                  </Grid>
                  <center>
                    <Dropzone onDrop={handleDrop}>
                      {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps({ className: "dropzone" })}>
                          <input {...getInputProps()} />
                          <Button
                            style={{ marginTop: "10px" }}
                            size="large"
                            color="primary"
                            variant="outlined"
                            fullWidth
                          >
                            Add Image
                          </Button>
                        </div>
                      )}
                    </Dropzone>
                  </center>
                </Paper>
              </Grid>
              <Grid
                item
                md={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper className="renderPaper" style={{ width: "max-content" }}>
                  {renderHTML(card)}
                </Paper>
              </Grid>
            </Grid>
          </ListItem>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <Button onClick={handleClickOpenHTML}>Get HTML</Button>
          </div>
        </List>
      </Dialog>

      <Container style={{ paddingTop: "20px" }}>
        <Row>
          <Col lg="12">
            <Card
              className="public-profile border-0 rounded shadow"
              style={{ zIndex: "1" }}
            >
              <CardBody>
                <Row className="align-items-center">
                  <Col lg="12" md="12" className="text-md-start text-center">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h4>Signatures </h4>
                      <Button color="primary" onClick={toggle}>
                        New Signature
                      </Button>
                    </div>
                  </Col>
                  {signData?.length === 0 ? (
                    <>
                      <Col lg="12" md="12" className="align-items-center">
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <img
                            src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1625283900/tracker/No_data-pana_vf9vqu.svg"
                            style={{ maxHeight: "200px" }}
                            alt="No Signature Found"
                          />
                        </div>
                      </Col>
                      <Col lg="12" md="12" className="align-items-center">
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <h6>No Signatures Found</h6>
                        </div>
                      </Col>
                    </>
                  ) : (
                    signData.map((sign) => (
                      <div
                        key={sign._id}
                        style={{
                          margin: "10px 0",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Card>{renderHTML(sign.cardHTML)}</Card>
                      </div>
                    ))
                  )}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
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
                <Modern edit={edit} />
              ) : modalCategory === "Professional" ? (
                <Professional edit={edit} />
              ) : modalCategory === "Elegant" ? (
                <Elegant edit={edit} />
              ) : modalCategory === "Friendly" ? (
                <Friendly edit={edit} />
              ) : modalCategory === "Creative" ? (
                <Creative edit={edit} />
              ) : modalCategory === "Free" ? (
                <Free edit={edit} />
              ) : (
                <AllCategory edit={edit} />
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
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={openSnack}
          autoHideDuration={2000}
          onClose={handleCloseSnack}
          message={message}
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSnack}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    </>
  );
};

export default Dashboard;
