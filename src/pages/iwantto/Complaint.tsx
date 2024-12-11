import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Mail, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Complaint() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8 pt-16">
        <div className="bg-cameroon-green text-white py-16 -mx-4">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">File a Complaint</h1>
            <p className="text-xl">Submit your concerns to Elak Council</p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Submit Complaint
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <Label htmlFor="village">Village</Label>
                    <Input id="village" placeholder="Enter your village" />
                  </div>
                  <div>
                    <Label htmlFor="contact">Contact Number</Label>
                    <Input id="contact" type="tel" placeholder="Enter your contact number" />
                  </div>
                  <div>
                    <Label htmlFor="complaint">Complaint Details</Label>
                    <Textarea 
                      id="complaint" 
                      placeholder="Please describe your complaint in detail"
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button className="w-full">Submit Complaint</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>Phone: +237 123 456 789</p>
                    <p>Email: complaints@elakcouncil.cm</p>
                    <p>Address: Elak Council Hall, Elak Municipality</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Important Notice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    All complaints are handled with strict confidentiality. Our team will review your submission and respond within 5 working days. For urgent matters, please contact us directly by phone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}