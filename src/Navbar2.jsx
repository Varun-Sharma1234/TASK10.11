// import React from "react";
// import "./Navbar.css";

// function Navbar2() {
//   return (
//     <>
//       <nav>
//         <div className="navbar-container " id="navbarid">
//           <div id="logo">
//             <a href="#home">
//               <h3>Sign up for Daily insider Email </h3>
//             </a>
//           </div>

//           <div className="input">
//             <input type="text" placeholder="Enter your email" />
//             <button type="button">Subscribe</button>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar2;

import React, { useState } from "react";
//import './Email.css';

function Header() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail("");
        console.log("Email sent successfully!");
      } else {
        console.error("Error sending email:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  };

  return (
    <div className="clr">
      <form id="signup-form" onSubmit={handleSubscribe}>
        <span>
        <label className="size">SIGN UP FOR OUR DAILY INSIDER</label>
        <input
          id="emailInput"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="subscribe">Subscribe</button>
        </span>
      </form>
    </div>
  );
}

export default Header;