// src/components/layout/Layout.js
"use client";

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