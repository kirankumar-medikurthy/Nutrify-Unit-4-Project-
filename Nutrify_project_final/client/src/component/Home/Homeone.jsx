import { React } from "react";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { VscListFlat } from "react-icons/vsc";
import "./styles.css"
export const Homepage = () => {
  return (
    <div>
      <div className="projectNutrifyblack"></div>
      <div className="projectNutrifysty1">
        <div className="projectNutrifya1">Nutrify</div>
        <div className="projectNutrifya2">
          <VscListFlat />
        </div>
      </div>
      <div className="projectNutrifysty2">
        <img
          className="projectNutrifyimg1"
          alt="Logo"
          src="/HomeOne/Apple_Black_1.png"
        />
        <div className="projectNutrifysty3">
          <p>Introducing...</p>
          <p className="projectNutrifyp1">Nutricon</p>
          <p>self tracking nutrition device</p>
          <div className="projectNutrifylogo2">
            Explore <FiArrowRight />
          </div>
        </div>
      </div>

      <div>
        <p className="projectNutrifyp2">
          Know your nutritional deficiency with a simple test
        </p>
        <button className="projectNutrifybtn2">TAKE A TEST</button>
      </div>

      <div className="projectNutrifydiv2">
        <p className="projectNutrifyp3">How Nutricon works?</p>
        <div className="projectNutrifyp4">
          Food is essential—it provides vital nutrients for survival, Nutrients
          have one or more of three basic functions: they provide energy,
          contribute to body structure, and/or regulate chemical processes in
          the body. These basic functions allow us to detect and respond to
          environmental surroundings, move, excrete wastes, respire (breath),
          grow, and reproduce.
        </div>
        <div>
          <img
            className="projectNutrifyimg2"
            alt="logo2"
            src="/HomeOne/nutriconWorks.png"
          />
        </div>
        <button className="projectNutrifybtn3">BOOK A FREE TRAIL</button>
      </div>

      <div>
        <p className="projectNutrifyp3">
          Improve your productivity by monitoring Nutri levels
        </p>
        <p className="projectNutrifyp4">
          Monitor nutrition is not complicated or difficult. What is more
          problematic is to monitor nutritional risk and to define the purpose
          or target for nutrition, especially in critically ill patients. The
          present analysis is designed to be useful for nutritional support for
          critically ill patients admitted to the ICU.
        </p>
      </div>

      <div className="projectNutrifydiv3">
        <img
          className="projectNutrifyimg3"
          alt="Logo"
          src="/HomeOne/drImage.png"
        />
        <p className="projectNutrifyvtitle">Dr Anna Stassie</p>
        <p className="projectNutrifyvtit2"> Nutritionist</p>
      </div>

      <div className="projectNutrifydiv4">
        <p className="projectNutrifyp3">Frequently asked questions</p>

        <div className="projectNutrifyquestion">
          <p className="projectNutrifyq">
            How Nutricon helps me
            ?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FiPlus />
          </p>
        </div>

        <div className="projectNutrifyquestion">
          <p className="projectNutrifyq">
            Diffrence in Nutrition &
            Productivity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FiPlus />
          </p>
        </div>

        <div className="projectNutrifyquestion">
          <p className="projectNutrifyq">
            Can multiple users share one device ?&nbsp;&nbsp;&nbsp;
            <FiPlus />
          </p>
        </div>

        <div className="projectNutrifyquestion">
          <p className="projectNutrifyq">
            How to connect Nutricon to mobile app?&nbsp;
            <FiPlus />
          </p>
        </div>

        <p className="projectNutrifyload">Load more...</p>
      </div>

      <div className="projectNutrifydiv5">
        <p className="projectNutrifyp3">Subscribe to us</p>

        <div className="projectNutrifyinput">
          <input className="projectNutrifyinp1" placeholder="Email Id" />
          <button className="projectNutrifybtn4">SEND</button>
        </div>

        <div className="projectNutrifylast">
          <div className="projectNutrifyleft">
            <p>About</p>
            <p>Testimonials</p>
            <p>Contact Us</p>
            <p>Information Security</p>
          </div>

          <div className="projectNutrifyright">
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
