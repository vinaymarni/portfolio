import React, { useState } from 'react';
import './App.css';
import Footer from './components/home/Footer';
import Header from './components/home/Header';
import Home from './components/home/Home';
import DetailsBlock from './components/allBlocks/DetailsBlock';

function App() {

  const [block, setBlock] = useState("Hello");
  const [selectedSections, setSelectedSections ] = useState([]);

  const onSelect = (e, name, index) => {
      if(e != undefined) {
        let section = e.target.value;
        
        setBlock(section);

        if(section != "Hello" && !selectedSections.includes(section)){
          setSelectedSections([...selectedSections, section]);
        }
    }else{
        let prevSections = [...selectedSections];
        prevSections.splice(index, 1);
        setSelectedSections(prevSections);

        if(block == name){
          setBlock(prevSections[0]);
        }

        if(prevSections.length == 0){
          setBlock("Home");
        }

    }
  };


  return (
    <div className="App">
      <div className="appInnerContainer">
        <Header block={block} onSelect={onSelect} />
          {block == "Hello" ?
              <Home />
          :
              <DetailsBlock block={block} onSelect={onSelect} selectedSections={selectedSections} />
          }
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
