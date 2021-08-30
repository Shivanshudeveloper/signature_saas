import React from "react";
import "./PageProfile.css";
import { Button } from "reactstrap";

const TemplateOne = () => {
  return (
    <div className="d-flex flex-column key-feature align-items-center p-3 rounded shadow mt-4">
      <div id="signature-preview" className="w-100 o-signature-preview">
        <div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <table cellspacing="0" width="500" cellpadding="0" border="0">
              <tr>
                <td valign="top" width="153" className="td1">
                  <img
                    alt="created with MySignature.io"
                    className="cardProfile"
                    width="153"
                    className="img1"
                    src="https://img.mysignature.io/p/2/3/0/230b3885-145e-557d-8c71-f3cb65ae984e.png?time=1613563218"
                  />
                </td>
                <td valign="top" className="td2">
                  <table
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    className="tb1"
                  >
                    <tr>
                      <td className="td3">Olivia Lanron</td>
                    </tr>
                    <tr>
                      <td className="td4">
                        <div className="div1">Airbnb Super Host</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="td5">
                        <div className="div2">
                          <a href="tel:+1 747 3847 4442" className="a3">
                            +1 747 3847 4442
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="td6">
                        <div className="div3">
                          <a
                            href="mailto:olivia.airbnb@outlook.com"
                            target="_blank"
                            className="a1"
                          >
                            olivia.airbnb@outlook.com
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td className="td7">
                              <a
                                target="_blank"
                                href="https://mysignature.io/"
                                className="a2 social_link is-brand whatsapp"
                              >
                                <i
                                  className="i1"
                                  className="fa fa-whatsapp"
                                ></i>
                              </a>
                            </td>
                            <td className="td8">
                              <a
                                target="_blank"
                                className="social_link is-brand airbnb a4"
                                href="https://mysignature.io/"
                              >
                                <i className="fa fa-instagram i1"></i>
                              </a>
                            </td>
                            <td className="td8">
                              <a
                                target="_blank"
                                className="social_link is-brand instagram a5"
                                href="https://mysignature.io/"
                              >
                                <i
                                  className="fa fa-twitter i1"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table width="500" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <td
                  style={{
                    margin: "0.1px",
                    paddingTop: "15px",
                  }}
                  className="d-flex justify-content-center"
                >
                  <a target="_blank" href="https://mysignature.io/">
                    <img
                      alt="created with MySignature.io"
                      className="cardProfile"
                      width="409"
                      src="https://img.mysignature.io/b/2/3/0/230b3885-145e-557d-8c71-f3cb65ae984e.png?time=1613563218"
                    />
                  </a>
                </td>
              </tr>
            </table>
            <table width="500" cellspacing="0" cellpadding="0" border="0">
              <tr style={{ fontSize: "1px" }}>
                <td colspan="2" className="s_pixel">
                  <a href="https://mysignature.io/editor/?utm_source=freepixel">
                    <img src="https://img.mysignature.io/pixel/null/signature/" />
                  </a>
                </td>
              </tr>
            </table>
          </div>
          <table
            cellspacing="0"
            cellpadding="0"
            border="0"
            fragment="c1b7129c67"
            style={{
              display: "flex",
              justifyContent: "center",
              color: "gray",
              fontFamily: "Arial",
              lineHeight: "1",
              fontSize: "12px",
            }}
          >
            <tr>
              <td
                style={{
                  paddingTop: "10px",
                  paddingRight: "10px",
                  lineHeight: "33px",
                  margin: "0.1px",
                }}
              >
                <a
                  target="_blank"
                  style={{
                    color: "#FFFFFF",
                    background: "#FF5A60",
                    border: "2px solid transparent",
                    fontSize: "14px",
                    padding: "0 15px",
                    display: "inline-block",
                    textAlign: "center",
                    minWidth: "120px",
                    textDecoration: "none",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    borderRadius: "50px",
                  }}
                  href="https://mysignature.io/"
                >
                  Check dates to stay in the best place to in New York
                  &gt;&gt;&gt;
                </a>
              </td>
            </tr>
          </table>
          <table>
            <tbody>
              <tr>
                <td
                  style={{
                    margin: "0.1px",
                    lineHeight: "1px",
                    fontSize: "1px",
                    height: "1px",
                  }}
                >
                  &nbsp;
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Button outline color="primary" style={{ width: "100%" }}>
        EDIT
      </Button>
    </div>
  );
};

export default TemplateOne;
