// src/components/layout/Layout.js

import React from 'react';
import Navbar from '../Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* Aqui podemos adicionar um Footer mais tarde */}
    </>
  );
}