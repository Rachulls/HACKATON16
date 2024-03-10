import image1 from "../img/hero-bg.jpg";

export const Header = () => {

  return (
    <section>
      <img className="Image-1" src={image1} />
      <div className="Container">
        <div className="Navigation">
          <h2>Bakery</h2>
          <div className="List">
            <ul className="List-Elements">
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>RESERVATION</li>
              <li>BAKERS</li>
            </ul>
          </div>
        </div>
        <div className="Title-Contain">
          <h1>LET'S TASTE PERFECTION</h1>
          <button type="button" className="Order">
            ORDER NOW
          </button>
        </div>
      </div>
    </section>
  );
};
