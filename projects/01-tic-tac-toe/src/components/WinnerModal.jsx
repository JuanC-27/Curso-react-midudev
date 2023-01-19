import Square from "./Square";

export default function WinnerModal({ winner, resetGame }) {
  if (winner === null) return;
  return (
    <section className="winner">
      <div className="text">
        <h2>{winner ? "Ganó" : "Empate"}</h2>
        <header className="win">
          {winner ? <Square>{winner}</Square> : ""}
        </header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
