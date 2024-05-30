import React from 'react';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import { ScrollProvider } from './ScrollContext';


const App = () => {
  return (
    <div>
      <Header />
      <ScrollProvider>
        <MainContent />
      </ScrollProvider>
    </div>
  );
};

export default App;
