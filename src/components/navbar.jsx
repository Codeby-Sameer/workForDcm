import { Link } from "react-router-dom"

const Navbar=()=>{
    return (<>
    {/* <!--loader start--> */}
    <div id="preloader">
        <div class="loader1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    {/* <!--loader end--> */}

    {/* <!--header section start--> */}
    <header class="header">
        {/* <!--start navbar--> */}
        <nav class="navbar navbar-expand-lg fixed-top custom-nav ">
            <div class="container">
                <a class="navbar-brand" href="index-2.html">
                    <img src="img/logo-color.png" alt="logo" class="img-fluid" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="ti-menu"></span>
                </button>
                <div class="collapse navbar-collapse h-auto" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto menu">
                        <li><Link to="/"> Home</Link >
                          
                        </li>
                        <li><a href="services.html" class="dropdown-toggle">Services</a>
                             <ul class="sub-menu">
                            <li><a href="team.html">Consultancy Services </a></li>
                            <li><a href="team-single.html">Manpower Support</a></li>
                             </ul>
                        
                        </li>
                        <li><Link to='trainings'>Trainings</Link></li>
                        <li><Link to='about-us'>About Us</Link></li>
                     
                        <li><Link to="contact-us">Contact Us</Link></li>
                        <li><Link to="login">Login</Link></li>
                        <li><Link to="sign-up">Sign Up</Link></li>   
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    {/* <!--header section end */}
    
    
    
    </>)
}
export default Navbar