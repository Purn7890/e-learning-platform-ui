export default function ProgressBar({ percent }) {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${percent}%` }}></div>
    </div>
  );
}
