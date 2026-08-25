import { useState } from "react";
import Header from "@/components/sections/Header/Header";
import FormSection from "@/components/sections/Form/FormSection";
import Result from "@/components/sections/Result/Result";
import Footer from "@/components/sections/Footer/Footer";
import type { PricingResult, PriceComparison } from "@/types/pricing";

export default function App() {
  const [pricingResult, setPricingResult] = useState<PricingResult | null>(
    null,
  );
  const [comparison, setComparison] = useState<PriceComparison | undefined>();

  return (
    <>
      <Header />
      <main>
        <FormSection
          onCalculationComplete={(result, comparison) => {
            setPricingResult(result);
            setComparison(comparison);
          }}
        />
        <Result pricingResult={pricingResult} comparison={comparison} />
      </main>
      <Footer />
    </>
  );
}
