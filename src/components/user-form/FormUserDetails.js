import React, { Component } from "react";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    // console.log(this.props);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <h1 className="display-4 text-center">User Info</h1>

              <form>
                <div className="form-group text-left">
                  <label>First Name</label>
                  <input
                    className={"form-control form-control-lg"}
                    type="text"
                    // placeholder="First Name"
                    onChange={handleChange("firstName")}
                    value={values.firstName}
                  />
                </div>
                <div className="form-group text-left">
                  <label>Last Name</label>
                  <input
                    className={"form-control form-control-lg"}
                    type="text"
                    // placeholder="Last Name"
                    onChange={handleChange("lastName")}
                    value={values.lastName}
                  />
                </div>
                <div className="form-group text-left">
                  <label>Email</label>
                  <input
                    className={"form-control form-control-lg"}
                    type="text"
                    // placeholder="Email"
                    onChange={handleChange("email")}
                    value={values.email}
                  />
                </div>
                <button
                  className="btn btn-info offset-md-4 col-md-4  btn-block mt-4"
                  onClick={this.continue}
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormUserDetails;
