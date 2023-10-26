export default function FinishScreen({ points }) {
  const percentage = (points / 280) * 100;
  return (
    <p className="result">
      You scored <strong>{points}</strong> / 150 ({Math.ceil(percentage)}%)
    </p>
  );
}
