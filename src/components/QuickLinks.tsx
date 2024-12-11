import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Building2, Wrench, FileCheck, Users, Receipt } from "lucide-react";
import { Button } from "./ui/button";

export function QuickLinks() {
  const { t } = useLanguage();

  const quickLinks = [
    { icon: <Users className="h-6 w-6 md:h-8 md:w-8" />, label: "Meet the Mayor", href: "/government/meet-mayor" },
    { icon: <Users className="h-6 w-6 md:h-8 md:w-8" />, label: "The Mayor's Cabinet", href: "/government/cabinet" },
    { icon: <Building2 className="h-6 w-6 md:h-8 md:w-8" />, label: "Directions to Council Hall", href: "/residents/directions" },
    { icon: <Wrench className="h-6 w-6 md:h-8 md:w-8" />, label: "Getting Around – Visitors", href: "/visitors/getting-around" },
    { icon: <FileCheck className="h-6 w-6 md:h-8 md:w-8" />, label: "Public Safety", href: "/residents/public-safety" },
    { icon: <Receipt className="h-6 w-6 md:h-8 md:w-8" />, label: "Parks & Recreation", href: "/residents/parks-recreation" },
  ];

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          {quickLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              asChild
              className="h-auto flex-col gap-2 md:gap-4 p-3 md:p-6 hover:bg-green-50"
            >
              <a href={link.href}>
                {link.icon}
                <span className="text-xs md:text-sm font-medium text-center">{link.label}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}