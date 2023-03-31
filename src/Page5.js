import React from 'react';
import ReactDOM from 'react-dom';
function Page5() {
    return (
        <div>
             <div className="display-1">Events</div>
            <div id="E1" className="card">
                <div className="card-body">
                    <img className="rounded float-end" src="f5r.jpg" />
                    <h5 className="card-title">Event Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" className="card-link btn btn-secondary">
                        URL
                    </a>
                </div>
            </div>
            <div id="E2" className="card">
                <div className="card-body">
                    <img className="rounded float-end" src="f5r.jpg" />
                    <h5 className="card-title">Event Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" className="card-link btn btn-secondary">
                        URL
                    </a>
                </div>
            </div>
            <div id="E3" className="card">
                <div className="card-body">
                    <img className="rounded float-end" src="f5r.jpg" />
                    <h5 className="card-title">Event Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" className="card-link btn btn-secondary">
                        URL
                    </a>
                </div>
            </div>
            <div id="E4" className="card">
                <div className="card-body">
                    <img className="rounded float-end" src="f5r.jpg" />
                    <h5 className="card-title">Event Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" className="card-link btn btn-secondary">
                        URL
                    </a>
                    <div className="display-2">Notices</div>
            <hr style={{ height: '4px', backgroundColor: 'black' }} />
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0}>
                <p id="Notice-1">
                </p><h3>Notice-1</h3>
                The interview rounds will commence from today, January 30, 2023 onwards. Alongside the UPSC Prelims 2023 notification, the commission would also...
                <p />
                <hr />
                <p id="Notice-2">
                </p><h3>Notice-2</h3>
                The interview rounds will commence from today, January 30, 2023 onwards. Alongside the UPSC Prelims 2023 notification, the commission would also...
                <p />
                <hr />
                <p id="Notice-3">
                </p><h3>Notice-3</h3>
                The interview rounds will commence from today, January 30, 2023 onwards. Alongside the UPSC Prelims 2023 notification, the commission would also...
                <p />
                <hr />
                <p id="Notice-4">
                </p><h3>Notice-4</h3>
                The interview rounds will commence from today, January 30, 2023 onwards. Alongside the UPSC Prelims 2023 notification, the commission would also...
                <p />
            </div>
                </div>
            </div>
        </div>

    )
}
export default Page5;