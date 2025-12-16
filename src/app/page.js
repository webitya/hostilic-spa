import HomeHero from "@/components/home/homeHero";
import HomeWellness from "@/components/home/homewellness";
import HomeGallery from "@/components/home/homegallery";
import HomeLocations from "@/components/locations/HomeLocations";
import AboutValues from "@/components/about/AboutValues";

export default function Home() {
  return (
    <div>

      <HomeHero />
      <HomeWellness />
      <HomeGallery />
      <HomeLocations />
      <AboutValues />
    </div>
  );
}
