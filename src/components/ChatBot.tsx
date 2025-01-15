import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";

const faqs = [
  {
    question: "Where is Elak Council located?",
    answer: "Elak Council is found in Bui Division of the North West Region of Cameroon. It is bounded to the North by Nkor municipality, to the South by Babessi municipality, to the East by Jakiri municipality and to the West by Belo Municipality. The municipality has a total surface area of 750 km2 with an estimated population of 200,000 inhabitants.",
  },
  {
    question: "When was Elak Council created?",
    answer: "The Elak Council was created by Presidential Decree No. 77/203 of 19 June 1977 as a split from the Nso Council. It started functioning in 1978.",
  },
  {
    question: "Who is the current Lord Mayor of Elak council?",
    answer: "Mr. Ngum Jerome Njioh is the current Lord Mayor of Elak Council. He is serving his 3rd term as Lord Mayor.",
  },
  {
    question: "How can I obtain a Birth Certificate from Elak council?",
    answer: "For children 0-3 months: Bring the hospital birth card and photocopies of parents' ID cards/birth certificates to the council. The certificate is issued free of charge within 90 days from birth. For births over 90 days old, a declaratory judgment from court is required. For births outside hospitals, a declaration from the village head or competent authority is needed.",
  },
  {
    question: "How can I obtain a Marriage Certificate?",
    answer: "A marriage is celebrated by the Civil status registrar after one month from registration. Required documents include: photocopies of birth certificates and ID cards of spouses, ID cards of parents and witnesses, death certificate of deceased spouse (if applicable), divorce judgment (if applicable), and certificates of celibacy. Express marriages require a waiver from the state counsel.",
  },
  {
    question: "What are the tourist attractions in Elak?",
    answer: "Elak municipality features numerous attractions including: Mount Oku (second highest in West Africa), Kilum mountain forest reserve, Lake Oku, multiple waterfalls (Tolon, Kenshing, Enfwe, Tankon, Mbancham, Kedse), Oku Fon's palace, Cultural and touristic centre, Oku honey cooperative, various caves, and rich cultural heritage including traditional dances and ceremonies.",
  },
  {
    question: "How can I invest in Elak Municipality?",
    answer: "Elak Municipality offers investment opportunities across primary, secondary, and tertiary sectors. The council welcomes partnerships in agricultural product transformation, handicraft, education, health, tourism, energy, commerce, and manufacturing industries. Contact the council with your investment plan or business model for collaboration.",
  },
  {
    question: "What types of taxes does the council collect?",
    answer: "The council collects various taxes including: Global tax, Liquor license, Business license, Property tax, Cattle tax, Hygiene tax, Market fees, Building permits, Parking tax, Entertainment tax, Advertisement tax, Council stamp duties, Water maintenance fee, and other indirect council taxes.",
  },
  {
    question: "How can I obtain a shop in Elak main market?",
    answer: "Submit a handwritten application to the Lord Mayor with your ID copy and intended business type. Upon approval, pay the specified development fee, sign a Tenancy Agreement Form for ground rent payments, and receive your assigned numbered shed.",
  },
  {
    question: "What services does Elak Council offer?",
    answer: "Elak Council offers various services including: Civil Status Certificates (birth, death, marriage), Agricultural support, Urban development, Environmental protection, Education support, Healthcare services, Water and Energy management, Road works, Women Empowerment programs, Tourism development, Commerce regulation, Transport management, and Sports promotion.",
  }
];

const ChatBot = () => {
  const [selectedFaq, setSelectedFaq] = useState<typeof faqs[0] | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button size="lg" className="rounded-full h-14 w-14">
            <MessageCircle className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[90vw] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>How can we help you with Elak Council services?</SheetTitle>
          </SheetHeader>
          <div className="mt-4 h-[80vh] flex flex-col">
            {selectedFaq ? (
              <div className="space-y-4">
                <Button 
                  variant="ghost" 
                  className="mb-4"
                  onClick={() => setSelectedFaq(null)}
                >
                  ← Back to questions
                </Button>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{selectedFaq.question}</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">{selectedFaq.answer}</p>
                </div>
              </div>
            ) : (
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Search for information about Elak Council services..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Frequently Asked Questions">
                    <ScrollArea className="h-[60vh]">
                      {faqs.map((faq, index) => (
                        <CommandItem
                          key={index}
                          onSelect={() => setSelectedFaq(faq)}
                          className="cursor-pointer"
                        >
                          {faq.question}
                        </CommandItem>
                      ))}
                    </ScrollArea>
                  </CommandGroup>
                </CommandList>
              </Command>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ChatBot;