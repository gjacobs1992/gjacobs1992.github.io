import { educationItems } from "../content";

export default function EducationPage() {
  return (
    <section className="page-section">
      <div className="page-title-block">
        <p className="eyebrow">Learning</p>
        <h1 className="page-title">Education</h1>
      </div>
      <div className="card-container">
        {educationItems.map((item) => (
          <article key={`${item.title}-${item.timeframe}`} className="card">
            <div className="card-heading">
              <h2>{item.title}</h2>
              <img className="logo" src={item.logo} alt={`${item.title} logo`} />
            </div>
            <div className="location-time-container">
              <span>{item.location}</span>
              <span>{item.timeframe}</span>
            </div>
            <p className="job-overview">{item.overview}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
