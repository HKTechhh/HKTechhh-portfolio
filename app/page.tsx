import { CursorGlow } from "@/components/CursorGlow";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NavProvider, Views } from "@/components/NavProvider";

export default function Home() {
  return (
    <NavProvider>
      <CursorGlow />
      <Navbar />
      <Views />
      <Footer />
    </NavProvider>
  );
}
