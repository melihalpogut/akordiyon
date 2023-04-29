import React, { useState, useRef } from 'react'
import questions from './questions'

function App() {
  const [activeQuestion, setActiveQuestion] = useState(null)
  const answerRef = useRef(null)

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  return (
    <div className="App">
      <h1>Questions And Answers About Login</h1>
      <div className="question-list">
        {questions.map((question, index) => (
          <div className="question-box" key={question.id}>
            <div className="question-header" onClick={() => toggleQuestion(index)}>
              <h2>{question.title}</h2>
              <button>{activeQuestion === index ? '-' : '+'}</button>
            </div>
            {activeQuestion === index && (
              <div className="answer-box" ref={answerRef}>
                <p>{question.info}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
