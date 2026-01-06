import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface SectionProps extends ChildrenProps {
  className?: string;
  id?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}
