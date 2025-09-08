// src/components/Navbar.js



import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ou Nome do Site */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 text-white hover:text-teal-400 transition duration-300 ease-in-out"
        >
          {/* Se tiver uma imagem de logo */}
          { <Image
            src="/images/logo.png"
            alt="Logo Hotel HDS"
            width={40}
            height={40}
            className="rounded-full"
          /> }
          {/* Ou texto estilizado como logo */}
          <span className="text-3xl font-extrabold tracking-tight">Hotel HDS</span>
        </Link>

        {/* Botão do Menu Hambúrguer (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Links de Navegação (Desktop) */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link 
              href="/" 
              className="text-white hover:text-teal-400 transition duration-300 ease-in-out"
            >
              Início
            </Link>
          </li>
          <li>
            <Link 
              href="/hoteis" 
              className="text-white hover:text-teal-400 transition duration-300 ease-in-out"
            >
              Hotéis
            </Link>
          </li>
          <li>
            <Link 
              href="/reservas" 
              className="text-white hover:text-teal-400 transition duration-300 ease-in-out"
            >
              Minhas Reservas
            </Link>
          </li>
          <li>
            <Link 
              href="/contato" 
              className="text-white hover:text-teal-400 transition duration-300 ease-in-out"
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-3 text-lg">
            <li>
              <Link 
                href="/" 
                className="block text-white hover:text-teal-400 transition duration-300 ease-in-out py-2 px-3 rounded"
              >
                Início
              </Link>
            </li>
            <li>
              <Link 
                href="/hoteis" 
                className="block text-white hover:text-teal-400 transition duration-300 ease-in-out py-2 px-3 rounded"
              >
                Hotéis
              </Link>
            </li>
            <li>
              <Link 
                href="/reservas" 
                className="block text-white hover:text-teal-400 transition duration-300 ease-in-out py-2 px-3 rounded"
              >
                Minhas Reservas
              </Link>
            </li>
            <li>
              <Link 
                href="/contato" 
                className="block text-white hover:text-teal-400 transition duration-300 ease-in-out py-2 px-3 rounded"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}