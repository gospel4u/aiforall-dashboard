import React from 'react';
import styled from 'styled-components';
import jquery from 'jquery';
window.$ = window.jQuery=jquery;

function Header() {
    return (
        <section className="HeaderSection">
            <div className="PageHeader">
                <div className="LogoContainer no-drag">
                    <a href="http://covenant.tistory.com/">Covenant LAB</a>
                </div>
            </div>

            <div className="HelloMessage">
                20-Spring Semister AI For All Dashboard!
            </div>

            <div className="type-wrap">
                Learn to code &nbsp;
                <span id="typed"> </span>
                <span className="typed-cursor">|</span>
            </div>

            <div className="SocialSection">
                <div className="GitIcon">
                    <i className="fa fa-github"></i>
                </div>
            </div>


            {/* <div class="hello">
                <h1>Web Development Tutorial</h1>
                <div class="type-wrap">
                    Learn to code
                    <span id="typed" style="white-space:pre;"></span>
                </div>
            </div>
            <div id="scroll-icon"><i class="fa fa-angle-double-down"></i></div>

            <a href="https://github.com/ungmo2" target="_blank">
                <i class="fa fa-github"></i>
            </a> */}
        </section>
    )
}

export default Header