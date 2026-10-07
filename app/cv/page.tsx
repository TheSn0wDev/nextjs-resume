import { Phone, Mail, Link, MapPin, ExternalLink } from 'lucide-react';
import PrintButton from './print-button';
const experiences = [
  { title: 'Backend Software Engineer', location: 'Gennevilliers', start: '2025-10', date: "Octobre 2025 – Aujourd’hui", bullets: [
    'Développement et maintenance de services backend en Go au sein de la plateforme Combat Digital Platform.',
    'Conception et implémentation d’une passerelle d’interopérabilité entre protocoles OTAN JDSS et MIM.',
    'Développement de composants d’intégration pour des systèmes distribués à fortes contraintes d’interopérabilité.',
    'Participation à la conception technique, aux revues de code, tests et processus d’intégration continue.',
  ], stack: ['Go', 'Java', 'Python', 'Docker', 'GitLab CI', 'PostgreSQL'] },
  { title: 'Robotics Software Engineer', location: 'Gennevilliers', start: '2025-03', end: '2025-09', date: 'Mars 2025 – Septembre 2025', bullets: [
    'Développement full-stack et intégration logicielle de systèmes robotiques dans le cadre du Challenge CoHoMa III.',
    'Conception d’une chaîne complète de streaming vidéo temps réel et replay.',
    'Agrégation et visualisation de flux vidéo et de données multi-capteurs.',
    'Intégration de composants logiciels et matériels sur plateformes robotiques.',
  ], stack: ['C++', 'C', 'Python', 'Docker', 'Hardware'] },
  { title: 'Software Engineer', location: 'Vélizy', start: '2023-04', end: '2023-07', date: 'Avril 2023 – Juillet 2023', bullets: [
    'Développement d’un environnement Code Sandbox permettant de tester dynamiquement un SDK cartographique web.',
    'Mise en place de tests de performance et benchmarks du SDK.',
  ], stack: ['TypeScript', 'React', 'Vitest'] },
];
const projects = [
  { title: 'Personal RAG', stack: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'OpenAI'], bullets: [
    'Conception d’un assistant RAG réutilisable sur tout projet personnel par réindexation des documents, avec interface de chat et API.',
    'Indexation incrémentale par empreintes SHA-256, synchronisation des documents et stockage vectoriel persistant.',
    'Recherche sémantique avec seuil de pertinence et génération contextualisée avec citations et traçabilité des sources.',
    'Recherche hybride, reranking et orchestration d’agents pour enrichir la pertinence des réponses.',
  ] },
  { title: 'MMA Scan, SaaS d’analyse MMA', url: 'https://mmascan.fr', stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Python', 'LLM', 'GitHub Actions'], bullets: [
    'Conception et développement full-stack d’un SaaS de comparaison de combattants et d’analyse de combats MMA par IA.',
    'Croisement des statistiques, des styles et de la forme récente pour générer des analyses argumentées et des scénarios de combat.',
    'Suivi des combattants, historique des analyses et évaluation des pronostics confrontés aux résultats officiels.',
    'Automatisation du déploiement via une pipeline CI/CD GitHub Actions.',
  ] },
];
const skills = [
  ['Backend', 'Go • Python • TypeScript • Node.js • REST APIs • WebSocket'],
  ['AI / GenAI', 'LLM • Prompt Engineering • RAG • LangChain • LangGraph • Agents IA • Vector databases'],
  ['Frontend', 'React • Next.js'],
  ['Data', 'PostgreSQL • MongoDB • Redis'],
  ['Cloud & DevOps', 'Docker • Git • CI/CD • AWS • Azure • GCP • Kubernetes'],
  ['Engineering', 'Architecture logicielle • APIs • Systèmes distribués • Agile / Scrum'],
  ['Intérêts', 'Robotique • Électronique • IA • Sports mécaniques • Sports de combat • Course à pied'],
];
function Brush() {
  return <svg className="brush" aria-hidden="true" viewBox="0 0 20 30" fill="none">
    <path d="M5.2 26.4C7.3 20.8 10.5 12.2 13.7 4.1L5.8 15.8Q5.1 16.6 6.4 16L15.2 8.3C13.4 13.3 9.8 20.4 8.1 24.6L15.7 17.2" stroke="#719BFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m4.1 25.2 3.8-9.1M14.4 5.3l-1.7 4.1" stroke="#96B5FF" strokeWidth="1" strokeLinecap="round" />
  </svg>;
}
function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="section-heading"><Brush/><span>{children}</span><i aria-hidden="true" /></h2>;
}
function ContactIcon({ type }: { type: 'phone' | 'email' | 'linkedin' | 'github' | 'link' | 'location' }) {
  if (type === 'linkedin' || type === 'github') {
    return <img className={`contact-icon ${type}`} src={`/logos/${type}.png`} alt="" aria-hidden="true" width={16} height={16} />;
  }
  const icons = { phone: Phone, email: Mail, link: Link, location: MapPin };
  const Icon = icons[type];
  return <Icon className={`contact-icon ${type}`} aria-hidden="true" size={16} strokeWidth={2.2} />;
}

function Tags({ values }: { values: string[] }) { return <ul className="tags" aria-label="Technologies">{values.map(value => <li key={value}>{value}</li>)}</ul>; }
export default function CV() {
  return <main className="workspace">
    <div className="toolbar"><span>CLÉMENT OZOR <span className="toolbar-divider">/</span> CURRICULUM VITÆ</span><PrintButton /></div>
    <article className="cv-page" aria-label="Curriculum vitæ de Clément Ozor">
      <header className="cv-header">
        <div className="header-art" aria-hidden="true"><svg viewBox="0 0 110 100" fill="none"><path d="M38-12C29 1 17 20 14 35Q12 42 19 38L108-16C82 10 59 38 34 66Q29 73 36 70L118 26C95 48 76 72 60 94" stroke="#DCE7FF" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 32 31 9M39 69C60 56 88 42 108 30M64 91l13-16" stroke="#E8EFFF" strokeWidth="3" strokeLinecap="round"/></svg></div>
        <div className="annotation" aria-hidden="true">BUILD<br/>APPLIED AI<br/>FOR REAL-WORLD<br/>IMPACT<svg viewBox="0 0 50 65"><path d="M36 2C48 26 29 45 9 56m0 0 7-14M9 56l16 1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></div>
        <h1>CLÉMENT <span>OZOR</span></h1>
        <p className="role"><svg className="role-stroke" aria-hidden="true" viewBox="0 0 64 18" fill="none"><path d="M3 10.4C10 8.1 15 11.5 22 9.5S30 11 38 8.8S49 10.2 60 8.5M48.5 3.2C52 5.8 56.9 5.9 60 8.5C56.7 9.6 54.4 13.1 50.2 14.5" stroke="#7AA0FF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 12C16 9.8 23 12.4 34 10.6S46 11.5 56 9.8" stroke="#96B5FF" strokeWidth="2" strokeLinecap="round"/></svg>Software Engineer | Backend & AI</p>
        <div className="contacts">
          <p><a href="tel:+33652052492"><ContactIcon type="phone"/>+33 6 52 05 24 92</a><b>|</b><a href="mailto:clement.ozor@protonmail.com"><ContactIcon type="email"/>clement.ozor@protonmail.com</a><b>|</b><a className="social-link" href="https://www.linkedin.com/in/clement-ozor/" aria-label="LinkedIn : @clement-ozor"><ContactIcon type="linkedin"/><span>@clement-ozor</span></a><b>|</b><a className="social-link" href="https://github.com/TheSn0wDev" aria-label="GitHub : @TheSn0wDev"><ContactIcon type="github"/><span>@TheSn0wDev</span></a></p>
          <p><a className="portfolio" href="https://thesn0wdev.github.io/portfolio/"><ContactIcon type="link"/><span>Portfolio personnel</span></a><b>|</b><span className="location"><ContactIcon type="location"/>Île-de-France</span><b>|</b><span>Mission longue / hybride</span><b>|</b><span>Portage salarial</span></p>
        </div>
      </header>
      <section id="profile" className="profile">
        <h2><Brush/><span>Profil</span></h2>
        <p>Software Engineer spécialisé Backend & GenAI, actuellement chez Thales. Expérience en Go, Python et TypeScript sur des systèmes complexes, complétée par des projets en LLM, RAG et agents IA. Recherche d’une mission longue en Software / AI Engineering en Île-de-France, via portage salarial.</p>
      </section>
      <section id="experience">
        <Heading>Expériences professionnelles</Heading>
        <div className="timeline">{experiences.map(exp => <div className="experience" key={exp.title}>
          <div className="entry-heading"><h3>{exp.title}</h3><p className="date"><time dateTime={exp.start}>{exp.date.split(' – ')[0]}</time> – {exp.end ? <time dateTime={exp.end}>{exp.date.split(' – ')[1]}</time> : 'Aujourd’hui'}</p></div>
          <p className="company">THALES {exp.location}</p>
          <ul className="bullets">{exp.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}<li>Stack : {exp.stack.join(", ")}.</li></ul>
        </div>)}</div>
      </section>
      <section id="projects">
        <Heading>Projets</Heading>
        <div className="projects-grid">{projects.map(project => <div className={`project${project.url ? "" : " personal-rag"}`} key={project.title}>
          <div className="project-heading"><h3>{project.url ? <a className="project-link" href={project.url}><span>{project.title}</span><ExternalLink aria-hidden="true" size={12} strokeWidth={2} /></a> : project.title}</h3><Tags values={project.stack} /></div>
          <ul className="bullets">{project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
        </div>)}</div>
      </section>
      <section id="skills">
        <Heading>Compétences</Heading>
        <div className="skills-panel">{[skills.slice(0,4), skills.slice(4)].map((row, i) => <div className={`skills-row row-${i}`} key={i}>{row.map(([title, value]) => <div className="skill" key={title}><h3>{title}</h3><p>{value}</p></div>)}</div>)}</div>
      </section>
      <section id="education">
        <Heading>Formation</Heading>
        <div className="education-grid">
          <div><h3>Epitech Montpellier</h3><p>Expert en Technologies de l’Information, <time dateTime="2025">2025</time></p></div>
          <div><h3>Université Laval, Québec</h3><p>Programme international en technologies de l’information, <time dateTime="2024">2024</time></p><p className="education-details">Cloud • Data • Blockchain • Business</p></div>
        </div>
      </section>
    </article>
    <p className="screen-note">FORMAT A4 <span>·</span> 210 × 297 MM <span>·</span> UNE PAGE</p>
  </main>;
}
