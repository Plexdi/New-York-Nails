type FeatureCardProps = {
    title: string;
    description: string;
    icon: React.ReactNode; // lets you pass an SVG or an icon component
    highlighted?: boolean; // optional: for the “active”/glowy card
  };
  
  export default function FeatureCard({
    title,
    description,
    icon,
    highlighted = false,
  }: FeatureCardProps) {
    return (
      <div
        className={[
          "border border-pink-100 bg-white/40 p-6 backdrop-blur-sm md:p-8",
          highlighted ? "shadow-xl shadow-pink-200/40" : "shadow-sm",
        ].join(" ")}
      >
        <div className="mb-4 text-pink-300 md:mb-6">{icon}</div>
  
        <h3 className="font-serif text-base tracking-wide text-neutral-900 md:text-lg">
          {title}
        </h3>
  
        <p className="mt-2 text-xs leading-5 text-neutral-600 md:mt-3 md:text-sm md:leading-6">
          {description}
        </p>
      </div>
    );
  }
  