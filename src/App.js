import React
    from 'react';
import './App.css';
import Buttonclick
    from "./components/Buttonclick";
import bag1
    from "./assets/bag_1.png";
import bag2
    from "./assets/bag_2.png";
import bag3
    from "./assets/bag_3.png";
import bag4
    from "./assets/bag_4.png";

function App() {
  return (
      <>
          <h1>Handbags & Purses</h1>
          <nav>
              <Buttonclick>123 to the collection</Buttonclick>
              <Buttonclick>shop all bags</Buttonclick>
              <Buttonclick disabled={true}>pre-orders</Buttonclick>
          </nav>
          <main>
              <article>
                  <span>Best seller</span>
                  <img alt="The handy bag" src={bag1} />
                  <p>The handy bag</p>
                  <h4>400,-</h4>
              </article>
              <article>
                  <span>Best seller</span>
                  <img alt="The stylish bag" src={bag2}/>
                  <p>The stylish bag</p>
                  <h4>250,-</h4>
              </article>
              <article>
                  <span>New collection</span>
                  <img alt="The simple bag" src={bag3}/>
                  <p>The simple bag</p>
                  <h4>300,-</h4>
              </article>
              <article>
                  <span>New collection</span>
                  <img alt="The trendy bag" src={bag4}/>
                  <p>The trendy bag</p>
                  <h4>150,-</h4>
              </article>
          </main>
      </>
  );
}

export default App;



