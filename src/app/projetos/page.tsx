import ProjectCard from "../components/ProjectCard";

const Projetos = () => {
  return (
    <section className="flex justify-center items-center min-h-[80vh] p-6">
      <main className="bg-[#3A186A] text-white rounded-xl p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-center mb-6">Meus projetos!</h1>
        
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <p className="text-lg md:flex-1 mt-6 md:mt-0">
            Aqui estão alguns dos projetos que desenvolvi, aplicando meus conhecimentos em diversas tecnologias. Cada um deles representa um aprendizado e um desafio superado ao longo da minha jornada.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <ProjectCard
          src="/project-image-1.jpg"
          technologies="Laravel Bootstrap SQlite"
          title="Delta Jogos"
          subtitle="Uma Loja baseada na Steam"
          githubLink="https://github.com/Emerzz35/Projeto-Delta"
          youtubeLink="https://www.youtube.com/watch?v=o6eY63iBf8U"
        />
          <ProjectCard
          src="/project-image-2.jpg"
          technologies="Laravel"
          title="Pride Path"
          subtitle="Busca de emprego para comunidade LGBTQIAPN+"
          githubLink="https://github.com/Emerzz35/Pride-Path"
          youtubeLink=""
        />
        <ProjectCard
          src="/project-image-3.jpg"
          technologies="Next.js"
          title="Portifolio"
          subtitle="Esse que você esta vendo agora"
          githubLink="https://github.com/Emerzz35/Portifolio-em-next.js"
          youtubeLink=""
        />
        </div>
      </main>
    </section>
  );
};

export default Projetos;
