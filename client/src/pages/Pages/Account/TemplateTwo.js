import React from "react";
import "./PageProfile.css";
import { Button } from "reactstrap";

const TemplateTwo = () => {
  return (
    <div className="d-flex flex-column key-feature align-items-center p-3 rounded shadow mt-4 ">
      <div id="signature-preview" className="o-signature-preview">
        <div>
          <div>
            <table width="500" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <td
                  style={{
                    margin: "0.1px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <table cellspacing="0" cellpadding="0" border="0">
                    <tr>
                      <td
                        valign="top"
                        style={{
                          padding: "0px 8px 0px 0px",
                          verticalAlign: "top",
                        }}
                      >
                        <img
                          alt="created with MySignature.io"
                          className="cardProfile"
                          width="151"
                          style={{
                            maxWidth: "151px",
                            width: "151px",
                          }}
                          src="https://img.mysignature.io/p/4/f/a/4fad9901-d24d-5770-8c52-afbc59e0ffaa.png?time=1613563316"
                        />
                      </td>
                      <td valign="top" className="td9">
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          className="tb2"
                        >
                          <tr>
                            <td style={{ margin: "0.1px" }}>
                              <div className="div4">Melissa Tean</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="td10">
                              <div className="div5">
                                Kid's Corner Entertainment
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ margin: "0.1px" }}>
                              <span className="s1">mobile:&nbsp;</span>{" "}
                              <span>
                                <a href="tel:+1 226 353 3638" className="a6">
                                  +1 226 353 3638
                                </a>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ margin: "0.1px" }}>
                              <span
                                style={{
                                  color: "rgb(126, 211, 33)",
                                }}
                                className="s1"
                              >
                                website:&nbsp;
                              </span>{" "}
                              <span className="s1">
                                <a
                                  href="http://kidscorner.com"
                                  className="a7"
                                  target="_blank"
                                >
                                  kidscorner.com
                                </a>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ margin: "0.1px" }}>
                              <span
                                style={{
                                  color: "rgb(126, 211, 33)",
                                }}
                                className="s1"
                              >
                                email:&nbsp;
                              </span>{" "}
                              <span>
                                <a
                                  href="mailto:party@kidscorner.com"
                                  target="_blank"
                                  className="a6"
                                >
                                  party@kidscorner.com
                                </a>
                              </span>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td valign="middle" className="td11">
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          style={{ lineHeight: "1" }}
                        >
                          <tbody>
                            <tr>
                              <td className="td10">
                                <a
                                  target="_blank"
                                  className="social_link whatsapp a8"
                                  href="https://mysignature.io/"
                                >
                                  <i className="fa fa-whatsapp i2"></i>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="td10">
                                <a
                                  target="_blank"
                                  className="social_link  telegram a8"
                                  href="https://mysignature.io/"
                                >
                                  <i className="fa fa-telegram i2"></i>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
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
            fragment="b47e839e99"
            className="tb3"
          >
            <tr>
              <td className="td12">
                <a
                  target="_blank"
                  href="https://mysignature.io/"
                  className="a9"
                >
                  <img
                    height="41"
                    src="https://img.mysignature.io/addons/v2/instagram_v1_shape3_i.png?uid=undefined"
                    alt="instagram"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://mysignature.io/"
                  className="a9"
                >
                  <img
                    height="41"
                    src="https://img.mysignature.io/addons/v2/youtube_v1_shape3_i.png?uid=undefined"
                    alt="youtube"
                  />
                </a>
              </td>
            </tr>
          </table>
          <table fragment="b47e839e99">
            <tr>
              <td className="td13">&nbsp;</td>
            </tr>
          </table>
        </div>
      </div>
      <Button outline color="primary" style={{ width: "100%" }}>
        EDIT
      </Button>
    </div>
  );
};

export default TemplateTwo;
