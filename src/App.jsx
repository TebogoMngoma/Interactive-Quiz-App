import React, { useState } from 'react';
import QuizCard from './components/QuizCard';
import ResultCard from './components/ResultCard';
import { quizData } from './data/quizData';

function App() {
  const [quizState, setQuizState] = useState('start'); // start, quiz, result
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [currentQuizData, setCurrentQuizData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const startQuiz = (category) => {
    setSelectedCategory(category);
    const categoryData = quizData[category];

    // Shuffle options for all questions in the selected category
    const shuffledData = categoryData.map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));

    setCurrentQuizData(shuffledData);
    setScore(0);
    setCurrentIdx(0);
    setQuizState('quiz');
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(prev => prev + 1);

    if (currentIdx + 1 < currentQuizData.length) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setQuizState('result');
    }
  };

  const goToMenu = () => {
    setQuizState('start');
    setCurrentQuizData([]);
    setSelectedCategory(null);
  };

  return (
    <main style={{ padding: '1rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
      {quizState === 'start' && (
        <div className="glass-card" style={{ textAlign: 'center' }}>
          <span className="score-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Choose Your Section</span>
          <h1>Web Dev Quiz</h1>
          <p style={{ marginBottom: '2.5rem' }}>
            Select a difficulty level to begin your knowledge test.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            <button className="btn btn-outline" onClick={() => startQuiz('easy')} style={{ padding: '1.2rem' }}>
              🟢 Easy
            </button>
            <button className="btn btn-outline" onClick={() => startQuiz('medium')} style={{ padding: '1.2rem' }}>
              🟡 Medium
            </button>
            <button className="btn btn-outline" onClick={() => startQuiz('hard')} style={{ padding: '1.2rem' }}>
              🔴 Hard
            </button>
            <button className="btn btn-primary" onClick={() => startQuiz('surprise')} style={{ padding: '1.2rem' }}>
              ✨ Surprise!
            </button>
          </div>
        </div>
      )}

      {quizState === 'quiz' && currentQuizData.length > 0 && (
        <QuizCard
          questionData={currentQuizData[currentIdx]}
          questionNumber={currentIdx + 1}
          totalQuestions={currentQuizData.length}
          onAnswer={handleAnswer}
          onBack={goToMenu}
        />
      )}

      {quizState === 'result' && (
        <ResultCard
          score={score}
          total={currentQuizData.length}
          onRestart={goToMenu}
        />
      )}
    </main>
  );
}

export default App;
