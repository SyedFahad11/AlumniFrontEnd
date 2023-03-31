import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
function Page6() {
    return (
<div>

{/* <h2 style="text-align:center">User Profile Card</h2> */}
 <Link className="btn" to="/Page4"  style={{fontSize: "20px"}}> Update profile
                        </Link>
<div className="card">
  {/* <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="John" style="width:100%"/> */}
  <h1>John Doe</h1>
  <p className="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
 <div>
    <a href="#"><i class="fa fa-dribbble"></i></a> 
    <a href="#"><i class="fa fa-twitter"></i></a>  
    <a href="#"><i class="fa fa-linkedin"></i></a>  
    <a href="#"><i class="fa fa-facebook"></i></a> 
  </div>
  <p><button>9948858881</button></p>
</div>

</div>
    )
}
export default Page6;

