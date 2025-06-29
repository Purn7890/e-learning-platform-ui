export default function CoursePlayer({ videoUrl, lessons, currentLessonIndex }) {
  return (
    <div className="course-player">
      <video controls width="100%">
        <source src={videoUrl} type="video/mp4" />
      </video>
      <ul>
        {lessons.map((lesson, index) => (
          <li key={index} className={index === currentLessonIndex ? "active" : ""}>
            {lesson.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
