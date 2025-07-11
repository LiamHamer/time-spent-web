import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@heroui/react";
import { FeatureFlagsList } from './components/featureFlagsList';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Profile from './components/profile';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=' h-screen grid grid-flow-row grid-cols-5 grid-rows-5 gap-3'>
      <div className='flex flex-col col-start-2 col-end-5 row-start-2 row-span-3 gap-10 text-center'>
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
      </div>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <FeatureFlagsList></FeatureFlagsList>
      <Profile></Profile>
    </div>
  )
}

export default App
