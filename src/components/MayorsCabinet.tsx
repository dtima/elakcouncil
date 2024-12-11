import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User } from "lucide-react";

interface CabinetMember {
  id: number;
  name: string;
  title: string;
  image?: string;
}

const cabinetMembers: CabinetMember[] = [
  {
    id: 1,
    name: "Cabinet Member 1",
    title: "Secretary General",
    image: "/lovable-uploads/9ece4b93-2481-4a48-ad79-ab2c19b9540c.png"
  },
  {
    id: 2,
    name: "Cabinet Member 2",
    title: "Municipal Treasurer",
    image: "/lovable-uploads/165604a3-fd3f-4f96-9323-778a2dcf5990.png"
  },
  {
    id: 3,
    name: "Cabinet Member 3",
    title: "Head of Technical Services",
    image: "/lovable-uploads/1a6b1277-2c1f-4d9d-919e-b1cd18cc1bd2.png"
  },
  {
    id: 4,
    name: "Cabinet Member 4",
    title: "Head of Works",
    image: "/lovable-uploads/4bd1adac-08ca-485c-8a97-9decdccfbe66.png"
  },
  {
    id: 5,
    name: "Cabinet Member 5",
    title: "Head of Social Affairs",
    image: "/lovable-uploads/35a374c4-1300-4799-831a-d0cb1032ac3d.png"
  },
  {
    id: 6,
    name: "Cabinet Member 6",
    title: "Head of Urban Development"
  }
];

export function MayorsCabinet() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            The Mayor's Cabinet
          </h2>
          <p className="text-lg text-gray-600">
            Meet the dedicated team serving Elak Council
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cabinetMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center text-center space-y-4">
                <Avatar className="w-32 h-32">
                  {member.image ? (
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                  ) : (
                    <AvatarFallback className="bg-green-100">
                      <User className="w-12 h-12 text-green-600" />
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-1">
                    {member.title}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}