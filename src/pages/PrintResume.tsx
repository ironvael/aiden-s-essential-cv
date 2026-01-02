import { useEffect } from "react";
import Resume from "@/components/Resume";
import SEOHead from "@/components/SEOHead";

const PrintResume = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.print();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="page-wrapper">
      <SEOHead />
      <Resume showButton={false} minimal={false} />
    </main>
  );
};

export default PrintResume;
