import React from 'react';
import { Container } from './ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 py-12 md:py-24">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white text-xs font-bold font-mono">P</div>
              <span className="text-base font-bold text-zinc-900">Publisher</span>
            </div>
            <p className="text-zinc-500 text-sm">
              The standard for secure video collaboration.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4 text-sm">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Publisher Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
             {/* Social placeholders */}
             <div className="w-5 h-5 bg-zinc-200 rounded-full opacity-50"></div>
             <div className="w-5 h-5 bg-zinc-200 rounded-full opacity-50"></div>
             <div className="w-5 h-5 bg-zinc-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;