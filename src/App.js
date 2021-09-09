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
import Articles
    from "./components/Articles";

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
              <Articles image={bag1} spanner={"Best seller"} price={"€400,-"}>The handy bag</Articles>
              <Articles image={bag2} spanner={"Best seller"} src={bag2} price={"€250,-"}>The stylish bag</Articles>
              <Articles image={bag3} spanner={"New collection"} src={bag3} price={"€300,-"}>The simple bag</Articles>
              <Articles image={bag4} spanner={"New collection"} src={bag4} price={"€150,-"}>The trendy bag</Articles>
          </main>
      </>
  );
}

export default App;



