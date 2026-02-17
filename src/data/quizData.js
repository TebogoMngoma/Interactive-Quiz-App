export const quizData = {
  easy: [
    {
      question: "What does HTML stand for?",
      options: [
        { text: "Hyper Text Markup Language", isCorrect: true },
        { text: "High Tech Modern Language", isCorrect: false },
        { text: "Hyperlink and Text Markup Language", isCorrect: false },
        { text: "Home Tool Markup Language", isCorrect: false }
      ]
    },
    {
      question: "Which HTML tag is used for the largest heading?",
      options: [
        { text: "<h6>", isCorrect: false },
        { text: "<h1>", isCorrect: true },
        { text: "<head>", isCorrect: false },
        { text: "<header>", isCorrect: false }
      ]
    }
  ],
  medium: [
    {
      question: "Which hook is used for side effects in React?",
      options: [
        { text: "useState", isCorrect: false },
        { text: "useContext", isCorrect: false },
        { text: "useEffect", isCorrect: true },
        { text: "useMemo", isCorrect: false }
      ]
    },
    {
      question: "What is the correct way to pass a prop to a child component?",
      options: [
        { text: "<Child prop={value} />", isCorrect: true },
        { text: "<Child {value} />", isCorrect: false },
        { text: "<Child call={value} />", isCorrect: false },
        { text: "<Child.prop = {value} />", isCorrect: false }
      ]
    }
  ],
  hard: [
    {
      question: "What is the result of '2' + 2 in JavaScript?",
      options: [
        { text: "4", isCorrect: false },
        { text: "'22'", isCorrect: true },
        { text: "NaN", isCorrect: false },
        { text: "Error", isCorrect: false }
      ]
    },
    {
      question: "Which of these is NOT a CSS position property?",
      options: [
        { text: "static", isCorrect: false },
        { text: "relative", isCorrect: false },
        { text: "fixed", isCorrect: false },
        { text: "center", isCorrect: true }
      ]
    }
  ],
  surprise: [
    {
      question: "What is the capital of France?",
      options: [
        { text: "London", isCorrect: false },
        { text: "Berlin", isCorrect: false },
        { text: "Paris", isCorrect: true },
        { text: "Rome", isCorrect: false }
      ]
    },
    {
      question: "Which fruit is known as the king of fruits?",
      options: [
        { text: "Apple", isCorrect: false },
        { text: "Durian", isCorrect: true },
        { text: "Mango", isCorrect: false },
        { text: "Banana", isCorrect: false }
      ]
    },
    {
      question: "How many colors are in a rainbow?",
      options: [
        { text: "6", isCorrect: false },
        { text: "7", isCorrect: true },
        { text: "8", isCorrect: false },
        { text: "9", isCorrect: false }
      ]
    }
  ]
};
