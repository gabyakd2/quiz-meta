"use client";
import React, { useState, useRef } from "react";
import { questions } from "@/utils/questions";
import { Button } from "@nextui-org/react";

function QandA() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [punctuation, setPunctuation] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement>(null);


  const handleAnswerSubmit = (isCorrect: boolean) => {
    if (isCorrect) setPunctuation(punctuation + 1);
    // buttonRef.current?.classList.add(isCorrect ? "bg-green-500" : "bg-red-500 hover:bg-red-500")
    if(currentQuestion === questions.length - 1){
      setIsFinished(true);
    }else{
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  if(isFinished) return (
    <div>
      <span>
        Obtuviste {punctuation} de {questions.length}
      </span>
    </div>
  )

  return (
    <div>
      <span>
        Question {currentQuestion + 1} of {questions.length}
      </span>
      <h3>{questions[currentQuestion].title}</h3>
      <div className="flex flex-col gap-2">
        {questions[currentQuestion].options.map((question, index) => (
          <Button
            key={index}
            onClick={() => handleAnswerSubmit(question.isCorrect)}
            // className={`${question.isCorrect ? "focus:bg-green-500 active:bg-green-500" : "focus:bg-red-500 active:bg-red-500"}`}
            ref={buttonRef}
          >
            {question.response}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default QandA;
