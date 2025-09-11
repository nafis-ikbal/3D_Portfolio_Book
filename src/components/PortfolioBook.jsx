import Page from "./Page";
import HTMLFlipBook from "react-pageflip";
import CoverPage from "./pages/CoverPage";
import IntroPage from "./pages/IntroPage";
import BackCoverPage from "./pages/BackCoverPage";
import AboutPage from "./pages/about/AboutPage";
import SkillPage from "./pages/skill/SkillPage";
import ServicePage from "./pages/services/ServicePage";
import ProjectPage1 from "./pages/projects/ProjectPage1";
import ProjectPage2 from "./pages/projects/ProjectPage2";

export default function PortfolioBook() {
  return (
      <HTMLFlipBook width={550} height={715} className="overflow-hidden" showCover={true}>
        <Page number="1">
          <CoverPage/>
        </Page>

        <Page number="2">
          <IntroPage/>
        </Page>

        <Page number="3">
          <AboutPage/>
        </Page>

        <Page number="4">
          <SkillPage/>
        </Page>

        <Page number="5">
          <ServicePage/>
        </Page>

        <Page number="7">
          <ProjectPage1/>
        </Page>

        <Page number="8">
          <ProjectPage2/>
        </Page>

        <Page number="9">
          <BackCoverPage/>
        </Page>
        
        </HTMLFlipBook>
  );
}