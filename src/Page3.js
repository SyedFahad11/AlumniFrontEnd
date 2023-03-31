import React from "react";
import { Link } from "react-router-dom";
const Page3=()=>{
    return(
        <div>
    <div className="container-fluid">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            
                <span className="fs-4 text-success">

                    <h1>Alumni Network</h1>
                </span>
            </Link>
           
            <ul className="nav nav-pills">
               <li className="nav-item"><Link className="nav-Link" to="/Page5">EVENTS/NOTICES</Link></li>
                <li className="me-5">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i className="fa-solid fa-user"></i>
                        </button>
                        <ul className="dropdown-menu bg-secondary">
                            <li><Link className="dropdown-item bg-secondary text-white" to="/Page6">View Profile</Link>
                            </li>
                            <li><Link className="dropdown-item bg-secondary text-white" to="/">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>

        </header>
    </div>
    <div className="container-fluid">
        <div className="row ">
            <div className="col-md-9">

                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="1200">
                            <img src="https://images.app.goo.gl/k5Hog6V1eAKsUAf8A" className="d-block w-100 img-fluid"
                                alt=".."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="1200">
                            <img src="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/414/thumb/Discord_Icon.png?1671452051"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="1200">
                            <img src="https://cdn-az.allevents.in/events5/banners/5964232acc0c7f26d154b707bd04d7a9c5c4e8a0e9139e71e5cabf2b4364166e-rimg-w1200-h813-gmir.jpg?v=1656609180"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="1200">
                            <img src="https://cs.wwu.edu/files/2022-01/CSProjectsWorkshopPoster.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="1200">
                            <img src="https://marketplace.canva.com/EAE_HhmNKs0/1/0/1131w/canva-blue-modern-we-are-hiring-%28poster%29-6fLSwo4qNdk.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

        <br/><br/>
        <div className="row ">
            <div className="col-md">
                <img src="https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work.png" alt="Haxkathon"/>
                <br/><br/>
                <img src="https://contentstatic.techgig.com/photo/82260703.cms" alt="Machine"/>
                <br/><br/>
                <img src="https://img.freepik.com/free-vector/hackathon-technology-infographic-with-flat-icons_88138-961.jpg?w=2000"
                    alt="Job Opportunities"/>
                <br/><br/>
            </div>
            <div className="col-md">
                


            </div>
        </div>


</div>
    </div>
)
}

export  default Page3;