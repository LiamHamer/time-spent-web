import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigCatProvider } from "configcat-react";
import { HeroUIProvider } from '@heroui/react'

const configCatKey = "configcat-sdk-1/TbXdCMZii0WKnjpSmmWNKw/q328WyZg5USrnPo9dLcD_A";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigCatProvider sdkKey={configCatKey}>
      <HeroUIProvider>
        <App />
      </HeroUIProvider>
    </ConfigCatProvider>
  </StrictMode>,
)
