import Section from "../section/section";

const Experience: React.FC = () => {
  return (
    <Section headline="Experience" fullscreen={false}>
      <ul className="timeline">
        <li>
          <span className="date">2019 – Today</span>
          <span className="job">Self-employed Freelance Web Developer</span>
          <span className="job">Erste Digital - Senior Web Developer</span>
        </li>
        <li>
          <span className="date">2013</span>
          <span className="job">Nexxar - Team Lead Web Developer</span>
        </li>

        <li>
          <span className="date">2010</span>
          <span className="job">CIDCOM - Web Developer</span>
        </li>
      </ul>
    </Section>
  );
};

export default Experience;
