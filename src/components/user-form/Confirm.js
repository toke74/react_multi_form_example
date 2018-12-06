import React, { Component } from "react";

export class Confirm extends Component {
  submitToBackEnd = e => {
    e.preventDefault();
    this.props.nextStep();
    //connect with back end
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <h1 className="text-center">Confirm your Data</h1>
              <br />
              <br />
              <form>
                <h3>User Info</h3>
                <hr />
                <div className="form-group text-left">
                  <div>
                    First Name :{" "}
                    <span className="text-danger font-weight-bold">
                      {values.firstName}
                    </span>
                  </div>{" "}
                </div>
                <div className="form-group text-left">
                  <div>
                    Last Name :{" "}
                    <span className="text-danger font-weight-bold">
                      {values.lastName}
                    </span>
                  </div>{" "}
                </div>
                <div className="form-group text-left">
                  <div>
                    Email :{" "}
                    <span className="text-danger font-weight-bold">
                      {values.email}
                    </span>
                  </div>{" "}
                </div>
                <h3>Your Education</h3>
                <hr />
                <div className="form-group text-left">
                  <div>
                    School :{" "}
                    <span className="text-danger font-weight-bold">
                      {values.school}
                    </span>
                  </div>{" "}
                </div>
                <div className="form-group text-left">
                  <div>
                    Degree :{" "}
                    <span className="text-danger font-weight-bold">
                      {values.degree}
                    </span>
                  </div>{" "}
                </div>
                <div className="form-group text-left">
                  <div>
                    Field Of Study :{" "}
                    <span className="text-danger font-weight-bold">
                      {values.fieldOfStudy}
                    </span>
                  </div>{" "}
                </div>
                <div className="form-group text-left">
                  <div>
                    From Date :{" "}
                    <span className="text-danger font-weight-bold">
                      {values.schoolFromDate}
                    </span>
                  </div>{" "}
                </div>
                <div className="form-group text-left">
                  <div>
                    To Date :{" "}
                    <span className="text-danger font-weight-bold">
                      {values.SchoolToDate}
                    </span>
                  </div>{" "}
                </div>

                <h3>Your Experience</h3>
                <hr />
                <div className="form-group text-left">
                  <div>
                    Company :{" "}
                    <span className="text-danger font-weight-bold">
                      {values.company}
                    </span>
                  </div>{" "}
                </div>
                <div className="form-group text-left">
                  <div>
                    Job Title :{" "}
                    <span className="text-danger font-weight-bold">
                      {values.jobTitle}
                    </span>
                  </div>{" "}
                </div>
                <div className="form-group text-left">
                  <div>
                    Location :{" "}
                    <span className="text-danger font-weight-bold">
                      {values.location}
                    </span>
                  </div>{" "}
                </div>
                <div className="form-group text-left">
                  <div>
                    From Date :{" "}
                    <span className="text-danger font-weight-bold">
                      {values.jobFromDate}
                    </span>
                  </div>{" "}
                </div>
                <div className="form-group text-left">
                  <div>
                    To Date :{" "}
                    <span className="text-danger font-weight-bold">
                      {values.jobToDate}
                    </span>
                  </div>{" "}
                </div>

                <button
                  className="btn btn-info col-md-3  mt-3"
                  onClick={this.submitToBackEnd}
                >
                  Submit
                </button>
                {"  "}
                <button
                  className="btn btn-secondary col-md-3 mt-3"
                  onClick={this.back}
                >
                  Back
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
