import { Auth0Provider } from '@auth0/auth0-react';
import { HeroUIProvider } from '@heroui/react';
import { ConfigCatProvider } from "configcat-react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.toString()
      }}
    >
      <ConfigCatProvider sdkKey={import.meta.env.VITE_CONFIG_CAT_KEY}>
        <HeroUIProvider>
          <App />
        </HeroUIProvider>
      </ConfigCatProvider>
    </Auth0Provider>
  </StrictMode>,
)
