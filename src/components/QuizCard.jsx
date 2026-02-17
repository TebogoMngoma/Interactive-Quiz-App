import React, { useState, useEffect } from 'react';

const QuizCard = ({ questionData, onAnswer, onBack, questionNumber, totalQuestions }) => {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        setSelectedOptionIndex(null);
        setIsAnswered(false);
        setShowConfirmation(false);
    }, [questionData]);

    const handleSelect = (index) => {
        if (isAnswered || showConfirmation) return;
        setSelectedOptionIndex(index);
        setShowConfirmation(true);
    };

    const handleConfirm = () => {
        setShowConfirmation(false);
        setIsAnswered(true);

        // Smooth delay before next question
        setTimeout(() => {
            onAnswer(questionData.options[selectedOptionIndex].isCorrect);
        }, 1500);
    };

    const handleCancel = () => {
        setSelectedOptionIndex(null);
        setShowConfirmation(false);
    };

    return (
        <div className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <button
                    onClick={onBack}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-muted)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        fontWeight: '600'
                    }}
                >
                    ← Back to Menu
                </button>
                <span className="score-badge">Question {questionNumber} of {totalQuestions}</span>
            </div>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: '1.4' }}>
                {questionData.question}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {questionData.options.map((option, index) => {
                    let className = "btn btn-outline";
                    let style = {
                        textAlign: 'left',
                        width: '100%',
                        padding: '1.2rem',
                        transition: 'all 0.3s ease'
                    };

                    if (index === selectedOptionIndex) {
                        style.borderColor = 'var(--primary)';
                        style.background = 'rgba(139, 92, 246, 0.1)';
                    }

                    if (isAnswered) {
                        if (option.isCorrect) {
                            style.borderColor = 'var(--success)';
                            style.background = 'rgba(16, 185, 129, 0.1)';
                            style.color = 'var(--success)';
                        } else if (index === selectedOptionIndex) {
                            style.borderColor = 'var(--error)';
                            style.background = 'rgba(239, 68, 68, 0.1)';
                            style.color = 'var(--error)';
                        }
                    }

                    return (
                        <button
                            key={index}
                            className={className}
                            style={style}
                            onClick={() => handleSelect(index)}
                            disabled={isAnswered || showConfirmation}
                        >
                            {option.text}
                        </button>
                    );
                })}
            </div>

            {showConfirmation && (
                <div style={{
                    marginTop: '2rem',
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '16px',
                    border: '1px solid var(--glass-border)',
                    animation: 'fadeIn 0.4s ease-out'
                }}>
                    <p style={{ color: 'var(--text-main)', marginBottom: '1rem', fontWeight: '600' }}>
                        Are you sure your answer is correct?
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="btn btn-primary" onClick={handleConfirm} style={{ flex: 1 }}>
                            I'm Sure
                        </button>
                        <button className="btn btn-outline" onClick={handleCancel} style={{ flex: 1 }}>
                            Let me try again
                        </button>
                    </div>
                </div>
            )}

            {isAnswered && (
                <p style={{
                    marginTop: '1.5rem',
                    color: questionData.options[selectedOptionIndex].isCorrect ? 'var(--success)' : 'var(--error)',
                    fontWeight: '600',
                    animation: 'fadeIn 0.3s ease'
                }}>
                    {questionData.options[selectedOptionIndex].isCorrect ? "✨ Correct! Well done." : "❌ Incorrect. Keep going!"}
                </p>
            )}
        </div>
    );
};

export default QuizCard;
