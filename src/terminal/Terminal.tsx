import { useState } from "react";
import { parseCommand } from "./parser";

function Terminal() {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const output = parseCommand(input);
      setHistory([...history, `>${input}`, output]);
      setInput("");
    }
  };

  return (
    <div>
      {history.map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}

      <div>
        <span>&gt;</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    </div>
  );
}

export default Terminal;
