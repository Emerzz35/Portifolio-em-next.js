import CustomButton from "../components/Custombutton";

const Skills = () => {
  const skills = ["PHP", "JavaScript", "TypeScript", "React", "Next.js", "SQL", "Delphi", "Laravel","Pervasive","SQLServer", "Firbird","Postgres","Tailwindcss","bootstrap","Java","Inglês","HTML","CSS","POO","Git","Gitflow","Figma"];
  
  return (
    <section className="flex justify-center items-center min-h-[80vh] p-6">
      <main className="bg-[#3A186A] text-white rounded-xl p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-center mb-6">Minhas habilidades!</h1>
        
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <p className="text-lg md:flex-1 mt-6 md:mt-0">
            Ao longo da minha jornada, tive contato com diversas linguagens, frameworks e bancos de dados. Possuo experiência em desenvolvimento com Delphi e SQL, além de conhecimentos em diversas tecnologias utilizadas no desenvolvimento web e de software. Estou sempre explorando novas ferramentas para expandir minhas habilidades.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          {skills.map((skill) => (
            <CustomButton key={skill}>{skill}</CustomButton>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Skills;
