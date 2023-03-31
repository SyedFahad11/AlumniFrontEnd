import React from "react";
import Mynavbar from "./Components/Mynavbar";

const Page4 = () => {
  return (
    <div>
      <Mynavbar/>
     
      <div className="container-fluid">
        <div className="row">
          <h2>Update Profile</h2>
          <br />
          <br />
          <div className="col">
            <form>
              <div className="form-group">
                <label for="formFileDisabled" className="form-label">
                  Upload Image
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFileDisabled"
                  disabled
                />
              </div>
              <br />
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <br />
              <div className="form-group">
                <label for="examplPhoneNumber">Phone Number</label>
                <input
                  type="phone number"
                  className="form-control"
                  id="examplePhoneNumber"
                  placeholder="Enter Phone Number"
                />
              </div>
              <br />
              <div className="form-group">
                <label for="exampleInputCompany">Company</label>
                <input
                  type="company"
                  className="form-control"
                  id="exampleInputCompany"
                  placeholder="Company"
                />
              </div>
              <br />
              <div className="form-group">
                <label for="exampleInputDescription">Description</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputDescription"
                  placeholder="Description"
                />
              </div>
              <br />
              <div className="col">
                <h3>College</h3>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    KMIT
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    NGIT
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    KMEC
                  </label>
                </div>
              </div>
            </form>
          </div>

          <div className="col">
            <form>
              <div className="form-group">
                <label for="formFileDisabled" className="form-label">
                  Upload Resume
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFileDisabled"
                  disabled
                />
              </div>
              <br />
              <div className="form-group">
                <label for="exampleInputEmail1">Year of Graduation</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Year of Graduation"
                />
              </div>
              <br />
              <div className="form-group">
                <label for="examplPhoneNumber">Degree</label>
                <input
                  type="phone number"
                  className="form-control"
                  id="examplePhoneNumber"
                  placeholder="Degree"
                />
              </div>
              <br />
              <div className="form-group">
                <label for="exampleInputCompany">Unique Id</label>
                <input
                  type="company"
                  className="form-control"
                  id="exampleInputCompany"
                  placeholder="Unique Id"
                />
              </div>
              <br />
              <div className="form-group">
                <label for="exampleInputDescription">Description</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputDescription"
                  placeholder="Description"
                />
              </div>
              <br />
              <form action="/action_page.php">
                <label for="birthday">
                  <b>Date of Birth</b>
                </label>
                <br />
                <br />
                <input type="date" id="birthday" name="birthday" />
              </form>
              <br />
              <p>
                <strong>Looking for Job Opportunities?</strong>
              </p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  No
                </label>
              </div>
              <div className="text-center">
                <a
                  href="/Page5"
                  className="btn btn-success "
                  style={{ width: "10%" }}
                >
                  Submit
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
