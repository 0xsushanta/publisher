import React from 'react';
import { Container, Section } from './ui/Container';
import Button from './ui/Button';

const Audience: React.FC = () => {
  return (
    <Section id="who-its-for" className="bg-zinc-900 text-white relative overflow-hidden">
      {/* Dark Grid Background */}
      <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">
          
          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2"></div>
          
          <div className="flex flex-col justify-center">
            <span className="text-zinc-400 font-mono text-sm mb-4 tracking-wider">FOR CREATORS</span>
            <h3 className="text-3xl font-bold mb-6">Protect your channel.</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Your channel is your business. Handing over the keys (passwords) is a massive security risk. Publisher lets you scale your team without expanding your attack surface.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Maintain 100% account security
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Streamline review workflows
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Automate metadata and publishing
              </li>
            </ul>
            <div>
              <Button variant="secondary" className="w-full md:w-auto">I'm a Creator</Button>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-zinc-400 font-mono text-sm mb-4 tracking-wider">FOR EDITORS</span>
            <h3 className="text-3xl font-bold mb-6">Focus on the edit.</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Stop chasing clients for 2FA codes or dealing with compressed WhatsApp approvals. Deliver high-quality work in a professional environment designed for video.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Professional delivery platform
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Clear approval status
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Portfolio-ready project history
              </li>
            </ul>
            <div>
              <Button variant="secondary" className="w-full md:w-auto">I'm an Editor</Button>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default Audience;