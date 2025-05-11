import skillsImg from "../../assets/images/skills.png";
import "./Skillset.css";
export const Skillset = () => {
  return (
    <div className="wrapper">
      <img
        src={skillsImg}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
          maxWidth: "900px",
        }}
        alt="skills"
      />
    </div>
  );
};
