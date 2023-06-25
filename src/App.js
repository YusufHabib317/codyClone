import BtnToTop from "./component/BtnToTop/BtnToTop";
import EmPower from "./component/emPower/EmPower";
import Faq from "./component/faq/Faq";
import Footer from "./component/footer/Footer";
import HowItWorks from "./component/howItWorks/HowItWorks";
import Integrate from "./component/integrate/Integrate";
import Landing from "./component/landing/Landing";
import Trusted from "./component/trusted/Trusted";
import WhatCanCodyDo from "./component/WhatCanCodyDo/WhatCanCodyDo";
import WhatCody from "./component/whatCody/WhatCody";
import WorkLang from "./component/workLang/WorkLang";

export default function Home() {
  return (
    <div className="relative">
      <BtnToTop />
      <Landing />
      <WhatCody />
      <WhatCanCodyDo />
      <HowItWorks />
      <WorkLang />
      <Integrate />
      <Trusted />
      <Faq />
      <EmPower />
      <Footer />
    </div>
  );
}
