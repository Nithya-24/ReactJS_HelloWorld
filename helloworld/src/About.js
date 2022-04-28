import React from "react";
import "./Home.css";
function About() {
    return (
        <>
        <div>
            <header class="headerContainer">HEADER - Sample Flexbox Example </header>
            <div class="mainContainer">
                <section class="mainContentItem">
                    <article>
                        <h2>Third article</h2>
                        <p>Working together to keep Tech employability of enginners alive and accesible so tech comanies
                            worldwide get contributors and creators for technology solutions.</p>
                    </article>
                </section>
                <sidebar class="sideBarItem sideBarLeftItem">Left Side Bar</sidebar>
                <sidebar class="sideBarItem sideBarRightItem">Right Side Bar</sidebar>
            </div>
            <footer class="footerContainer">Footer</footer>
            </div>
            </>
            
    
    );
}
export default About;