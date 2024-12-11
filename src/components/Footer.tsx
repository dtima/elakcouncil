import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "./ui/separator";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-green-800 text-white py-8 md:py-12 mt-8 md:mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">Contact Information</h3>
            <div className="space-y-2">
              <p className="font-bold text-sm md:text-base">Elak Council</p>
              <div className="flex items-start gap-2 text-sm md:text-base">
                <MapPin className="h-4 w-4 mt-1" />
                <p>
                  P.O. Box 03 Elak Oku<br />
                  North West Region<br />
                  Bui Division
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Phone className="h-4 w-4" />
                <p>
                  (+237) 675957333<br />
                  (+237) 675730808
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Mail className="h-4 w-4" />
                <p>contact@elakcouncil.cm</p>
              </div>
              <p className="text-sm md:text-base">Monday - Friday: 8:15 AM - 5:00 PM</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="/government/meet-mayor" className="hover:underline">Meet the Mayor</a></li>
              <li><a href="/government/cabinet" className="hover:underline">The Mayor's Cabinet</a></li>
              <li><a href="/residents/directions" className="hover:underline">Directions to Council Hall</a></li>
              <li><a href="/visitors/getting-around" className="hover:underline">Getting Around – Visitors</a></li>
              <li><a href="/residents/public-safety" className="hover:underline">Public Safety</a></li>
              <li><a href="/residents/parks-recreation" className="hover:underline">Parks & Recreation</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">Council Details</h3>
            <p className="text-sm md:text-base">Established: 1977</p>
            <div className="space-y-2 text-sm md:text-base">
              <p>Population: Over 182,879</p>
              <p>Area: 750 km²</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#facebook" className="hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="#twitter" className="hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="#linkedin" className="hover:text-yellow-400 transition-colors">
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="#youtube" className="hover:text-yellow-400 transition-colors">
                <Youtube className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6 md:my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
          <p>Report Fraud: If you suspect fraud, waste, or abuse, please report it.</p>
          <p>Website Designed by DTIMA – Connecting People & Government</p>
        </div>
      </div>
    </footer>
  );
}