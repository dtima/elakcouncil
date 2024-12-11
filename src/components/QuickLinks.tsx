import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Building2, Wrench, FileCheck, Users, Receipt } from "lucide-react";
import { Button } from "./ui/button";

export function QuickLinks() {
  const { t } = useLanguage();

  const communalServices = [
    { icon: <FileText className="h-6 w-6 md:h-8 md:w-8 text-[#1EAEDB]" />, label: "Licenses & Permits", href: "/services/licenses" },
    { icon: <Building2 className="h-6 w-6 md:h-8 md:w-8 text-[#1EAEDB]" />, label: "Administrative Services", href: "/services/administrative" },
    { icon: <Wrench className="h-6 w-6 md:h-8 md:w-8 text-[#1EAEDB]" />, label: "Technical Services", href: "/services/technical" },
    { icon: <FileCheck className="h-6 w-6 md:h-8 md:w-8 text-[#1EAEDB]" />, label: "Birth Certificate Service", href: "/services/birth-certificate" },
    { icon: <Users className="h-6 w-6 md:h-8 md:w-8 text-[#1EAEDB]" />, label: "Social Affairs", href: "/services/social" },
    { icon: <Receipt className="h-6 w-6 md:h-8 md:w-8 text-[#1EAEDB]" />, label: "Communal Tax Service", href: "/services/tax" },
  ];

  return (
    <section className="py-8 md:py-16 bg-[#E5DEFF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8E9196] mb-2">
            Communal Services
          </h2>
          <div className="w-20 h-1 bg-[#1EAEDB] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          {communalServices.map((service, index) => (
            <Button
              key={index}
              variant="outline"
              asChild
              className="h-auto flex-col gap-2 md:gap-4 p-3 md:p-6 hover:bg-white/50 transition-all duration-300 border-[#D3E4FD] hover:border-[#1EAEDB]"
            >
              <a href={service.href}>
                {service.icon}
                <span className="text-xs md:text-sm font-medium text-center text-[#8E9196]">
                  {service.label}
                </span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}