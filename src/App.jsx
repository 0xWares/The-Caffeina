import React from 'react'
// import Home from './components/pages/Home'
// import Contact from './components/pages/Contact'
import { Route, Routes } from 'react-router-dom'
import CaffeinaJournal from './components/pages/CaffeinaJournal'
import Contents from './components/Contents'
import CulturalEssays from './components/navComponents/CulturalEssays'
import ResearchPapers from './components/navComponents/ResearchPapers'
import FieldStories from './components/navComponents/FieldStories'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<CaffeinaJournal/>}>
          <Route index element={<CulturalEssays/>}/>
          <Route path='culturalessays' element={<CulturalEssays/>}/>
          <Route path='fieldstories' element={<FieldStories/>}/>
          <Route path='researchpapers' element={<ResearchPapers/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App