import { homeContent } from "../content";

export default function HomePage() {
  return (
    <section className="home-card-container">
      <article className="home-card">
        <img
          src={`${import.meta.env.BASE_URL}imgs/headshot.jpg`}
          alt="JJ Jacobs headshot"
          className="headshot"
        />
        <h1 className="page-title home-title">JJ Jacobs</h1>
        <p className="greeting">Hi! I'm JJ!</p>
        <p className="bio">{homeContent.bio}</p>
        <div className="home-lists">
          <InfoList title="Proficient Languages" items={homeContent.languages} />
          <InfoList title="Hobbies Include" items={homeContent.hobbies} />
          <InfoList title="Dogs Names" items={homeContent.dogs} />
        </div>
        <a
          className="button-link"
          href={homeContent.resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </a>
      </article>
    </section>
  );
}

function InfoList({ title, items }) {
  return (
    <section className="info-list">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
