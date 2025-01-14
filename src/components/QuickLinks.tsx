import { useLanguage } from "@/contexts/LanguageContext";
import { 
  FileText, 
  Building2, 
  Wrench, 
  BabyIcon, 
  Users, 
  Receipt, 
  CreditCard 
} from "lucide-react";

interface QuickLinkItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

const QuickLinkItem = ({ icon, title, description, href }: QuickLinkItemProps) => {
  const baseClasses = "p-6 flex flex-col items-center text-center transition-all duration-200 rounded-lg bg-white shadow-sm hover:shadow-md";
  
  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseClasses} cursor-pointer`}
      >
        <div className="mb-4 text-purple-600">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </a>
    );
  }

  return (
    <div className={`${baseClasses} cursor-default`}>
      <div className="mb-4 text-purple-600">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export function QuickLinks() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Licenses & Permits",
      description: "Apply for various licenses and permits",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Administrative Services",
      description: "Access administrative services and support",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Technical Services",
      description: "Get technical assistance and guidance",
    },
    {
      icon: <BabyIcon className="w-8 h-8" />,
      title: "Birth Certificate Service",
      description: "Request and process birth certificates",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Affairs",
      description: "Access social services and community support",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Communal Tax Service",
      description: "Pay and manage communal taxes",
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            Communal Services
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 transform -translate-y-2"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <QuickLinkItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}