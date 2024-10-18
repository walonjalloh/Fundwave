import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<App/>}/>
      </Routes>
    </AuthProvider>
    </Router>
  </StrictMode>,
)
