import React from 'react';
import logo1 from '../images/i1.jpg';
import logo2 from '../images/i2.jpg';
import logo3 from '../images/i3.jpg';
import logo4 from '../images/i4.jpg';
import logo5 from '../images/i5.jpg';
import logo6 from '../images/i6.jpg';
import logo7 from '../images/i7.jpg';
import logo8 from '../images/i8.jpg';
const FooterPage = () =>(
    <footer class="footer-area" id="contact">
        <div>
            <h6 class="footer-area__h6">About Us</h6>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                dolore
                magna aliqua.
            </p>
        </div>
        <div>
            <h6 class="footer-area__h6">Newsletter</h6>
            <p>Stay update with our latest</p>
            <input class="form-control" name="EMAIL" placeholder="Enter Email " onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Enter Email '" required="" type="email" /><button><i
                    class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
        </div>
        <div>
            <h6 class="footer-area__h6">Instragram Feed</h6>
            <div class="footer-area__nesting">
                <div class="footer-area__nesting-row">
                    <p>
                        <img src={logo1} alt="" />
                    </p>
                    <p>
                        <img src={logo2} alt="" />
                    </p>
                    <p>
                        <img src={logo3} alt="" />
                    </p>
                    <p>
                        <img src={logo4} alt="" />
                    </p>
                    <p>
                        <img src={logo5} alt="" />
                    </p>
                    <p>
                        <img src={logo6} alt="" />
                    </p>
                    <p>
                        <img src={logo7} alt="" />
                    </p>
                    <p>
                        <img src={logo8} alt="" />
                    </p>
                </div>
            </div>
        </div>
        <div>
            <h6 class="footer-area__h6">Follow Us</h6>
            <p>Let us be social</p>
            <div>
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-dribbble"></i></a>
                <a href="#"><i class="fa fa-behance"></i></a>
            </div>
        </div>
    </footer>
)
export default FooterPage;