import React from 'react';

const Landing = () => {
  const getStarted = () => {
    alert('Welcome to ForeverU! Let\'s get started with preserving your memories.');
  };

  return (
    <section className="landing">
      <div className="landing-content">
        <h1>Welcome to ForeverU</h1>
        <p>Preserve and cherish the memories of your loved ones. Connect with them through AI-powered conversations.</p>
        <button className="btn" onClick={getStarted}>Get Started</button>
      </div>
    </section>
  );
};

export default Landing;