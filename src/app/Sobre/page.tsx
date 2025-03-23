import Image from 'next/image';

const Sobre = () => {
  return (
    <section className="flex justify-center items-center min-h-[80vh] p-6">
      <main className="bg-[#3A186A] text-white rounded-xl p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-center mb-6">Sobre mim!</h1>
        
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <div className="w-50 h-50 md:w-66 md:h-66 relative mb-6 md:mb-0 md:mr-8 flex flex-col items-center justify-bottom">
            <div className="w-48 h-48 md:w-64 md:h-64 relative">
              <Image 
                src="/perfil2.png" 
                alt="Designed by  / Freepik"
                width={256}
                height={256}
                className="rounded-lg"
              />
            </div>
            <a href="http://www.freepik.com" target="_blank" className='mt-8'>Designed by  / Freepik</a>
          </div>
          <p className="text-lg md:flex-1 mt-6 md:mt-0">
            Minha jornada na tecnologia começou com o desejo constante de aprender e evoluir. Iniciei meus estudos de inglês no Kumon, o que me ajudou a expandir minhas possibilidades no mundo da TI. Em seguida, me formei no Ensino Médio Técnico em TI pelo SENAC, onde tive meu primeiro contato mais aprofundado com programação e infraestrutura. Atualmente, estou no último semestre do curso de Tecnologia em Sistemas para Internet, também pelo SENAC, aprimorando minhas habilidades em desenvolvimento web e outras áreas da computação.
          </p>
        </div>
        
        <p className="text-lg mt-6">
          Atualmente, trabalho na Alterdata Software, onde atuo como desenvolvedor utilizando Delphi e SQL. Tenho experiência com diversos bancos de dados, incluindo Firebird, PostgreSQL e SQL Server. Estou sempre explorando novas tecnologias e buscando evoluir como profissional na área de desenvolvimento.
        </p>
      </main>
    </section>
  );
};

export default Sobre;
