import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import BookingSection from "./components/Booking";
import ServicesPage from "./components/Services";
import ImageHero from "./components/ImageHero";
import QuickContact from "./components/QuickContact";
import FaqSection from "./components/FAQ";
import ContactFormSection from "./components/Contact";
import ImageStrip from "./components/ImageStrip";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <BookingSection slides={[
      {src: "/GreenNails.jpg", alt: "Nails 1"},
      {src: "/neutralanails_recirc-2d3a9cda11dd4d94be17a5fafff54880.jpg", alt: "Nails 1"},
      {src: "/purple.jpg", alt: "Nails 1"},
      ]} />
      <ServicesPage />
      <ImageHero
        src="/cup.png"
        alt="Nail set"
        height={650}
      />
      <QuickContact />
      <FaqSection />
      <ContactFormSection />
      <ImageStrip 
      images={[
        {src: "/IMG_9989.png", alt: "Nails photo 1"},
        {src: "/IMG_9990.png", alt: "Nails photo 2"},
        {src: "/IMG_9991.png", alt: "Nails photo 3"},
        {src: "/IMG_9993.png", alt: "Nails photo 4"},
        {src: "/IMG_9994.png", alt: "Nails photo 5"},
        {src: "/IMG_9995.png", alt: "Nails photo 6"},
      ]}
      />
    </div>
  )
}''