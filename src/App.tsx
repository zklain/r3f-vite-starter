import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className='App'>
      <Canvas>
        <OrbitControls makeDefault />
        <ambientLight />
        <color attach='background' args={['#2d1b50']} />
        <Box args={[1, 1, 1]}>
          <meshStandardMaterial color='white' />
        </Box>
      </Canvas>
    </div>
  );
}

export default App;
