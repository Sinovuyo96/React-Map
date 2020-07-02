import React from 'react';
// import {
//     BrowserRouter as Router,
//     StaticRouter, // for server rendering
//     Route,
//     Link
//     // etc.
//   } from "react-router-dom";
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
        <React.Fragment>
            <li><Link to ="/form">Request Delivery</Link></li>
        </React.Fragment>
 
// <nav >
//     <div  class="nav-wrapper">
//       <a href="google.com" class="brand-logo">Logo</a>
//       <ul id="nav-mobile" className="Right" class="right hide-on-med-and-down">
//         <li><a href="sass.html">Sass</a></li>
//         <li><a href="badges.html">Components</a></li>
//         <li><a href="collapsible.html">JavaScript</a></li>
//       </ul>
//     </div>
//   </nav>
  )
  
};

//             <nav className="nav-wrapper">
//                 <div className="container">
//                     <Link to="/" className="brand-logo">Shopping</Link>
                    
//                     <ul className="right">
//                         <li><Link to="/">Shop</Link></li>
//                         <li><Link to="/cart">My cart</Link></li>
//                         <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
//                     </ul>
//                 </div>
//             </nav>  
//     )
// }

export default Navbar;