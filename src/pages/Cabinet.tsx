import { Navigation } from "@/components/Navigation";
import { MayorsCabinet } from "@/components/MayorsCabinet";
import { Footer } from "@/components/Footer";

const Cabinet = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <MayorsCabinet />
      <Footer />
    </div>
  );
};

export default Cabinet;