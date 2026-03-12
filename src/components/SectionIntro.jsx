function SectionIntro({ badge, title, description, centered = false }) {
  return (
    <div className={`section-intro ${centered ? "centered" : ""}`}>
      {badge ? <span className="section-badge">{badge}</span> : null}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SectionIntro;