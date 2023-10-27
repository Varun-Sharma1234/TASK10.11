import React from 'react';
import "./Navbar.css";



function Navbar() {

return (

<>

<nav>

<div className="navbar-container " id='navbarid'>

<div id="logo">

<a href="#home">

<h3>DEV@DEAKIN</h3></a>

</div>

<div className="input">



<input type="text" placeholder='Search' />

</div>

<div className="list1">

<ul>

<a href='#Post' id="item4"><li>Post</li></a>

<a href='#Login' id="item5"><li>Login</li></a>


</ul>

</div>

</div>

</nav>

</>

)

}

export default Navbar