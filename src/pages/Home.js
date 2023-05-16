import React from "react";
import "./pages.css";
import logo from "../images/Aviation Medivine.png";
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row" style={{ marginTop: 100 }}>
        <div className="col-12 col-lg-6">
          {/* <h1>aaaa</h1> */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={logo} alt="flydocfl" className="logoinsert" />
          </div>
          <div className="row">
            <div className="col-12 col-lg-6" style={{ marginTop: "5px" }}>
              <button
                type="button"
                className="buttonalign1"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.patientfusion.com/external/appointment/8f74b4b3-7439-4b0a-867e-a64e7cc284d4?origin=doctor";
                }}
                style={{ justifyContent: "center" }}
              >
                {" "}
                Schedule Appointment
              </button>
            </div>
            <div className="col-12 col-lg-6" style={{ marginTop: "5px" }}>
              <button
                type="button"
                className="buttonalign2"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://collectcheckout.com/r/8grfc";
                }}
                style={{ justifyContent: "center" }}
              >
                {" "}
                Payment
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="textbox">
            <div className="textalign">Aviation Medicine</div>

            <div className="textalign1">
              Auren Weinberg MD, MBA is a Senior Aviation Medical Examiner with
              over 25 years of medical experience. At Aviation Medicine, Dr.
              Weinberg provides convenient, efficient, accurate medical exams
              for pilots of all classes and air traffic controllers. Dr.
              Weinberg is a private pilot with a passion for aviation and a
              mission to keep our skies and pilots safe.
            </div>

            <div className="textalign2">
              <div className="col-12">Please complete your Medxpress application prior to your
              appointment and bring your confirmation number:</div>
              <div
                className="linked"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://medxpress.faa.gov/medxpress";
                }}
              >
                https://medxpress.faa.gov/medxpress/
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
