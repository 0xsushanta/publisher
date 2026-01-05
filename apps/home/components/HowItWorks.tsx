import React from 'react';
import { Container, Section } from './ui/Container';
import { UploadCloud, UserPlus, CheckSquare, Youtube } from 'lucide-react';

const Step: React.FC<{ 
  number: string; 
  title: string; 
  description: string; 
  icon: React.ElementType;
  isLast?: boolean;
}> = ({ number, title, description, icon: Icon, isLast }) => (
  <div className="relative flex gap-6 md:gap-10 group">
    {!isLast && (
      <div className="absolute top-12 left-6 w-px h-full bg-zinc-200 group-last:hidden md:block hidden"></div>
    )}
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center relative z-10 group-hover:border-zinc-900 group-hover:shadow-md transition-all duration-300">
        <Icon size={20} className="text-zinc-900" />
      </div>
    </div>
    <div className="pb-12 md:pb-16 flex-1">
      <span className="text-xs font-mono text-zinc-400 mb-2 block">{number}</span>
      <h3 className="text-xl font-semibold text-zinc-900 mb-3">{title}</h3>
      <p className="text-zinc-500 leading-relaxed max-w-md">{description}</p>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <Section id="how-it-works" className="bg-zinc-50/50 border-y border-zinc-100 relative overflow-hidden">
       {/* Background noise texture */}
      <div className="absolute inset-0 opacity-[0.4] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      
      <Container className="relative">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-32">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
              A workflow designed <br /> for trust and speed.
            </h2>
            <p className="text-lg text-zinc-500 mb-12 max-w-sm">
              Stop sharing Google Drive links and YouTube passwords. Publisher creates a secure bridge between raw footage and your published channel.
            </p>
            
            {/* Geometric Decoration */}
            <div className="hidden md:block relative w-full max-w-[320px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200/40 to-transparent rounded-full blur-3xl"></div>
              <svg viewBox="0 0 400 400" className="w-full h-full text-zinc-900/10 animate-[spin_60s_linear_infinite]" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" />
                 <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                 <circle cx="200" cy="200" r="199" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                 <path d="M200 0 V400 M0 200 H400" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                 
                 {/* Floating Elements */}
                 <rect x="180" y="20" width="40" height="40" stroke="currentColor" strokeWidth="1.5" transform="rotate(45 200 40)" />
                 <rect x="180" y="340" width="40" height="40" stroke="currentColor" strokeWidth="1.5" transform="rotate(45 200 360)" />
              </svg>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white border border-zinc-200 rounded-2xl shadow-sm flex items-center justify-center">
                 <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center">
                   <Youtube className="text-white" size={24} />
                 </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <Step 
              number="01"
              title="Upload Raw Video"
              description="Creators upload raw footage to a secure, private cloud bucket. No more WeTransfer limits."
              icon={UploadCloud}
            />
            <Step 
              number="02"
              title="Assign Editor"
              description="Invite editors to the project. They can download raw footage and upload their final edits directly to the platform."
              icon={UserPlus}
            />
            <Step 
              number="03"
              title="Review & Approve"
              description="Watch the final cut in our player. Leave timestamped comments or hit 'Approve' to lock the file."
              icon={CheckSquare}
            />
            <Step 
              number="04"
              title="Auto-Publish"
              description="Once approved, Publisher automatically uploads to YouTube via API with your title, description, and tags."
              icon={Youtube}
              isLast
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HowItWorks;