/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import './App.css';
import TexasForecast from './TexasForecast';
import RenoForecast from './RenoForecast';
import TampaForecast from './TampaForecast';
function App() {
  return (
    <>
    <TexasForecast />
    <RenoForecast />
    <TampaForecast />
    </>
  )
}

export default App;
