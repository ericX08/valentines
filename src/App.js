import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


const CountdownPage = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const targetDate = new Date('2025-02-14T00:00:00+01:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#fdf2f8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    textAlign: 'center'
  };

  const timeBlockStyle = {
    backgroundColor: 'white',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    margin: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    minWidth: '120px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#db2777', marginBottom: '2rem' }}>
        Time Until Valentine's Day
      </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        <div style={timeBlockStyle}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#db2777' }}>
            {timeLeft.days}
          </div>
          <div>Days</div>
        </div>
        <div style={timeBlockStyle}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#db2777' }}>
            {timeLeft.hours}
          </div>
          <div>Hours</div>
        </div>
        <div style={timeBlockStyle}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#db2777' }}>
            {timeLeft.minutes}
          </div>
          <div>Minutes</div>
        </div>
        <div style={timeBlockStyle}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#db2777' }}>
            {timeLeft.seconds}
          </div>
          <div>Seconds</div>
        </div>
      </div>
    </div>
  );
};

const ValentinesQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showLoveNote, setShowLoveNote] = useState(false);
  const [allCorrect, setAllCorrect] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const questions = [
    {
      questionText: 'what was the first meal we had together?',
      answerOptions: [
        { answerText: 'Ramen', isCorrect: true },
        { answerText: 'Avo Toast', isCorrect: false },
        { answerText: 'Sushi', isCorrect: false },
        { answerText: 'Dumplings', isCorrect: false },
      ],
    },
    {
      questionText: 'What show did we actually watch together?',
      answerOptions: [
        { answerText: 'Outer Banks', isCorrect: false },
        { answerText: 'Ted Lasso', isCorrect: true },
        { answerText: 'Suits', isCorrect: false },
        { answerText: 'Euphoria', isCorrect: false },
      ],
    },
    {
      questionText: 'What is our future plans together?',
      answerOptions: [
        { answerText: 'Retired Golfers', isCorrect: false },
        { answerText: 'Pickleball Pros', isCorrect: true },
        { answerText: 'Cafe Owner', isCorrect: true },
        { answerText: 'gym/pilates coach', isCorrect: false },
      ],
    },
    {
      questionText: 'What was our first planned trip together?',
      answerOptions: [
        { answerText: 'Texas', isCorrect: false },
        { answerText: 'California', isCorrect: false },
        { answerText: 'New York', isCorrect: false },
        { answerText: 'Vermont', isCorrect: true },
      ],
    },
  ];

  const handleAnswerClick = (isCorrect) => {
    if (!isCorrect) {
      setAllCorrect(false);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowLoveNote(true);
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#fdf2f8',
    padding: '1rem'
  };

  if (showVideo) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#fdf2f8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            aspectRatio: "16/9",
            backgroundColor: "black",
            borderRadius: "0.5rem",
            overflow: "hidden",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/FHzzpCiOrVk?autoplay=1&fs=1"
            title="Valentine's Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
  

  if (showLoveNote) {
    return (
      <div style={{ 
        minHeight: '100vh',
        backgroundColor: '#fdf2f8',
        padding: '2rem'
      }}>
        {allCorrect ? (
          <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <h2 style={{ color: '#db2777', marginBottom: '1rem' }}>
                ❤️ You got everything right! ❤️
              </h2>
              <p style={{ marginBottom: '2rem' }}>
                Click below to watch a special video message
              </p>
              <button
                onClick={() => setShowVideo(true)}
                style={{
                  backgroundColor: '#ec4899',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.375rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Watch Video ▶️
              </button>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#db2777', marginBottom: '1rem' }}>
              Oops! Some answers weren't quite right.
            </h2>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setAllCorrect(true);
                setShowLoveNote(false);
              }}
              style={{
                backgroundColor: '#ec4899',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      {/* Quiz content remains the same */}
      <div style={{
        maxWidth: '42rem',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          backgroundColor: '#fce7f3',
          padding: '1.5rem'
        }}>
          <h2 style={{ textAlign: 'center', color: '#db2777' }}>
            ❤️ Valentine's Quiz ❤️
          </h2>
        </div>
        <div style={{ padding: '1.5rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937' }}>
              Question {currentQuestion + 1}/{questions.length}
            </h2>
            <p style={{ marginTop: '0.5rem', fontSize: '1.125rem', color: '#374151' }}>
              {questions[currentQuestion].questionText}
            </p>
          </div>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answerOption.isCorrect)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.75rem',
                  border: '1px solid #f9a8d4',
                  borderRadius: '0.375rem',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isValentinesDay, setIsValentinesDay] = useState(false);
  
  const checkIfValentinesDay = () => {
    const now = new Date();
    const valentinesDay = new Date('2025-02-14T00:00:00');
    return now >= valentinesDay;
  };

  useEffect(() => {
    setIsValentinesDay(checkIfValentinesDay());
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isValentinesDay ? (
              <ValentinesQuiz />
            ) : (
              <CountdownPage/>
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;