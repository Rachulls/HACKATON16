import square1 from "../img/square-1.jpg";
import square2 from "../img/square-2.jpg";
import square3 from "../img/square-3.jpg";
import square4 from "../img/square-4.jpg";
import "./Explore.css";
import { Texto } from "./Texto";

export const Explore = () => {
  return (
    <section>
      <div className="Container-3">
        <div className="Image-Square">
          <img className="Image-Item" src={square1} />
          <img className="Image-Item" src={square2} />
          <img className="Image-Item" src={square3} />
          <img className="Image-Item" src={square4} />
        </div>
        <Texto discover = {'Explore'} story = {'Menu'} link = {'See full menu'}/>
      </div>
    </section>
  );
};
