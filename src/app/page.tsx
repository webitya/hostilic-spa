import HomeHero from "@/components/home/homeHero";
import HomeWellness from "@/components/home/homewellness";
import HomeGallery from "@/components/home/homegallery";
import HomeWellnessServices from "@/components/home/homeservices";
import AboutValues from "@/components/about/AboutValues";

export default function Home() {
  return (
    <div>
      
      <HomeHero />
      <HomeWellness />
      <HomeGallery />
      <HomeWellnessServices />
      <AboutValues/>
    </div>
  );
}
