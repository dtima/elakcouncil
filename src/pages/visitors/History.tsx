import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function History() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="relative h-[400px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
            alt="Historical Elak"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">History of Elak</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Heritage</h2>
                <p className="text-gray-600">
                  The Elak council was created by presidential decree No 77/203 of 19st June 1977 as a split from the then Nso council. 
                  Oral tradition traces the Oku people's origins to Egypt, from where they migrated and eventually settled in the Tikari region.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Timeline</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-24 font-bold">Ancient</div>
                    <div className="flex-1">
                      <p className="text-gray-600">Migration from Egypt to Belbele</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 font-bold">Settlement</div>
                    <div className="flex-1">
                      <p className="text-gray-600">Establishment in Tikar region at Rifem</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 font-bold">1977</div>
                    <div className="flex-1">
                      <p className="text-gray-600">Creation of Elak Council</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 font-bold">Present</div>
                    <div className="flex-1">
                      <p className="text-gray-600">Modern development and cultural preservation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Cultural Heritage</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Ethnic Groups</h4>
                    <p className="text-gray-600">
                      The people of Elak belong mainly to the Tikar ethnic group, with several other clans including Nso, 
                      Noni, Mbororos, Bamunka and Wimbum coexisting harmoniously.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Religion</h4>
                    <p className="text-gray-600">
                      The municipality embraces religious diversity, with Christianity, Islam, and African Traditional 
                      Religion practitioners contributing to community development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Demographics</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Population: 182,879 inhabitants</li>
                  <li>36 villages under traditional leadership</li>
                  <li>Common language: EblamEbkuo</li>
                  <li>Surface area: 750 km²</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}