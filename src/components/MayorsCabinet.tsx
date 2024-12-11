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
    title: "Head of Urban Development",
    image: "/lovable-uploads/572954e5-7d85-4a7f-817f-bba2c835627a.png"
  },
  {
    id: 7,
    name: "Cabinet Member 7",
    title: "Council Development Officer",
    image: "/lovable-uploads/f6688f42-a743-4813-bed2-3b0fd4757fcb.png"
  },
  {
    id: 8,
    name: "Cabinet Member 8",
    title: "Council Finance Officer",
    image: "/lovable-uploads/4b067ba8-43bf-4eb2-bf1b-af372739294b.png"
  }
];

export function MayorsCabinet() {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Elak Council Executive
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            According to Section 6 of the law on Regional and local authorities, Councils are administered by elected Organs under conditions laid down by law. Deliberative and executive organs of local authorities derive their powers through universal adult suffrage. The deliberative organ constitutes the councillors whereas the executive of the council constitute the Lord Mayor and deputies who assist the lord mayor on daily activities. All of them are sworn in court and have equal rights to celebrate and sign all civil status documents. Other officials known as technical collaborators in the council are the Secretary General, the Municipal Treasurer, the Council Finance Officer and the Council Development Officer. They work together to ensure that the goals of the council are achieved.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {cabinetMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center text-center space-y-4 p-4 sm:p-6">
                <Avatar className="w-24 h-24 sm:w-32 sm:h-32">
                  {member.image ? (
                    <AvatarImage 
                      src={member.image} 
                      alt={member.name} 
                      className="object-cover"
                    />
                  ) : (
                    <AvatarFallback className="bg-green-100">
                      <User className="w-8 h-8 sm:w-12 sm:h-12 text-green-600" />
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-600 mt-1">
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