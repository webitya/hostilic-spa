// app/ayurvedic-panchkarma/page.js
"use client";

import PanchkarmaIntro from "@/components/ayurvedic/PanchkarmaIntro";
// import Ayurvedicoiltheraphy from "@/components/ayurvedic/AyurvedicOilTherapies";
// import Potlitherapic from "@/components/ayurvedic/KizhiAndPotliTherapies";
// import Detoxmassage from "@/components/ayurvedic/UdwarthanamDetoxMassage";
import Vastitherapie from "@/components/ayurvedic/VastiTherapies";

export default function AyurvedicPanchkarmaPage() {
  return (
    <main >
      <PanchkarmaIntro />
      {/* <Ayurvedicoiltheraphy /> */}

      <Vastitherapie />
    </main>
  );
}