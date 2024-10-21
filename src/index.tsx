import React from 'react'
import './mystyle.scss'
import { App } from './app'
import { createRoot } from 'react-dom/client'

const RootElement = document.getElementById('root')
const root = createRoot(RootElement)

root.render(<App />)
