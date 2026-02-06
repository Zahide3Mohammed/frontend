import { useState } from "react";
import "./teste.Module.css";

const questions = [
  { id: 1, text: "I feel energized when I interact with new people." },
  { id: 2, text: "I trust logic more than emotions when making decisions." },
  { id: 3, text: "I prefer planning over spontaneity." },
  { id: 4, text: "I enjoy spending time alone to recharge." },
  { id: 5, text: "I adapt quickly to unexpected situations." },
];

const scale = [-3, -2, -1, 0, 1, 2, 3];

export default function MindFlowTest() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const current = questions[index];
  const progress = ((index + 1) / questions.length) * 100;

  const selectValue = (value) => {
    setAnswers({ ...answers, [current.id]: value });
  };

  const next = () => {
    if (answers[current.id] === undefined) return;
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      console.log("Results:", answers);
      alert("Test completed ✨");
    }
  };

  return (
    <div className="mindflow-wrapper">
      <div className="mindflow-card">
        <div className="progress">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <span className="step">
          Question {index + 1} / {questions.length}
        </span>

        <h2 className="question">{current.text}</h2>

        <div className="scale-labels">
          <span>Disagree</span>
          <span>Agree</span>
        </div>

        <div className="scale-buttons">
          {scale.map((val) => (
            <button
              key={val}
              onClick={() => selectValue(val)}
              className={`scale-btn size-${Math.abs(val)}
                ${answers[current.id] === val ? "active" : ""}`}
            >
              {val > 0 ? `+${val}` : val}
            </button>
          ))}
        </div>

        <button
          className="next-btn"
          onClick={next}
          disabled={answers[current.id] === undefined}
        >
          {index === questions.length - 1 ? "Finish Test" : "Next"}
        </button>
      </div>
    </div>
  );
}
