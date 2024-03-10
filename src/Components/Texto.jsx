export const Texto = ({discover, story, link}) => {
  return (
    <div className="Container-2">
      <h2 className="Title">{discover}</h2>
      <h3 className="Subtitle">{story}</h3>
      <p className="Text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        volaptatum dolor earum accusamus suscipit. Officia vitae excepturi
        deserunt nihil?
      </p>
      <br />
      <p className="Link">{link}</p>
    </div>
  );
};
