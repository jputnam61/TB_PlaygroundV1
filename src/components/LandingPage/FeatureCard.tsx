import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent';
}

export function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
  return (
    <div className={`bg-card/40 backdrop-blur-sm p-6 rounded-lg border border-border/40 hover:border-${color}/50 hover:bg-card/50 transition-all`}>
      <Icon className={`h-8 w-8 mb-4 text-${color}`} />
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}