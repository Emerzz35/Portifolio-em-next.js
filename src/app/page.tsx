import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-white px-6 md:px-20">
      <div className="flex flex-col justify-center md:flex-row items-center text-center md:text-left w-full max-w-5xl">
      <div className="w-44 h-44 md:w-64 md:h-64 relative flex flex-col items-center justify-center"> 
        <div className="w-40 h-40 md:w-60 md:h-60 relative">
          <Image 
            src="/perfil.png" 
            alt="Designed by  / Freepik"
            layout="fill" 
            objectFit="cover"
            className="rounded-lg"
          />
          </div>
          <a href="http://www.freepik.com" target="_blank">Designed by  / Freepik</a>
        </div>      
        <div className="ml-0 md:ml-6 mt-4 md:mt-0 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-4xl font-bold">Olá!<br />Eu sou a <span className="text-[#7127BA]">Gustavo</span></h1>
          <h2 className="text-xl md:text-xl mt-2">Gosto de aprender coisas novas</h2>
        </div>
      </div>
      <div className="text-center md:text-center mt-12 w-full max-w-4xl">
        <h1 className="text-2xl md:text-4xl font-bold">Eu sou um desenvolvedor full-stack |</h1>
        <h2 className="text-lg md:text-xl flex items-center justify-center mt-2">
          Atualmente trabalhando como dev na 
          <Image 
            src="/alterdata-logo.png" 
            alt="Logo da Alterdata"
            width={100}
            height={20}
            className="mx-2 w-auto h-5 md:h-6"
          />
          <Link href="https://www.alterdata.com.br" target="_blank">
            <span className="text-[#006199] font-bold hover:underline">Alterdata Software</span>
          </Link>
        </h2>
        
        <p className="text-lg md:text-lg mt-4 max-w-3xl mx-auto">
          Desenvolvedora em formação, apaixonada por tecnologia e sempre explorando novas ferramentas. No último semestre de Sistemas para Internet, tenho experiência com diversas linguagens e frameworks.
        </p>
        <Link href="/sobre" className="inline-block mt-6 text-[#7127BA] font-semibold text-lg md:text-xl hover:underline">
          Veja Mais
        </Link>
      </div>
    </section>
  );
};

export default Home;