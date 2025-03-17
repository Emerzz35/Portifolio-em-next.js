'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1A0B2E] text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Meu Portfólio</h1>
        <nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          <ul
            className={`absolute md:static bg-[#1A0B2E] w-full left-0 md:flex md:space-x-6 md:items-center md:w-auto p-4 md:p-0 transition-all duration-300 ease-in-out ${
              isOpen ? 'top-16' : '-top-96'
            } md:top-auto`}
          >
            {['Home', 'Sobre', 'Skills', 'Projetos', 'Contato'].map((item) => (
              <li key={item} className="text-center py-2 md:py-0">
                <Link href={`/${item.toLowerCase()}`} className="hover:text-gray-300 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
