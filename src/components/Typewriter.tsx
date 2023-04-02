import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
}

function Typewriter({ text }: TypewriterProps) {
  const [typedText, setTypedText] = useState<string>("");
  const [showPipe, setShowPipe] = useState<boolean>(true);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText(text.slice(0, index));
      index++;
      if (index > text.length) {
        setTimeout(() => {
          setShowPipe(false); // Hide the pipe when the text is done typing
        }, 500);
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [text]);

  useEffect(() => {
    const pipeIntervalId = setInterval(() => {
      setShowPipe((prev) => !prev);
    }, 500);

    return () => clearInterval(pipeIntervalId);
  }, []);

  return (
    <div className="bg-black p-4 font-mono text-white">
      <div className="typewriter relative mb-4">
        {typedText}
        {showPipe && (
          <span
            className="absolute h-full w-1 bg-white"
            style={{
              left: `${typedText.length * 0.6}ch`,
              animation: "blink 1s infinite",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Typewriter;
