import React from 'react';

const ResultCard = ({ score, total, onRestart }) => {
    const percentage = (score / total) * 100;

    let message = "Keep learning!";
    if (percentage === 100) message = "Perfect Score! You're a pro! 🏆";
    else if (percentage >= 80) message = "Great job! Almost perfect! 🌟";
    else if (percentage >= 60) message = "Good effort! Practice makes perfect. 👍";

    return (
        <div className="glass-card" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Quiz Completed!</h2>
            <p style={{ marginBottom: '2rem' }}>{message}</p>

            <div style={{ position: 'relative', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: 'var(--primary)',
                    animation: 'scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                    {score} / {total}
                </div>
            </div>

            <button className="btn btn-primary" onClick={onRestart} style={{ width: '100%' }}>
                Try Again
            </button>

            <style>
                {`
          @keyframes scaleIn {
            from { transform: scale(0); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
            </style>
        </div>
    );
};

export default ResultCard;
