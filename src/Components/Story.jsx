import image2 from "../img/story-img.jpg";
import "./Story.css";
import { Texto } from "./Texto";

export const Story = () => {
  return (
    <section>
      <div className="Contain-2">
        <Texto discover = {'Discover'} story = {'Our story'} link = {'Learn More'} />
        <div>
          <img className="Image-2" src={image2} />
        </div>
      </div>
    </section>
  );
};
