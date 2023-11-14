import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

const rootApp = createRoot(document.getElementById('root')!)

rootApp.render(
    <StrictMode>
        <App />
    </StrictMode>,
)
