import React from "react";
import CustomButton from "../components/Custombutton";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start mt-15 justify-center min-h-screen p-8 bg-[#11071F] text-white">
      <div className="lg:w-1/3 flex flex-col mr-8 items-center mb-8 lg:mb-0 max-w-115">
        <h1 className="text-4xl font-bold mb-4">Entre em contato comigo!</h1>
        <p className="text-lg leading-relaxed">
          Ficou interessado no meu trabalho ou quer trocar uma ideia sobre tecnologia? Sinta-se à vontade para entrar em contato! Estou sempre aberto a novas oportunidades e conexões.
        </p>

        <div className="flex justify-start">
          <a href="https://github.com/Emerzz35" target="_blank" rel="noopener noreferrer" className="mr-2">
            <CustomButton>
              <Image
                src="/Github-logo.png"
                alt="Logo do GitHub"
                width={100}
                height={20}
                className="w-auto h-5 md:h-6 mx-1"
              />
              Github
            </CustomButton>
          </a>

          <a href="https://www.linkedin.com/in/gustavo-silva465/" target="_blank" rel="noopener noreferrer" className="mr-2">
            <CustomButton>
              <Image
                src="/linkedin.png"
                alt="Logo do LinkedIn"
                width={100}
                height={20}
                className="w-auto h-5 md:h-6 mx-1"
              />
              Linkedin
            </CustomButton>
          </a>
        </div>
      </div>

      <div className="lg:w-1/3 bg-[#3A186A] p-6 rounded-lg shadow-lg">
      <form
        className="flex flex-col space-y-4"
        action="https://formspree.io/f/mldjbzvw"
        method="POST"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 rounded-lg bg-[#D3B4FF] text-black border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7127BA]"
            placeholder="Seu nome"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 rounded-lg bg-[#D3B4FF] text-black border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7127BA]"
            placeholder="Seu email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Mensagem</label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 h-32 rounded-lg bg-[#D3B4FF] text-black border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7127BA]"
            placeholder="Sua mensagem"
            required
          ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-[#7127BA] text-white py-2 rounded-lg hover:bg-[#5A1E96] transition"
  >
    Enviar Mensagem
  </button>
</form>

      </div>
    </div>
  );
};

export default Contact;
