import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@heroui/react";
import { FeatureFlagsList } from './components/featureFlagsList';
import DesktopLayout from './layouts/desktopLayout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DesktopLayout>
          <div className='flex flex-row justify-center'>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className='text-4xl font-bold '>Vite + React</h1>
          <div>
            <Button onPress={() => setCount((count) => count + 1)} color="primary">count is {count}</Button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          <FeatureFlagsList></FeatureFlagsList>
      </DesktopLayout>
    </>
  )
}

export default App
