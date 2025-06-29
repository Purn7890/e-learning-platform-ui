export default function CourseCard({ title, instructor, thumbnail, progress }) {
  return (
    <div className="course-card">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{instructor}</p>
      <ProgressBar percent={progress} />
      <button>Continue</button>
    </div>
  );
}
