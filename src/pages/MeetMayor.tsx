import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const MeetMayor = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-16">
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Meet Our Mayor
                  </h1>
                  <p className="text-lg text-gray-600">
                    Our dynamic and dedicated Mayor welcomes every resident to actively participate in building a unified and prosperous Elak Council.
                  </p>
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900">Vision for Elak</h2>
                    <p className="text-gray-600">
                      Under our Mayor's leadership, the Elak Council strives to address the needs of its residents and develop infrastructure that supports progress while preserving our rich cultural heritage.
                    </p>
                    <h2 className="text-xl font-semibold text-gray-900">Key Priorities</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Preserving and protecting the Kilum forest reserve</li>
                      <li>Improving agricultural infrastructure and support</li>
                      <li>Developing tourism around Mount Oku and Lake Oku</li>
                      <li>Enhancing educational facilities across our 36 villages</li>
                      <li>Strengthening community engagement and cultural preservation</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                    <img
                      src="/lovable-uploads/fa9ab9eb-2f8d-4d86-a6c2-ef6b7be95ba4.png"
                      alt="Mayor of Elak Council"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-bold text-gray-900">The Mayor</h2>
                    <p className="text-lg text-gray-600">Lord Mayor of Elak Council</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default MeetMayor;