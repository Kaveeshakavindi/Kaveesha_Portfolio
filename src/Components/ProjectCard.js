import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import "../Sections/Projects/projects.css";
export const ProjectCard = ({ project, onPrev, onNext }) => {
  return (
    <div className="project-card-container">
      <img src={project.main_image} className="project-main-img" />
      <div className="container-2">
        <div>
          <div className="project-title">{project.title}</div>
          <div className="project-categories">
            {project.categories.map((category, index) => (
              <div key={index}>
                {category}
                {index != project.categories.length - 1 ? ", " : ""}
              </div>
            ))}
          </div>
          <button className="button-1">
            <a href={project.link} style={{ color: "var(--color-3)" }}>
              View Project
            </a>
          </button>
        </div>
        <div className="project-card-sub">
          <div className="container-3">
            <div
              style={{
                color: "var(--color-2)",
                minHeight: "100px",
                overflow: "auto",
              }}
            >
              {project.description}
            </div>
            <div style={{ display: "flex", gap: "1rem", padding: "1rem 0" }}>
              <button
                onClick={onPrev}
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "solid 0.1px var(--true-color)",
                  backgroundColor: "var(--glass-bg)",
                  color: "var(--true-color)",
                  borderRadius: "100px",
                  padding: "0.5rem",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                <IoIosArrowRoundBack />
              </button>
              <button
                onClick={onNext}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  border: "solid 0.1px var(--true-color)",
                  backgroundColor: "var(--glass-bg)",
                  color: "var(--true-color)",
                  borderRadius: "100px",
                  padding: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <img
              src={project.sub_image}
              style={{
                width: "25vh",
                objectFit: "cover",
                borderRadius: "8px",
                backgroundColor: "blue",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
