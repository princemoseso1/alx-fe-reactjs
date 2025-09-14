import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';   // ✅ Import Counter

function App() {
  return (
    <div>
      <WelcomeMessage />

      <Header />
      <MainContent />

      {/* UserProfile example */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />

      {/* Counter example */}
      <Counter />   {/* ✅ Render Counter here */}

      <Footer />
    </div>
  );
}

export default App;
