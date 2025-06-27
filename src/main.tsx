import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigCatProvider } from "configcat-react";
import { HeroUIProvider } from '@heroui/react'
import { Auth0Provider } from '@auth0/auth0-react';

const configCatKey = "configcat-sdk-1/TbXdCMZii0WKnjpSmmWNKw/q328WyZg5USrnPo9dLcD_A";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-f6vjtxopx4qxeo3j.us.auth0.com"
      clientId="XOXBVdGsUmhis657stHeCfTwhgcHRU0O"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <ConfigCatProvider sdkKey={configCatKey}>
        <HeroUIProvider>
          <App />
        </HeroUIProvider>
      </ConfigCatProvider>
    </Auth0Provider>
  </StrictMode>,
)
