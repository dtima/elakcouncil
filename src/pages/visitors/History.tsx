import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function History() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="bg-cameroon-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">History of Elak</h1>
            <p className="text-xl">Discover our rich cultural heritage and origins</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Origins and Early History</h2>
              <p className="text-gray-600 mb-4">
                Oral tradition traces the Oku people's origins to Egypt. Due to harsh climatic conditions, 
                they migrated and eventually settled in Belbele, living as hunters. Later, they and their 
                Nso brothers moved to the savannah land of Tikari in an area called Rifem.
              </p>
              <p className="text-gray-600 mb-4">
                The united family at Tikari later separated due to a succession dispute. Nso, the elder 
                brother, left with some traditional belongings to establish a new home across the river.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Story of Tatah</h2>
              <p className="text-gray-600 mb-4">
                At Kovifem, Nso had four children with his wife Yeafon, including Tatah, who would later 
                found Oku. A succession dispute led to Tatah settling in the Ngongba forest between 
                present-day Oku and Nso.
              </p>
              <p className="text-gray-600 mb-4">
                During his hunting expeditions, Tatah discovered the Ntul people living in scattered 
                settlements. He was welcomed warmly and eventually became an important figure in their 
                community, later succeeding as their leader.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Modern Era</h2>
              <p className="text-gray-600 mb-4">
                The Elak council was established by presidential decree No 77/203 of June 19, 1977, 
                separating from the then Nso council. The council began operations in 1978 and has since 
                been managed by three Municipal Administrators and three Mayors.
              </p>
              <p className="text-gray-600 mb-4">
                Today, Elak Council oversees 36 villages, each headed by a 3rd class chief, except for 
                Elak village which is led by a 2nd class chief. The municipality has grown significantly, 
                with an estimated population of 182,879 inhabitants.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Cultural Heritage</h2>
              <p className="text-gray-600 mb-4">
                The name "Oku" has its own interesting origin story, derived from "Vekui" in Lamnso, 
                meaning "plaster remover." This name emerged from an incident where Oku people removed 
                plaster from a building in Nso after not being fed for their work.
              </p>
              <p className="text-gray-600">
                The municipality maintains rich cultural traditions, including the four-week mourning 
                period for a Fon's mother, a custom that dates back to Tatah's time. The practice of 
                offering kola nuts to guests also originated from Tatah's first encounter with the 
                Ntul people.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}