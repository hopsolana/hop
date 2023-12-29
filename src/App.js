import React, { useState, useRef } from 'react';
import Dropdown from './Dropdown';
import ImageDisplay from './ImageDisplay';

function App() {
  const [background, setBackground] = useState('');
  const [bunny, setBunny] = useState('');
  const [accessory, setAccessory] = useState('');

  const backgrounds = [
    "black.png", "blue.png", "brown.png", "gray.png", "green.png", 
    "orange.png", "pink.png", "purple.png", "red.png", "white.png", "yellow.png"
  ]; // Add your background filenames here
  const bunnies = ["white.png", "black.png", "pink.png", "gray.png", "brown.png"]; // Add your bunny filenames here
  const accessories = [
    "bat.png", "beret.png", "black hat.png",
    "blue hoodie.png",
    "brain.png",
    "bubblegum.png",
    "carrot.png", "cigar.png",
    "cowboy.png",
    "crown.png",
    "crying.png",
    "flower crown.png",
    "goggles.png",
    "gojo.png", "gold chain.png",
    "halo.png", "laser.png",
    "mask.png",
    "mint headband.png",
    "monocle.png",
    "ninja.png",
    "none.png",
    "rainbow beard.png",
    "scar.png",
    "solana.png",
    "sunglasses.png",
    "vampire.png", "whiskers.png"
  ];
  

  const imageRef = useRef(null); // Ref for the ImageDisplay component

  const handleExport = async () => {
    const canvas = await imageRef.current.getCanvas();
    const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const link = document.createElement('a');
    link.download = 'custom.png';
    link.href = image;
    link.click();

  };

  return (
    <div className="App">
      <h1>teen x</h1>
      <Dropdown label="Background" options={backgrounds} folder="backgrounds" onSelect={setBackground} />
      <Dropdown label="Bunny" options={bunnies} folder="bunnies" onSelect={setBunny} />
      <Dropdown label="Accessory" options={accessories} folder="accessories" onSelect={setAccessory} />
      <button onClick={handleExport}>export</button>
      <ImageDisplay images={[background, bunny, accessory]} ref={imageRef} />
    </div>
    
  );
}

export default App;
