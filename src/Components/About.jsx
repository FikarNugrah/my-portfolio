import "../Style/About.css";
import tailwind from "../Assets/tailwind.png";
import js from "../Assets/js.png";
import bootstrap from "../Assets/bootstrap.png";
import react from "../Assets/reactjs.png";
import ui from "../Assets/logo.png";
import { useState } from "react";

export default function About() {
  const [isToggled, setIsToggled] = useState(false);
  const [card1, setCard1] = useState(true);
  const [card2, setCard2] = useState(true);

  const btnStdn = () => {
    setIsToggled(!isToggled);
    if (card2) {
      setCard2(false);
    } else
      setTimeout(() => {
        setCard2(true);
      }, 700);
  };
  const btnDev = () => {
    setIsToggled(!isToggled);
    if (card1) {
      setCard1(false);
    } else
      setTimeout(() => {
        setCard1(true);
      }, 700);
  };

  return (
    <div className="about-content" id="about">
      <div className="intro-about">
        <h1>Welcome to my Portfolio</h1>
        <h3>I am here, to introduce :</h3>
      </div>
      <div className={isToggled ? "job-about job-about-re-size " : "job-about"}>
        {card1 && (
          <div
            className={isToggled ? "a-student re-size " : "a-student card1"}
            onClick={btnStdn}
            id="stdn"
          >
            <h3>I am a Student</h3>
            <p>
              Hello, my name is <span>Yafikar Nugrahh paskah Gulo</span>, I'm 18
              years old, I live in Sumatra, Riau Province, Pekanbaru City, my
              address is at Jl. Rowo Bening Stage? blocks? , and at this time I
              sat on the bench class 3 at SMK FINANCE Pekanbaru Jl. Gulama, I
              took the field Computer Network Engineering or also known as (TKJ)
            </p>
          </div>
        )}
        {card2 && (
          <div
            className={isToggled ? "a-devoloper re-size " : "a-devoloper card2"}
            onClick={btnDev}
            id="webdev"
          >
            <h3>I am a Web Devoloper </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit aliquid minus corrupti earum, labore doloribus
              ducimus eius odio amet tempore necessitatibus voluptates magnam?
              Repellat veritatis maiores at dolor ullam ad?
            </p>
          </div>
        )}
      </div>
      <div className="hobies-area">
        <h2>My Hobies</h2>
        <div className="hobies">
          <div className="guitar">
            <i class="fa-solid fa-guitar"></i>
            <p>Guitaris</p>
          </div>
          <div className="ngoding">
            <i class="fa-solid fa-code"></i>
            <p>Ngoding</p>
          </div>
          <div className="music">
            <i class="fa-solid fa-music"></i>
            <p>Music</p>
          </div>
          <div className="voli">
            <i class="fa-solid fa-volleyball"></i>
            <p>Volley</p>
          </div>
        </div>
      </div>
      <div className="my-app">
        <h2>my daily software</h2>
        <div className="app-area">
          <div className="app">
            <a href="https://tailwindcss.com/">
              <img src={tailwind} alt="tailwind" />
            </a>
            <p>Tailwind CSS</p>
          </div>
          <div className="app">
            <a href="https://www.javascripttutorial.net/">
              <img src={js} alt="java script" />
            </a>
            <p>java Script</p>
          </div>
          <div className="app">
            <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/">
              <img className="btstp" src={bootstrap} alt="bootstrap" />
            </a>
            <p>Bootstrap</p>
          </div>
          <div className="app">
            <a href="https://react-bootstrap.netlify.app/">
              <img src={react} alt="reacr js" />
            </a>
            <p>React Js</p>
          </div>
          <div className="app">
            <a href="https://mui.com/material-ui/">
              <img src={ui} alt="material ui" />
            </a>
            <p>Material UI</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
