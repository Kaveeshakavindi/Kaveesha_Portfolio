import "../Sections/Projects/projects.css";

export const ProjectCard = ({ project }) => {
  return (
    <div className="flex p-4 border border-white/10 my-4 rounded-lg ">
      <div className="w-[200px] h-[48px] flex-shrink-0 overflow-hidden rounded">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pl-4">
        <div className="text-m text-white">{project.title}</div>
        <div className="text-white/40 text-sm text-balance">{project.description}</div>
        <button className="text-xs my-2" style={{border: 'solid 1px var(--color-3) ', padding: '4px 10px', borderRadius:10}}>
          <a href={project.link} style={{ color: "var(--color-3)" }}>
            View Project
          </a>
        </button>

      </div>
    </div>
  );
};
