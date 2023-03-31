import React from "react";

const Signincomp = () => {
  return (
    <div>
      <div className="container-fluid">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="#"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            {/* <svg className="bi me-2" width="40" height="32">
              <use xlink:href="#bootstrap" />
            </svg> */}
            <span className="fs-4 text-success">
              <h1>Alumni Network</h1>
            </span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <a
                href="index.html"
                className="nav-link "
                style={{fontSize: "20px"}}
              >
                Home
              </a>
            </li>
          </ul>
        </header>
      </div>
      <div className="text-center">
        <h1>Sign In.</h1>
        <br />
        <br />
        <img
          src="https://jjmmc.org/alumni/wp-content/uploads/2021/08/alumni.jpg"
          alt="abcd"
        />
      </div>

      <div className="row">
        <div className="col-sm">
          <form>
            <div className="form-group">
              <label for="exampleUsername">USERNAME</label>
              <input
                type="username"
                className="form-control"
                id="exampleUsername"
                placeholder="Enter Username"
              />
            </div>
            <br />
            <div className="form-group">
              <label for="exampleInputEmail1">MAIL ID</label>
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
              <label for="exampleInputPassword1">PASSWORD</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <br />
            <div className="form-group">
              <label for="cp"> CONFIRM PASSWORD</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder=" Confirm Password"
              />
            </div>
            
              <div className="text-center">
                <a href="/Page3"
                 className="btn btn-success "
                ><br />
                <div className="container">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" href="/Page3" for="flexRadioDefault1">
                      Student
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label className="form-check-label" href="/Page7" for="flexRadioDefault2">
                      Institute
                    </label>
                  </div>
                  <br />
                  <br />
                  </div>
                  Submit
                 
                </a>
                
            
            </div>
          </form>
        </div>
      </div>
      </div>

    //                         </div>
    //                 </div>

    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}
export default Signincomp;
