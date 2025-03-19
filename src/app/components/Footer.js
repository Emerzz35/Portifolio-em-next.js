const Footer = () => {
    return (
      <footer className="bg-[#1A0B2E] text-white text-center p-4 mt-10">
        <div className="container mx-auto">
          <p className="text-sm">&copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://github.com/Emerzz35" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/gustavo-silva465/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">LinkedIn</a>
            <a href="https://www.alterdata.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">Alterdata</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  