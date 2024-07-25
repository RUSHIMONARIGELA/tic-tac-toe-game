const StatusMessage = ({ winners, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;

  const noMovesLeft = squares.every((val) => val !== null);
  const nextPlayer = isXNext ? "X" : "O";
  //   const statusMsg = winners
  //     ? `winner is ${winners}`
  //     : `Next player is ${nextPlayer}`;
  const renderStatusMsg = () => {
    if (winners) {
      return (
        <h2>
          Winner is
          <span className={winners == "x" ? "text-green" : "text-orange"}>
            {winners}
          </span>
        </h2>
      );
    }

    if (!winners && noMovesLeft) {
      return (
        <h2>
          <span className="text-green">X</span> and{" "}
          <span className="text-orange">O</span> tied
        </h2>
      );
    }

    if (!winners && !noMovesLeft) {
      return (
        <h2 className="status-message">
          Next player is
          <span className={isXNext ? "text-green" : "text-orange"}>
            {nextPlayer}
          </span>
        </h2>
      );
    }
  };
  return <>{renderStatusMsg()}</>;
};

export default StatusMessage;
