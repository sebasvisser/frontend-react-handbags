import React
    from 'react';
import './App.css';
import Buttonclick
    from "./components/Buttonclick";

function App() {
  return (
      <>
          <h1>Handbags & Purses</h1>
          <nav>
              <Buttonclick>123 to the collection</Buttonclick>
              <Buttonclick>shop all bags</Buttonclick>
              <Buttonclick disabled={true}>pre-orders</Buttonclick>
          </nav>
      </>
  );
}

export default App;



