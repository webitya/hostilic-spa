import AboutHero from "@/components/about/abouthero";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutValues from "@/components/about/AboutValues";
import AboutServiceArea from "@/components/about/aboutmanagement.jsx";
export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutServiceArea />
      <AboutVisionMission />
      <AboutValues />
    </div>
  );
}