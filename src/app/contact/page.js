import CONTACTFORM from "@/components/contact/contactform";
import Contactdet from "@/components/contact/contactdetails";
import PartnershipProgram from "@/components/contact/contactpartner";

export default function ContactPage() {
  return (
    <div className="bg-[#fdf3e9] min-h-screen mt-20">
      {/* Flex container for form + contact info */}
      <div className="flex flex-wrap gap-8 justify-center items-start p-8">
        <div className="flex-1 min-w-[300px] max-w-[600px]">
          <CONTACTFORM />
        </div>

        <div className="flex-1 min-w-[250px] max-w-[400px]">
          <Contactdet />
        </div>
      </div>

      {/* Partnership section */}
      <PartnershipProgram />
    </div>
  );
}
