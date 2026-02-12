// import "../styles/section.css"

// const SkillsPreview = () => {
//   return (
//     <section className="section">
//       <h1>My skills</h1>

//       <h3>•HTML</h3>
//       <h3>•CSS</h3>
//     </section>
//   );
// };

// export default SkillsPreview;


import "../styles/section.css";
import "../styles/skills.css";

// const skills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Node.js",
//   "MongoDB",
//   "Git",
//   "GitHub",
// ];

const skills = [
  { name: "", image: "/skills/Html.webp" },
  { name: "", image: "/skills/CSS.webp" },
  { name: "", image: "/skills/Java.webp" },
  { name: "", image: "/skills/React.webp" },
  { name: "", image: "/skills/Node.webp" },
  { name: "", image: "/skills/mongo.webp" },
  { name: "", image: "/skills/Git.webp" },
];


const Skills = () => {
  return (
    <section className="section">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card"
          style={{backgroundImage:`url(${skill.image})`}}
          >
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
