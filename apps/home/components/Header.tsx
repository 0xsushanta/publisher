"use client"
import React, { useState, useEffect } from 'react';
import { Container } from './ui/Container';
import Button from './ui/Button';
import { Menu, X } from 'lucide-react';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-100 py-3' : 'bg-transparent py-5'}`}>
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-bold font-mono">P</div>
          <span className="text-lg font-bold tracking-tight text-zinc-900">Publisher</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">How it works</a>
          <a href="#features" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Features</a>
          <a href="#who-its-for" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Who it's for</a>
          <a href="#pricing" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Pricing</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <SignedOut>
            <SignInButton mode='modal'>
              <Button 
                variant="ghost" size="sm">Log in
              </Button>
            </SignInButton>
            <SignUpButton mode='modal'>
              <Button
                variant="primary" size="sm">Get Started
              </Button>
           </SignUpButton>
           </SignedOut>
        </div>

        <button 
          className="md:hidden p-2 text-zinc-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-100 p-4 shadow-lg flex flex-col gap-4">
          <a href="#how-it-works" className="text-sm font-medium text-zinc-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>How it works</a>
          <a href="#features" className="text-sm font-medium text-zinc-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#who-its-for" className="text-sm font-medium text-zinc-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Who it's for</a>
          <div className="h-px bg-zinc-100 my-2"></div>
          <Button variant="ghost" fullWidth onClick={() => setIsMobileMenuOpen(false)}>Log in</Button>
          <Button variant="primary" fullWidth onClick={() => setIsMobileMenuOpen(false)}>Get Started</Button>
        </div>
      )}
    </header>
  );
};

export default Header;