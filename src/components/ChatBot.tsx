import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";

const faqs = [
  {
    question: "How do I obtain a birth certificate in Elak Council?",
    answer: "To obtain a birth certificate in Elak Council, visit the Civil Status Registry office with the required documents: declaration of birth from the hospital, parents' identification, and marriage certificate (if applicable). The process typically takes 3-5 working days.",
  },
  {
    question: "What are the main tourist attractions in Elak?",
    answer: "Elak boasts several notable attractions including Mount Oku (second highest in West Africa at 3011M), Lake Oku, the Kilum forest reserve, multiple waterfalls (Tolon, Kenshing, Enfwe, etc.), and the historic Oku Fon's palace. The area is also famous for its cultural heritage and traditional crafts.",
  },
  {
    question: "How can I pay my council taxes?",
    answer: "Council taxes can be paid directly at the Elak Council Revenue Office during working hours (Monday to Friday, 8:15 AM - 5:00 PM). The council is working on implementing digital payment solutions for easier access.",
  },
  {
    question: "What documents do I need for a building permit in Elak?",
    answer: "For a building permit in Elak, you need: architectural plans (3 copies), proof of land ownership, site plan, technical report, tax clearance certificate, and application letter to the Mayor. Submit these at the Technical Service office of the Council.",
  },
  {
    question: "How can I visit the Kilum forest reserve?",
    answer: "To visit the Kilum forest reserve, contact the Elak Council Tourism Office or the Forest Management Institutions (FMIs). Guided tours are available, and you'll need to obtain necessary permits. The reserve is home to unique flora and is an important conservation area.",
  },
  {
    question: "What are the requirements for business registration in Elak?",
    answer: "To register a business in Elak, you need: valid ID, taxpayer's card, business plan or description, location details, and applicable fees. Visit the Council's Economic Development office for guidance and processing.",
  },
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
                  <p className="text-muted-foreground">{selectedFaq.answer}</p>
                </div>
              </div>
            ) : (
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Search Elak Council services and information..." />
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