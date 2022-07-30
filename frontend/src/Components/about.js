import React from "react";
function about() {
  return (
    <div style={{ background: "#BFFFF0" }}>
      <center>
        <h1>About</h1>
      </center>
      <strong>
        <hr style={{ margin: 30, height: 4 }} />
      </strong>
      <p
        style={{
          margin: 30,
          textAlign: "justify",
          fontSize: 20,
        }}
      >
        The aim to achieve through this web app is to remove cloud from
        multispectral images captured under poor weather condition which will
        help us to accurately predict and smoothen the process of disaster
        management, to improve visual surveillance based on object detection and
        minute details on the surface of earth, to assist in detection of
        terrorist installations at the border of the country, to assist Indian
        Army for safety of the borders and to monitor patterns of movement under
        poor atmospheric conditions.
      </p>
    </div>
  );
}

export default about;
