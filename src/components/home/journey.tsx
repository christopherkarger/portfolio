import { useIsDesktop } from "../../hooks/use-is-desktop";
import Reveal from "../reveal/reveal";
import Section from "../section/section";

const Journey: React.FC = () => {
  const isDesktop = useIsDesktop();

  return (
    <Section
      emoji="🛸"
      headline="Journey"
      emojiClassName="translate-y-[12px] mr-4 lg:mr-6 inline-block"
      fullscreen={false}
    >
      <ul className="timeline">
        <li>
          <Reveal delay={isDesktop ? 400 : 0}>
            <span className="date">2019 – Today</span>
            <span className="job">Self-employed Freelance Web Developer</span>
            <span className="job">Erste Digital - Senior Web Developer</span>
          </Reveal>
        </li>
        <li>
          <Reveal delay={isDesktop ? 200 : 0}>
            <span className="date">2013</span>
            <span className="job">Nexxar - Team Lead Web Developer</span>
          </Reveal>
        </li>
        <li>
          <Reveal>
            <span className="date">2010</span>
            <span className="job">CIDCOM - Web Developer</span>
          </Reveal>
        </li>
      </ul>
    </Section>
  );
};

export default Journey;
