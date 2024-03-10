import baker1 from "../img/bakers-delight-1.jpg";
import baker2 from "../img/bakers-delight-2.jpg";
import "./Bakers.css";
import { Texto } from "./Texto";

export const Bakers = () => {
  return (
    <section>
      <div className="Container-5">
        <Texto discover = {"Baker's"} story = {'DELIGHT'} link = {'MAKE A RESERVATION'}/>
        <div className="Image-Square-2">
          <img className="Image-Item" src={baker1} />
          <img className="Image-Item" src={baker2} />
        </div>
      </div>
    </section>
  );
};
