import "./Always.css";

export const Banner = ({always, fresh, imagenes}) => {
    return (
      <section className={`description ${imagenes}`}>
            <h2 className="Title">{always}</h2>
            <h3 className="Subtitle">{fresh}</h3>
      </section>
    );
  };