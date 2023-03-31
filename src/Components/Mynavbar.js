import React from 'react';

const Mynavbar = () => {
    return (
        <div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">ALUMNI NETWORK</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Features">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#About">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Signincomp">sign in</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </div>

    )
}
export default Mynavbar