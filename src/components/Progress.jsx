export default function Progress({ index, numQuestion, points }) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}
      </p>

      <p>
        <strong>{points}</strong> / 280
      </p>
    </header>
  );
}
