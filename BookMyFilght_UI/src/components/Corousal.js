import React from "react";
import t2 from "../assets/images/t1.jpeg";
import t1 from "../assets/images/11.jpg"
import t3 from "../assets/images/12.jpg"
import t4 from "../assets/images/13.jpg"

function Corousal(props) {
  return (
    // <div className="carousel-inner col-lg-17">
    //   <div className="carousel-item active">
    //     <img src={t2} width="100%" height="380" />
    //   </div>
    // </div>

    <div className="">
    <div id="id" className='carousel slide' data-bs-ride="true">

{/* <!-- Indicators --> */}
<ul className="carousel-indicators">
<li data-target="#id" data-slide-to="0" className="active"></li>
<li data-target="#id" data-slide-to="1"></li>
<li data-target="#id" data-slide-to="2"></li>
<li data-target="#id" data-slide-to="3"></li>
</ul>

{/* <!-- The slideshow --> */}
<div className="carousel-inner rounded">
<div className="carousel-item active">
<img 
src={t1}
// src={"https://parivahan.gov.in/parivahan//sites/default/files/akam-saath-prayas.jpg"}
    alt="Signs" width="100%" height="500" />
</div>
<div className="carousel-item">
<img 
src={t3}
// src={"https://chittorgarh.org/wp-content/uploads/2022/07/Driving-Licence.jpg"}
    alt="Makelicense" width="100%" height="500" />
</div>
<div className="carousel-item">
<img 
src={t4}
    alt="signal" width="100%" height="500" />
</div>
<div className="carousel-item">
<img src={t2}
    alt="roads" width="100%" height="500" />
</div>
</div>

{/* <!-- Left and right controls --> */}
<a className="carousel-control-prev" href="#id" data-slide="prev"> <span
className="carousel-control-prev-icon"></span>
</a> <a className="carousel-control-next" href="#id" data-slide="next"> <span
className="carousel-control-next-icon"></span>
</a>
</div>
</div>
  );
}

export default Corousal;
