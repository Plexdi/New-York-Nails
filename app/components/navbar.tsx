import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-evenly items-center p-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold font-ponzu text-black">New York Nails</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        {/* generate button for booking */}
        <button className="bg-white text-white px-4 py-2 rounded-md border border-[#edb3ff] hover:bg-[#edb3ff] hover:text-white transition-all duration-300 cursor-pointer"><p className="text-black">Appointment</p></button>
      </div>
    </div>
  );
}