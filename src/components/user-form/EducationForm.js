import React, { Component } from "react";

export class EducationForm extends Component {
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
              <h4 className="display-6 text-center">Add Your Education</h4>

              <form>
                <div className="form-group text-left">
                  <label>School</label>
                  <input
                    className={"form-control form-control-lg"}
                    type="text"
                    // placeholder="First Name"
                    onChange={handleChange("school")}
                    value={values.school}
                  />
                </div>
                <div className="form-group text-left">
                  <label>Degree</label>
                  <input
                    className={"form-control form-control-lg"}
                    type="text"
                    // placeholder="Last Name"
                    onChange={handleChange("degree")}
                    value={values.degree}
                  />
                </div>
                <div className="form-group text-left">
                  <label>Field Of Study</label>
                  <input
                    className={"form-control form-control-lg"}
                    type="text"
                    // placeholder="Email"
                    onChange={handleChange("fieldOfStudy")}
                    value={values.fieldOfStudy}
                  />
                </div>
                <div className="form-group text-left">
                  <label>From Date</label>
                  <input
                    className={"form-control form-control-lg"}
                    type="Date"
                    // placeholder="Email"
                    onChange={handleChange("schoolFromDate")}
                    value={values.schoolFromDate}
                  />
                </div>
                <div className="form-group text-left">
                  <label>To Date</label>
                  <input
                    className={"form-control form-control-lg"}
                    type="Date"
                    // placeholder="Email"
                    onChange={handleChange("SchoolToDate")}
                    value={values.SchoolToDate}
                  />
                </div>
                <button
                  className="btn btn-info col-md-3    mt-3"
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

export default EducationForm;
