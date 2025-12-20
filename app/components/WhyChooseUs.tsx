import FeatureCard from "./Card";
import { FaUser } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <div id="about" className="flex flex-col items-center justify-center mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="w-full">
            <h1 className="text-2xl font-bold py-4 text-center font-serif sm:text-3xl md:text-4xl md:py-6">Why Choose Us</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                <FeatureCard title="Experience" description="We are a team of experienced nail technicians who are dedicated to providing the best possible service to our clients." icon={<FaUser />} />
                <FeatureCard title="Premium Products" description="We use only the best products in the industry to ensure the best possible service to our clients." icon={<FaUser />} />
                <FeatureCard title="Relaxing Atmosphere" description="We provide a relaxing atmosphere to ensure our clients are comfortable and enjoy their time with us." icon={<FaUser />} />
                <FeatureCard title="Luxury Experiments" description="We offer a variety of luxury experiments to ensure our clients are satisfied with their time with us." icon={<FaUser />} />
            </div>
        </div>
    </div>
  );
}