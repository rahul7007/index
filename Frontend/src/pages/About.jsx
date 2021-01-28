import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import dp from './img/myavatar.png';
import aboutImg from './img/about.png';
import projectImg from './img/projectmind.png';
import work1Img from './img/work1.jpg';
import work2Img from './img/work21.jpg';
import work3Img from './img/work3.jpg';
import work4Img from './img/work-4.gif';
import work5Img from './img/work5.jpg';
import work6Img from './img/work6.jpg';


class About extends Component {

    componentDidMount(){
        const navMenu = document.getElementById('nav-menu')
        // remove menu
        const navLink = document.querySelectorAll('.nav__link')

        function linkAction(){
            navMenu.classList.remove('show')
        }
        navLink.forEach(n => n.addEventListener('click', linkAction))

        // scroll section active links
        const sections = document.querySelectorAll('section[id]')

        window.addEventListener('scroll', scrollActive)

        function scrollActive(){
            const scrollY = window.pageYOffset

            sections.forEach(current =>{
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 50
                var sectionId = current.getAttribute('id')

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
                } else{
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
                }
            })
        }
    }

    openMenu = () =>{
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.toggle('show')
    }

    closeMenu = () =>{
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show')
    }
    render() { 
        return ( 
            <React.Fragment>
                {/* header */}
                <header class="l-header">
                    <nav class="nav bd-grid">
                        <div class="nav__toggle" id="nav-toggle">
                            <i onClick={this.openMenu} class='bx bx-menu'></i>
                        </div>

                        <div>
                            <a href="#" class="nav__logo">Spark</a>
                        </div>

                        <div class="nav__menu" id="nav-menu">
                            <div class="nav__close" id="nav-close">
                                <i onClick={this.closeMenu} class='bx bx-x'></i>
                            </div>
                            <ul class="nav__list">
                                <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                                <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                                <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
                                <li class="nav__item"><a href="#services" class="nav__link">Services</a></li>
                                <li class="nav__item"><a href="#works" class="nav__link">Works</a></li>
                                <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <main class="l-main">
                    {/* Home */}
                    <section class="home" id="home">
                        <div class="home__container bd-grid">
                            <div class="home__data">
                                <div class="home__img">
                                    <img src={dp} alt="" />
                                </div>

                                <h1 class="home__title">Rahul Sarma</h1>
                                <span class="home__profession">Software Developer</span>

                                <div class="home__social">
                                    <a href="https://www.linkedin.com/in/rahul-sarma-9348a0187/" class="home__social-link"><i class="bx bxl-linkedin"></i></a>
                                    <a href="https://github.com/rahul7007" class="home__social-link"><i class="bx bxl-github"></i></a>
                                    <a href="https://www.hackerrank.com/Rahul_Sarma" class="home__social-link"><i class="fab fa-hackerrank"></i></a>
                                    <a href="http://localhost:3000/" class="home__social-link"><i class="bx bxl-behance"></i></a>
                                </div>

                                <a download="" href="#" class="button home__button">Download Resume</a>
                            </div>
                        </div>
                    </section>
                    {/* About */}
                    <section class="about section" id="about">
                        <span class="section-subtitle">My Intro</span>
                        <h2 class="section-title">About me</h2>

                        <div class="about__container bd-grid">
                            <div class="about__data">
                                <p class="about__description">Experienced Software Engineer with a demonstrated history of working in the computer software industry. Skilled in PHP, Java, HTML, Bootstrap, and Cascading Style Sheets (CSS). Strong engineering professional with a Master of Computer Applications - MCA focused in Computer Programming, Specific Applications from Jorhat Engineering College P.O. Jorhat-785007. </p>
                                <img src={aboutImg} alt="" class="about__img" />
                            </div>

                            <div>
                                <div class="about__information">
                                    <h3 class="about__information-title">Information</h3>
                
                                    <div class="about__information-data">
                                        <i class="bx bx-user about__information-icon"></i>
                                        <span>Rahul Sarma</span>
                                    </div>
                
                                    <div class="about__information-data">
                                        <i class="bx bx-phone about__information-icon"></i>
                                        <span>+91-9085895248</span>
                                    </div>
                
                                    <div class="about__information-data">
                                        <i class="bx bx-envelope about__information-icon"></i>
                                        <span>rahulsarma7007@gmail.com</span>
                                    </div>
                                </div>
                
                                <div class="about__information">
                                    <h3 class="about__information-title">Experience and support</h3>
                
                                    <div class="about__information-data">
                                        <i class="bx bx-medal about__information-icon"></i>
                                        <div>
                                            <span class="about__information-subtitle">1.5 Years Job</span>
                                            <span class="about__information-subtitle-small">Experience</span>
                                        </div>
                                    </div>
                
                                    <div class="about__information-data">
                                        <i class="bx bx-briefcase about__information-icon"></i>
                                        <div>
                                            <span class="about__information-subtitle">5+ projects</span>
                                            <span class="about__information-subtitle-small">Completed</span>
                                        </div>
                                    </div>
                
                                    <div class="about__information-data">
                                        <i class="bx bx-support about__information-icon"></i>
                                        <div>
                                            <span class="about__information-subtitle">Support</span>
                                            <span class="about__information-subtitle-small">Online 24/7</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Skills */}
                    <section class="skills section" id="skills">
                        <span class="section-subtitle">Why Choose Me</span>
                        <h2 class="section-title">My expertise area</h2>

                        <div class="skills__container bd-grid">
                            <div class="skills__content">
                                <h3 class="skills__subtitle">Frontend</h3>

                                <div class="skills__data">
                                    <span class="skills__name">HTML/CSS</span>
                                    <span class="skills__number">80%</span>
                                    <span class="skills__bar skills__html"></span>
                                </div>

                                <div class="skills__data">
                                    <span class="skills__name">JavaScript</span>
                                    <span class="skills__number">90%</span>
                                    <span class="skills__bar skills__js"></span>
                                </div>

                                <div class="skills__data">
                                    <span class="skills__name">React</span>
                                    <span class="skills__number">70%</span>
                                    <span class="skills__bar skills__react"></span>
                                </div>

                                {/* <div class="skills__data">
                                    <span class="skills__name">Angular</span>
                                    <span class="skills__number">60%</span>
                                    <span class="skills__bar skills__angular"></span>
                                </div> */}
                            </div>

                            <div class="skills__content">
                                <h3 class="skills__subtitle">Backend</h3>

                                <div class="skills__data">
                                    <span class="skills__name">Php</span>
                                    <span class="skills__number">80%</span>
                                    <span class="skills__bar skills__php"></span>
                                </div>

                                <div class="skills__data">
                                    <span class="skills__name">Node js</span>
                                    <span class="skills__number">70%</span>
                                    <span class="skills__bar skills__node"></span>
                                </div>

                                {/* <div class="skills__data">
                                    <span class="skills__name">Firebase</span>
                                    <span class="skills__number">90%</span>
                                    <span class="skills__bar skills__firebase"></span>
                                </div> */}

                                <div class="skills__data">
                                    <span class="skills__name">Python</span>
                                    <span class="skills__number">60%</span>
                                    <span class="skills__bar skills__python"></span>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Education */}
                    <section class="education section">
                        <span class="section-subtitle">Qualification</span>
                        <h2 class="section-title">My Education</h2>

                        <div class="education__container bd-grid">
                            <div class="education__content">
                                <div>
                                    <h3 class="education__year">2012 - 2015</h3>
                                    <span class="education__university">Gauhati University</span>
                                </div>

                                <div class="education__time">
                                    <span class="education__rounder"></span>
                                    <span class="education__line"></span>
                                </div>

                                <div>
                                    <h3 class="education__race">Bachelor of Computer Application</h3>
                                    {/* <span class="education__speciality">Frontend</span> */}
                                </div>
                            </div>

                            <div class="education__content">
                                <div>
                                    <h3 class="education__year">2016- 2019</h3>
                                    <span class="education__university">Dibrugarh University</span>
                                </div>

                                <div class="education__time">
                                    <span class="education__rounder"></span>
                                    <span class="education__line"></span>
                                </div>

                                <div>
                                    <h3 class="education__race">Master of Computer Application</h3>
                                    {/* <span class="education__speciality">Backend</span> */}
                                </div>
                            </div>

                            {/* <div class="education__content">
                                <div>
                                    <h3 class="education__year">2018 - 2020</h3>
                                    <span class="education__university">University of studies</span>
                                </div>

                                <div class="education__time">
                                    <span class="education__rounder"></span>
                                    <span class="education__line"></span>
                                </div>

                                <div>
                                    <h3 class="education__race">Diploma Design</h3>
                                    <span class="education__speciality">UI/UX</span>
                                </div>
                            </div> */}
                        </div>
                    </section>
                    {/* Services */}
                    {/* <section class="services section" id="services">
                        <span class="section-subtitle">What I Offer</span>
                        <h2 class="section-title">My Services</h2>
                    

                    <div class="services__container bd-grid">
                        <div class="services__content">
                            <i class="bx bx-code services__icon"></i>
                            <h3 class="services__title">Web Design</h3>
                            <p class="services__description">
                                With Introduction of windows 8.1 core Microsoft API’s to interact with hardware has gone through lot of changes. A lot of new API’s have better support for development in C# rather
                            </p>
                        </div>

                        <div class="services__content">
                            <i class="bx bx-pen services__icon"></i>
                            <h3 class="services__title">Graphics Design</h3>
                            <p class="services__description">
                                With Introduction of windows 8.1 core Microsoft API’s to interact with hardware has gone through lot of changes. A lot of new API’s have better support for development in C# rather
                            </p>
                        </div>

                        <div class="services__content">
                            <i class="bx bx-brush services__icon"></i>
                            <h3 class="services__title">UI/UX</h3>
                            <p class="services__description">
                                With Introduction of windows 8.1 core Microsoft API’s to interact with hardware has gone through lot of changes. A lot of new API’s have better support for development in C# rather
                            </p>
                        </div>

                        <div class="services__content">
                            <i class="bx bx-server services__icon"></i>
                            <h3 class="services__title">Backend development</h3>
                            <p class="services__description">
                                With Introduction of windows 8.1 core Microsoft API’s to interact with hardware has gone through lot of changes. A lot of new API’s have better support for development in C# rather
                            </p>
                        </div>

                        <div class="services__content">
                            <i class="bx bx-pencil services__icon"></i>
                            <h3 class="services__title">Content Writing</h3>
                            <p class="services__description">
                                With Introduction of windows 8.1 core Microsoft API’s to interact with hardware has gone through lot of changes. A lot of new API’s have better support for development in C# rather
                            </p>
                        </div>

                        <div class="services__content">
                            <i class="bx bx-mobile services__icon"></i>
                            <h3 class="services__title">Interface Movil</h3>
                            <p class="services__description">
                                With Introduction of windows 8.1 core Microsoft API’s to interact with hardware has gone through lot of changes. A lot of new API’s have better support for development in C# rather
                            </p>
                        </div>            
                    </div>
                </section> */}
                    {/* Projects */}
                    <section class="project section">
                        <div class="project__container bd-grid">
                            <div class="project__data">
                                <h2 class="section-title project__title">
                                    Do you have a project in your mind
                                </h2>
                                <p class="project__description">
                                    Feel free to contact me
                                </p>
                                <a href="#contact" class="button button__light">Contact Me</a>
                            </div>
                            <img src={projectImg} alt="" class="project__img" />
                        </div>
                    </section>
                    {/* Works */}
                    <section class="works section" id="works">
                        <span class="section-subtitle">My portfolio</span>
                        <h2 class="section-title">Recent projects</h2>

                        <div class="works__container bd-grid">
                <div class="works__img">
                    <img src={work1Img} alt="" />

                    <div class="works__data">
                        <a href="https://github.com/rahul7007/MERN-AUTH-APP" class="works__link"><i class="bx bx-link-alt"></i></a>
                        <span class="works__title">Authentication App</span>
                    </div>
                </div>

                <div class="works__img">
                    <img src={work2Img} alt="" />

                    <div class="works__data">
                        <a href="https://github.com/rahul7007/Python-Voice-Assistant" class="works__link"><i class="bx bx-link-alt"></i></a>
                        <span class="works__title">Voice Assistant</span>
                    </div>
                </div>

                <div class="works__img">
                    <img src={work3Img} alt="" />

                    <div class="works__data">
                        <a href="https://github.com/rahul7007/Chat-App" class="works__link"><i class="bx bx-link-alt"></i></a>
                        <a href="https://github.com/rahul7007/Chat-App" class="works__link"><i class="bx bx-link-alt"></i></a>
                        <span class="works__title">Chat App</span>
                    </div>
                </div>

                <div class="works__img">
                    <img src={work4Img} alt="" />

                    <div class="works__data">
                        <a href="#" class="works__link"><i class="bx bx-link-alt"></i></a>
                        <span class="works__title">Work in progress</span>
                    </div>
                </div>

                {/* <div class="works__img">
                    <img src={work5Img} alt="" />

                    <div class="works__data">
                        <a href="#" class="works__link"><i class="bx bx-link-alt"></i></a>
                        <span class="works__title">Work 5</span>
                    </div>
                </div>

                <div class="works__img"> 
                    <img src={work6Img} alt="" />

                    <div class="works__data">
                        <a href="#" class="works__link"><i class="bx bx-link-alt"></i></a>
                        <span class="works__title">Work 6</span>
                    </div>
                </div> */}
            </div>
                    </section>
                    {/* Contact */}
                    <section class="contact section" id="contact">
                        <span class="section-subtitle">Contact Me</span>
                        <h2 class="section-title">Get in touch</h2>

                        <div class="contact__container bd-grid">
                            <form action="" class="contact__form">
                                <div class="contact__inputs">
                                    <input type="text" placeholder="Name" class="contact__input" />
                                    <input type="mail" placeholder="Email" class="contact__input" />
                                </div>

                                <input type="text" placeholder="Project" class="contact__input" />

                                <textarea name="" id="" cols="0" rows="10" placeholder="Message" class="contact__input"></textarea>

                                <input type="submit" value="Send Message" class="button contact__button" />
                            </form>

                            <div>
                                <div class="contact__info">
                                    <h3 class="contact__subtitle">Call me</h3>
                                    <span class="contact__text">+91-9085895248</span>
                                    <span class="contact__text">+91-9101514092</span>
                                </div>

                                <div class="contact__info">
                                    <h3 class="contact__subtitle">Email</h3>
                                    <span class="contact__text">rahulsarma7007@gmail.com</span>
                                    <span class="contact__text">rahul@boldtek.com</span>
                                </div>

                                <div class="contact__info">
                                    <h3 class="contact__subtitle">Location</h3>
                                    <span class="contact__text">India, Assam</span>
                                    <span class="contact__text">Guwahati 781016</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer class="footer section">
                    <div class="footer__container bd-grid">
                        <h1 class="footer__title">Rahul</h1>
                        <p class="footer__description">I am Rahul, this is my personal website.</p>

                        <div class="footer__social">
                            <a href="https://www.facebook.com/rahulspark77" class="footer__link"><i class="bx bxl-facebook"></i></a>
                            <a href="https://www.instagram.com/rahulsarma77/?hl=en" class="footer__link"><i class="bx bxl-instagram"></i></a>
                            <a href="https://twitter.com/rahulsarma77" class="footer__link"><i class="bx bxl-twitter"></i></a>
                        </div>

                        <p class="footer__copy">All rights reserved - 2021</p>
                    </div>
                </footer>
                </main>
            </React.Fragment> 

         );
    }
}
 
export default About;