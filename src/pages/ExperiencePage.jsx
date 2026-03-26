import { experienceItems } from "../content";

export default function ExperiencePage() {
  return (
    <section className="page-section">
      <div className="page-title-block">
        <p className="eyebrow">Career</p>
        <h1 className="page-title">Experience</h1>
      </div>
      <div className="card-container">
        {experienceItems.map((item) => (
          <article key={`${item.company}-${item.timeframe}`} className="card">
            <div className="card-heading">
              <div>
                <h2>{item.title}</h2>
                <p className="company">{item.company}</p>
              </div>
              <img className="logo" src={item.logo} alt={`${item.company} logo`} />
            </div>
            <div className="location-time-container">
              <span>{item.location}</span>
              <span>{item.timeframe}</span>
            </div>
            <p className="job-overview">{item.overview}</p>
            <ul className="detail-list">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
