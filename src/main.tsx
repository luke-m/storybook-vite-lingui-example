import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {I18nApp} from "./i18n.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <I18nApp />
    </React.StrictMode>,
)
