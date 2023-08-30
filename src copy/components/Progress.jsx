function Progress({ index, numQuestion, points, maxPossiblePoint, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        {" "}
        Question <strong>{index}</strong> / {numQuestion}
      </p>
      <p>
        {" "}
        <strong>{points}</strong>/ {maxPossiblePoint}
      </p>
    </header>
  );
}

export default Progress;
