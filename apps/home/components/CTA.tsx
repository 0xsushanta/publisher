import React from 'react';
import { Container, Section } from './ui/Container';
import Button from './ui/Button';

const CTA: React.FC = () => {
  return (
    <Section className="relative bg-zinc-50 overflow-hidden">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(#a1a1aa_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_100%,transparent_100%)]"></div>

      <Container className="relative z-10">
        <div className="bg-white rounded-3xl border border-zinc-200 p-8 md:p-16 text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden group hover:border-zinc-300 transition-colors">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
            Ready to streamline your channel?
          </h2>
          <p className="text-lg text-zinc-500 mb-10 max-w-2xl mx-auto">
            Join thousands of creators and editors who trust Publisher for their secure workflow. Start for free today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto min-w-[160px] shadow-lg shadow-zinc-200">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[160px]">
              Contact Sales
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CTA;