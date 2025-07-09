import HomeHero from "@/components/home/homeHero";
import HomeWellness from "@/components/home/homewellness";
import HomeGallery from "@/components/home/homegallery";
import HomeWellnessServices from "@/components/home/homeservices";

export default function Home() {
  return (
    <div>
      
      <HomeHero />
      <HomeWellness />
      <HomeGallery />
      <HomeWellnessServices />
    </div>
  );
}
