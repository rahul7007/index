import React, { Component } from "react";
import { FaHackerrank } from "react-icons/fa";
import api from "../api";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import dp from "./img/myavatar.png";
import aboutImg from "./img/about.png";
// import projectImg from './img/projectmind.png';
import work1Img from "./img/work1.jpg";
import work2Img from "./img/work21.jpg";
import work3Img from "./img/work3.jpg";
import work4Img from "./img/work-4.gif";
import resume from "./img/Rahul.pdf";
// import work6Img from './img/work6.jpg';

//toastr
import toastr from "toastr";
import "toastr/build/toastr.min.css";

class About extends Component {
  constructor() {
    super();
    this.state = {
      darkMode: "false",
      time: new Date(),
      alias: "",
      email: "",
      phone: "",
      message: "",
      bio: "",
      hobby: "",
      infoName: "",
      infoPhone: "",
      infoEmail: "",
      lang: [],
      dbs: [],
      devtools: [],
      projmgttools: [],
      totalExp: "",
      totalProjects: "",
    };
  }

  async componentDidMount() {
    //get all the data
    await api.getAllData().then((res) => {
      console.log("response", res.data.data[0]);
      this.setState({
        bio: res.data.data[0].bio,
        hobby: res.data.data[0].hobby,
        infoName: res.data.data[0].info[0].name,
        infoPhone: res.data.data[0].info[0].phone,
        infoEmail: res.data.data[0].info[0].email,
        lang: res.data.data[0].lang,
        dbs: res.data.data[0].databases,
        devtools: res.data.data[0].devtools,
        projmgttools: res.data.data[0].projmgttools,
        totalExp: res.data.data[0].exp[0].totalexp,
        totalProjects: res.data.data[0].exp[0].project,
      });
    });

    const navMenu = document.getElementById("nav-menu");
    // remove menu
    const navLink = document.querySelectorAll(".nav__link");

    function linkAction() {
      navMenu.classList.remove("show");
    }
    navLink.forEach((n) => n.addEventListener("click", linkAction));

    // scroll section active links
    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", scrollActive);

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        var sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.add("active");
        } else {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.remove("active");
        }
      });
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentWillUnmount() {
    setInterval(() => this.currentTime(), 1000);
  }

  currentTime() {
    this.setState({
      time: new Date(),
    });
  }

  openMenu = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show");
  };

  closeMenu = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  };

  SendMessage = (e) => {
    e.preventDefault();
    var From = this.state.alias;
    var Email = this.state.email;
    var Phone = this.state.phone;
    var Message = this.state.message;
    const payload = { From, Email, Phone, Message };
    console.log("payload", payload);

    this.count = this.count || 1;
    toastr.options = {
      positionClass: "toast-top-right",
      hideDuration: 300,
      timeOut: 2000,
    };

    if (From == "" || Email == "" || Phone == "" || Message == "") {
      setTimeout(() => toastr.error(`Please fill the required fields`), 300);
    } else {
      // api.sendTextMessage(payload).then((res =>{
      //alert(res.data)
      //alert(From)
      //alert(Organization)
      //alert(Email)
      //alert(Phone)
      //alert(Message)
      //}))
      toastr.clear();
      setTimeout(() => toastr.success(`Message Sent`), 300);
    }
  };

  changeTheme = () => {
    if (this.state.darkMode == "false") {
      this.setState({
        darkMode: "true",
      });
    }
    if (this.state.darkMode == "true") {
      this.setState({
        darkMode: "false",
      });
    }
    // alert(this.state.darkMode)
  };
  render() {
    return (
      <React.Fragment>
        <div
          className={
            this.state.darkMode === "true" ? "dark-mode" : "light-mode"
          }
        >
          {/* header */}
          <header class="l-header">
            <nav class="nav bd-grid">
              <div class="nav__toggle" id="nav-toggle">
                <i onClick={this.openMenu} class="bx bx-menu"></i>
              </div>

              <div>
                {/* <a href="#" class="nav__logo">Spark</a> */}
                {this.state.darkMode === "true" ? (
                  <i
                    onClick={this.changeTheme}
                    class="bx bx-sun"
                    style={{ fontSize: "2rem", color: "#2AA198" }}
                  ></i>
                ) : (
                  <i
                    onClick={this.changeTheme}
                    class="bx bxs-moon"
                    style={{ fontSize: "2rem", color: "#002b36" }}
                  ></i>
                )}
              </div>

              <div class="dark-mode nav__menu" id="nav-menu">
                <div class="nav__close" id="nav-close">
                  <i onClick={this.closeMenu} class="bx bx-x"></i>
                </div>
                <ul class="nav__list">
                  <li class="nav__item">
                    <a href="#home" class="nav__link active">
                      Home.html
                    </a>
                  </li>
                  <li class="nav__item">
                    <a href="#about" class="nav__link">
                      About.jsx
                    </a>
                  </li>
                  <li class="nav__item">
                    <a href="#skills" class="nav__link">
                      Skills.json
                    </a>
                  </li>
                  {/* <li class="nav__item"><a href="#services" class="nav__link">Services</a></li> */}
                  <li class="nav__item">
                    <a href="#works" class="nav__link">
                      Projects.py
                    </a>
                  </li>
                  <li class="nav__item">
                    <a href="#contact" class="nav__link">
                      Contact.css
                    </a>
                  </li>
                </ul>
                <div class="git__branch">
                  <i class="bx bx-git-branch" style={{ fontSize: "2rem" }}></i>
                  master*
                </div>
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
                    <a
                      href="https://www.linkedin.com/in/rahul-sarma-9348a0187/"
                      class="home__social-link"
                    >
                      <i class="bx bxl-linkedin"></i>
                    </a>
                    <a
                      href="https://github.com/rahul7007"
                      class="home__social-link"
                    >
                      <i class="bx bxl-github"></i>
                    </a>
                    <a
                      href="https://www.hackerrank.com/Rahul_Sarma"
                      class="home__social-link"
                    >
                      <FaHackerrank />
                    </a>
                    <a href="http://localhost:3000/" class="home__social-link">
                      <i class="bx bxl-behance"></i>
                    </a>
                  </div>

                  <a
                    download="rahul-resume.pdf"
                    href={resume}
                    class="button home__button"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </section>
            {/* About */}
            <section class="about section" id="about">
              {/* <span class="section-subtitle">My Intro</span> */}
              <h2 class="section-title">
                <b>About me</b>
              </h2>

              <div class="about__container bd-grid">
                <div class="about__data">
                  <p class="about__description">
                    &emsp;{" "}
                    {this.state.bio ? this.state.bio : <div>Loading...</div>}
                  </p>
                  <p class="about__description">
                    &emsp;{" "}
                    {this.state.hobby ? (
                      this.state.hobby
                    ) : (
                      <div>Loading...</div>
                    )}
                  </p>
                  <img src={aboutImg} alt="" class="about__img" />
                </div>

                <div>
                  <div class="about__information">
                    <h3 class="about__information-title">Information</h3>

                    <div class="about__information-data">
                      <i class="bx bx-user about__information-icon"></i>
                      <span>
                        {this.state.infoName ? (
                          this.state.infoName
                        ) : (
                          <div>Loading...</div>
                        )}
                      </span>
                    </div>

                    <div class="about__information-data">
                      <i class="bx bx-phone about__information-icon"></i>
                      <span>
                        {this.state.infoPhone ? (
                          this.state.infoPhone
                        ) : (
                          <div>Loading...</div>
                        )}
                      </span>
                    </div>

                    <div class="about__information-data">
                      <i class="bx bx-envelope about__information-icon"></i>
                      <span>
                        {this.state.infoEmail ? (
                          this.state.infoEmail
                        ) : (
                          <div>Loading...</div>
                        )}
                      </span>
                    </div>
                  </div>

                  <div class="about__information">
                    <h3 class="about__information-title">Experience</h3>

                    <div class="about__information-data">
                      <i class="bx bx-medal about__information-icon"></i>
                      <div>
                        <span class="about__information-subtitle">
                          {this.state.totalExp}
                        </span>
                        <span class="about__information-subtitle-small">
                          Experience
                        </span>
                      </div>
                    </div>

                    <div class="about__information-data">
                      <i class="bx bx-briefcase about__information-icon"></i>
                      <div>
                        <span class="about__information-subtitle">
                          {this.state.totalProjects}
                        </span>
                        <span class="about__information-subtitle-small">
                          Completed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Skills */}
            <section class="skills section" id="skills">
              {/* <span class="section-subtitle">Why Choose Me</span> */}
              <h2 class="section-title">
                <b>Technology I worked</b>
              </h2>

              <div class="skills__container bd-grid">
                <div class="skills__content">
                  <h3 class="skills__subtitle">Programming Language</h3>
                  {this.state.lang.map((val) => {
                    return (
                      <>
                        <div class="skills__data">
                          <i class="bx bx-send"></i>
                          &emsp;
                          <span class="skills__name">{val.name}</span>
                        </div>
                      </>
                    );
                  })}
                </div>

                <div class="skills__content">
                  <h3 class="skills__subtitle">Databases</h3>

                  {this.state.dbs.map((val) => {
                    return (
                      <>
                        <div class="skills__data">
                          <i class="bx bx-send"></i>
                          &emsp;
                          <span class="skills__name">{val.name}</span>
                        </div>
                      </>
                    );
                  })}
                </div>

                <div class="skills__content">
                  <h3 class="skills__subtitle">Dev tools</h3>

                  {this.state.devtools.map((val) => {
                    return (
                      <>
                        <div class="skills__data">
                          <i class="bx bx-send"></i>
                          &emsp;
                          <span class="skills__name">{val.name}</span>
                        </div>
                      </>
                    );
                  })}
                </div>

                <div class="skills__content">
                  <h3 class="skills__subtitle">Project management tool</h3>

                  {this.state.projmgttools.map((val) => {
                    return (
                      <>
                        <div class="skills__data">
                          <i class="bx bx-send"></i>
                          &emsp;
                          <span class="skills__name">{val.name}</span>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </section>
            {/* Education */}
            <section class="education section">
              {/* <span class="section-subtitle">Qualification</span> */}
              <h2 class="section-title">
                <b>My Education</b>
              </h2>

              <div class="education__container bd-grid">
                <div class="education__content">
                  <div>
                    <h3 class="education__year">2012 - 2015&emsp;</h3>
                    <span class="education__university">
                      Gauhati University&emsp;
                    </span>
                  </div>

                  <div class="education__time">
                    <span class="education__rounder"></span>
                    <span class="education__line"></span>
                  </div>

                  <div>
                    <h3 class="education__race">Bachelor Degree</h3>
                    <span class="education__speciality">
                      Bachelor of Computer Application
                    </span>
                  </div>
                </div>

                <div class="education__content">
                  <div>
                    <h3 class="education__year">2016- 2019&emsp;</h3>
                    <span class="education__university">
                      Dibrugarh University&emsp;
                    </span>
                  </div>

                  <div class="education__time">
                    <span class="education__rounder"></span>
                    <span class="education__line"></span>
                  </div>

                  <div>
                    <h3 class="education__race">Master Degree</h3>
                    <span class="education__speciality">
                      Master of Computer Application
                    </span>
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
            {/* <section class="project section">
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
                    </section> */}
            {/* Works */}
            <section class="works section" id="works">
              {/* <span class="section-subtitle">My portfolio</span> */}
              <h2 class="section-title">
                <b>Self projects</b>
              </h2>

              <div class="works__container bd-grid">
                <div class="works__img">
                  <img src={work1Img} alt="" />

                  <div class="works__data">
                    <a
                      href="https://github.com/rahul7007/MERN-AUTH-APP"
                      class="works__link"
                    >
                      <i class="bx bx-link-alt"></i>
                    </a>
                    <span class="works__title">Authentication App</span>
                  </div>
                </div>

                <div class="works__img">
                  <img src={work2Img} alt="" />

                  <div class="works__data">
                    <a
                      href="https://github.com/rahul7007/Python-Voice-Assistant"
                      class="works__link"
                    >
                      <i class="bx bx-link-alt"></i>
                    </a>
                    <span class="works__title">Voice Assistant</span>
                  </div>
                </div>

                <div class="works__img">
                  <img src={work3Img} alt="" />

                  <div class="works__data">
                    <a
                      href="https://github.com/rahul7007/Chat-App"
                      class="works__link"
                    >
                      <i class="bx bx-link-alt"></i>
                    </a>
                    <span class="works__title">Chat App</span>
                  </div>
                </div>

                <div class="works__img">
                  <img src={work4Img} alt="" />

                  <div class="works__data">
                    <a href="#" class="works__link">
                      <i class="bx bx-link-alt"></i>
                    </a>
                    <span class="works__title">Work in progress</span>
                  </div>
                </div>

                {/* <div class="works__img">
                    <img src={resume} alt="" />

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
              {/* <span class="section-subtitle">Contact Me</span> */}
              <h2 class="section-title">
                <b>Get in touch</b>
              </h2>

              <div class="contact__container bd-grid">
                <form action="" class="contact__form">
                  <div class="contact__inputs">
                    <input
                      type="text"
                      placeholder="Name*"
                      class="contact__input"
                      id="alias"
                      name="alias"
                      autoComplete="off"
                      onChange={this.onChange}
                      value={this.state.alias}
                    />
                    <input
                      type="mail"
                      placeholder="Email*"
                      class="contact__input"
                      id="email"
                      name="email"
                      autoComplete="off"
                      onChange={this.onChange}
                      value={this.state.email}
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Phone*"
                    class="contact__input"
                    id="phone"
                    name="phone"
                    autoComplete="off"
                    onChange={this.onChange}
                    value={this.state.phone}
                  />

                  <textarea
                    name="message"
                    id="message"
                    cols="0"
                    rows="10"
                    placeholder="Enter your message*"
                    class="contact__input"
                    onChange={this.onChange}
                    value={this.state.message}
                  >
                    {" "}
                  </textarea>

                  <input
                    type="submit"
                    value="Send Message"
                    class="button contact__button"
                    onClick={this.SendMessage}
                  />
                </form>

                <div>
                  <div class="contact__info">
                    <h3 class="contact__subtitle">Phone</h3>
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
                    <span class="contact__text">Assam, Guwahati-781016</span>
                    <span class="contact__text">India</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer class="footer section">
              <div class="footer__container bd-grid">
                <h1 class="footer__title">Rahul</h1>
                <p class="footer__description">
                  I am Rahul, this is my personal website.
                </p>

                <div class="footer__social">
                  <a
                    href="https://www.facebook.com/rahulspark77"
                    class="footer__link"
                  >
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/rahulsarma77/?hl=en"
                    class="footer__link"
                  >
                    <i class="bx bxl-instagram"></i>
                  </a>
                  <a
                    href="https://twitter.com/rahulsarma77"
                    class="footer__link"
                  >
                    <i class="bx bxl-twitter"></i>
                  </a>
                </div>

                <p class="footer__copy">Published on - 30-jan-2021</p>
              </div>
            </footer>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
