import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // 루트 컴포넌트 (관례 상 대부분 App 컴포넌트로 설정함.)
    <App />
)
