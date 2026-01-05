import React from 'react';
import { Container, Section } from './ui/Container';
import { Shield, Zap, Lock, Eye, History, Smartphone } from 'lucide-react';

const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: React.ElementType;
}> = ({ title, description, icon: Icon }) => (
  <div className="p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors duration-200 flex flex-col h-full">
    <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6">
      <Icon size={20} className="text-zinc-900" />
    </div>
    <h3 className="text-lg font-semibold text-zinc-900 mb-2">{title}</h3>
    <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <Section id="features">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-4">
            Built for peace of mind.
          </h2>
          <p className="text-zinc-500">
            We've removed the friction and the risk from your production pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            title="Creator Control"
            description="Nothing goes live without your explicit approval. You maintain full creative control over your channel."
            icon={Shield}
          />
          <FeatureCard 
            title="Zero-Touch Access"
            description="Editors never need your YouTube login credentials. They upload to Publisher, we handle the API handshake."
            icon={Lock}
          />
          <FeatureCard 
            title="Automated Publishing"
            description="Schedule videos to go live immediately upon approval or at a specific time. Set it and forget it."
            icon={Zap}
          />
          <FeatureCard 
            title="Review Player"
            description="Frame-accurate video player for reviewing edits before they hit your subscriber's feeds."
            icon={Eye}
          />
          <FeatureCard 
            title="Version History"
            description="Keep track of edit rounds. Access previous versions of video files whenever you need them."
            icon={History}
          />
          <FeatureCard 
            title="Mobile Ready"
            description="Approve videos on the go. Our mobile-optimized dashboard lets you manage your channel from anywhere."
            icon={Smartphone}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Features;