const notes = [
  {
    eyebrow: 'Building from Saudi',
    title: 'A founder operating from the Saudi/GCC edge of AI, lending, and company-building.',
    text: 'I care about the messy middle: how ideas move from raw thought to shipped systems, trusted products, and real momentum.',
  },
  {
    eyebrow: 'Mugdm',
    title: 'Managed AI agents for lending teams.',
    text: 'At Mugdm, we are building human-governed digital coworkers that help lenders prepare, check, and move lending work without replacing judgment.',
  },
  {
    eyebrow: 'Made by Malki',
    title: 'Documenting the thinking while living the story.',
    text: 'This site is the public home for what I am learning across strategy, product, design, growth, technology, systems, uncertainty, and meaning.',
  },
];

const operatingThemes = [
  'Ideas become reality through systems.',
  'Momentum is designed, not wished for.',
  'Uncertainty is where founder judgment compounds.',
  'Taste matters because trust is felt before it is explained.',
];

const work = [
  ['Founder', 'Mugdm — managed AI agents for lending workflows.'],
  ['Ex-lender', 'SAMA and CMA environments shaped how I think about trust, operations, and regulated markets.'],
  ['Builder', 'Product, strategy, design, systems, and distribution — connected into one operating rhythm.'],
];

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <nav className="nav" aria-label="Primary navigation">
          <a className="mark" href="#top" aria-label="Mohammed Malki home">MM</a>
          <div className="navLinks">
            <a href="#work">Work</a>
            <a href="#thinking">Thinking</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroGrid" id="top">
          <div className="heroCopy">
            <p className="kicker">Mohammed Malki · Founder · Ex-Lender</p>
            <h1>Ideas become reality through systems that create momentum.</h1>
            <p className="lede">
              I’m building from Saudi at the intersection of lending, AI agents, product, strategy, and public thinking.
            </p>
            <div className="actions">
              <a className="primary" href="mailto:eng.mohammedmalki@gmail.com">Start a conversation</a>
              <a className="secondary" href="#thinking">Read the thesis</a>
            </div>
          </div>

          <aside className="briefing" aria-label="Executive briefing card">
            <div className="briefingTop">
              <span>Public Identity</span>
              <span>Riyadh · KSA</span>
            </div>
            <div className="orbit" aria-hidden="true">
              <span></span><span></span><span></span>
              <strong>Momentum</strong>
            </div>
            <p>
              Strategy, growth, product, design, technology, and systems — connected by a simple question: how does an idea become real?
            </p>
          </aside>
        </div>
      </section>

      <section className="shell manifesto" id="thinking">
        <p className="sectionLabel">Current thesis</p>
        <h2>Thinking through the story while living it.</h2>
        <p>
          I use this space to turn raw founder thinking into public artifacts: essays, videos, notes, and operating principles. Some are about Mugdm. Some are about building from Saudi. Some are about momentum, uncertainty, and meaning.
        </p>
      </section>

      <section className="shell cards" aria-label="Focus areas">
        {notes.map((note) => (
          <article className="card" key={note.eyebrow}>
            <p>{note.eyebrow}</p>
            <h3>{note.title}</h3>
            <span>{note.text}</span>
          </article>
        ))}
      </section>

      <section className="split shell" id="work">
        <div>
          <p className="sectionLabel">Work</p>
          <h2>Founder work, lender context, and public thinking in one place.</h2>
        </div>
        <div className="timeline">
          {work.map(([label, text]) => (
            <div className="row" key={label}>
              <strong>{label}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell principles">
        <p className="sectionLabel">Operating notes</p>
        <div className="principleGrid">
          {operatingThemes.map((theme, index) => (
            <div className="principle" key={theme}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{theme}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact shell" id="contact">
        <p className="sectionLabel">Contact</p>
        <h2>If the overlap is lending, AI agents, product, Saudi, or building with taste — reach out.</h2>
        <div className="contactLinks">
          <a href="mailto:eng.mohammedmalki@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/mohammedmalki" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://mugdm.com" target="_blank" rel="noreferrer">Mugdm</a>
        </div>
      </section>
    </main>
  );
}
