import { React } from "react";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { VscListFlat } from "react-icons/vsc";
import "./styles.css"
export const Homepage = () => {
  return (
    <div>
      <div className="black"></div>
      <div className="sty1">
        <div className="a1">Nutrify</div>
        <div className="a2">
          <VscListFlat />
        </div>
      </div>
      <div className="sty2">
        <img
          className="img1"
          alt="Logo"
          src="/HomeOne/Apple_Black_1.png"
        />
        <div className="sty3">
          <p>Introducing...</p>
          <p className="p1">Nutricon</p>
          <p>self tracking nutrition device</p>
          <div className="logo2">
            Explore <FiArrowRight />
          </div>
        </div>
      </div>

      <div>
        <p className="p2">
          Know your nutritional deficiency with a simple test
        </p>
        <button className="btn2">TAKE A TEST</button>
      </div>

      <div className="div2">
        <p className="p3">How Nutricon works?</p>
        <div className="p4">
          Food is essential—it provides vital nutrients for survival, Nutrients
          have one or more of three basic functions: they provide energy,
          contribute to body structure, and/or regulate chemical processes in
          the body. These basic functions allow us to detect and respond to
          environmental surroundings, move, excrete wastes, respire (breath),
          grow, and reproduce.
        </div>
        <div>
          <img
            className="img2"
            alt="logo2"
            src="/HomeOne/nutriconWorks.png"
          />
        </div>
        <button className="btn3">BOOK A FREE TRAIL</button>
      </div>

      <div>
        <p className="p3">
          Improve your productivity by monitoring Nutri levels
        </p>
        <p className="p4">
          Monitor nutrition is not complicated or difficult. What is more
          problematic is to monitor nutritional risk and to define the purpose
          or target for nutrition, especially in critically ill patients. The
          present analysis is designed to be useful for nutritional support for
          critically ill patients admitted to the ICU.
        </p>
      </div>

      <div className="div3">
        <img
          className="img3"
          alt="Logo"
          src="/HomeOne/drImage.png"
        />
        <p className="vtitle">Dr Anna Stassie</p>
        <p className="vtit2"> Nutritionist</p>
      </div>

      <div className="div4">
        <p className="p3">Frequently asked questions</p>

        <div className="question">
          <p className="q">
            How Nutricon helps me
            ?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FiPlus />
          </p>
        </div>

        <div className="question">
          <p className="q">
            Diffrence in Nutrition &
            Productivity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FiPlus />
          </p>
        </div>

        <div className="question">
          <p className="q">
            Can multiple users share one device ?&nbsp;&nbsp;&nbsp;
            <FiPlus />
          </p>
        </div>

        <div className="question">
          <p className="q">
            How to connect Nutricon to mobile app?&nbsp;
            <FiPlus />
          </p>
        </div>

        <p className="load">Load more...</p>
      </div>

      <div className="div5">
        <p className="p3">Subscribe to us</p>

        <div className="input">
          <input className="inp1" placeholder="Email Id" />
          <button className="btn4">SEND</button>
        </div>

        <div className="last">
          <div className="left">
            <p>About</p>
            <p>Testimonials</p>
            <p>Contact Us</p>
            <p>Information Security</p>
          </div>

          <div className="right">
            <p>Blog</p>
            <p>Refund Policy</p>
            <p>Help Center</p>
            <p>Warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
};
