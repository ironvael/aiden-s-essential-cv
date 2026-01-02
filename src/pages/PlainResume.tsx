import Resume from "@/components/Resume";
import SEOHead from "@/components/SEOHead";

const PlainResume = () => {
  return (
    <main className="page-wrapper">
      <SEOHead />
      <Resume showButton={false} minimal={true} />
    </main>
  );
};

export default PlainResume;
