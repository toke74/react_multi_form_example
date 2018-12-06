import React, { Component } from "react";

export class ExperienceForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <h4 className="display-6 text-center">Add Your Experience</h4>

              <form>
                <div className="form-group text-left">
                  <label>Company</label>
                  <input
                    className={"form-control form-control-lg"}
                    type="text"
                    // placeholder="First Name"
                    onChange={handleChange("company")}
                    value={values.company}
                  />
                </div>
                <div className="form-group text-left">
                  <label>Job Title</label>
                  <input
                    className={"form-control form-control-lg"}
                    type="text"
                    // placeholder="Last Name"
                    onChange={handleChange("jobTitle")}
                    value={values.jobTitle}
                  />
                </div>
                <div className="form-group text-left">
                  <label>Location</label>
                  <input
                    className={"form-control form-control-lg"}
                    type="text"
                    // placeholder="Email"
                    onChange={handleChange("location")}
                    value={values.location}
                  />
                </div>
                <div className="form-group text-left">
                  <label>From Date</label>
                  <input
                    className={"form-control form-control-lg"}
                    type="Date"
                    // placeholder="Email"
                    onChange={handleChange("jobFromDate")}
                    value={values.jobFromDate}
                  />
                </div>
                <div className="form-group text-left">
                  <label>To Date</label>
                  <input
                    className={"form-control form-control-lg"}
                    type="Date"
                    // placeholder="Email"
                    onChange={handleChange("jobToDate")}
                    value={values.jobToDate}
                  />
                </div>
                <button
                  className="btn btn-info col-md-3  mt-3"
                  onClick={this.continue}
                >
                  Continue
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

export default ExperienceForm;
