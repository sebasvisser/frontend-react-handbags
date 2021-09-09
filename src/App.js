import React
    from 'react';
import './App.css';
import Buttonclick
    from "./components/Buttonclick";
import Products
    from "./components/Products";
import Tile
    from "./components/Tile";
// image imports, because why?
import bag1
    from "./assets/bag_1.png";
import bag2
    from "./assets/bag_2.png";
import bag3
    from "./assets/bag_3.png";
import bag4
    from "./assets/bag_4.png";
import brand
    from "./assets/brand.png";
import story
    from "./assets/our_story.png";

function App() {
  return (
      <>
          <h1>Handbags & Purses</h1>
          <nav>
              <Buttonclick>to the collection</Buttonclick>
              <Buttonclick>shop all bags</Buttonclick>
              <Buttonclick disabled={true}>pre-orders</Buttonclick>
          </nav>
          <main>
              <Products image={bag1} spanner={"Best seller"} price={"€400,-"}>The handy bag</Products>
              <Products image={bag2} spanner={"Best seller"} src={bag2} price={"€250,-"}>The stylish bag</Products>
              <Products image={bag3} spanner={"New collection"} src={bag3} price={"€300,-"}>The simple bag</Products>
              <Products image={bag4} spanner={"New collection"} src={bag4} price={"€150,-"}>The trendy bag</Products>
          </main>
          <footer>
              <Tile header={"the brand"}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
              </Tile>
              <Tile altimage={"The Brand"} imagesrc={brand} />
              <Tile altimage={"Our story"} imagesrc={story} />
              <Tile header={"our story"}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
              </Tile>
          </footer>
      </>
  );
}

export default App;
