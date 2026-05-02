import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CaffeinaJournal from './components/pages/CaffeinaJournal'
import Contents from './components/Contents'
import CulturalEssays from './components/navComponents/CulturalEssays'
import ResearchPapers from './components/navComponents/ResearchPapers'
import FieldStories from './components/navComponents/FieldStories'
import AllResearchPapers from './components/navComponents/allPapers/AllResearchPapers'
import AllFieldStories from './components/navComponents/allStories/AllFieldStories'
import AllCulturalEssays from './components/navComponents/allEssays/AllCulturalEssays'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<CaffeinaJournal />}>
          <Route index element={<Navigate to="researchpapers" replace />} />
          <Route path='culturalessays' element={<CulturalEssays />} />
          <Route path='fieldstories' element={<FieldStories />} />
          <Route path='researchpapers' element={<ResearchPapers />} />
        </Route>
        <Route path='/all-research-papers' element={<AllResearchPapers/>}/>
        <Route path='/all-field-story' element={<AllFieldStories/>}/>
        <Route path="/all-cultural-essays" element={<AllCulturalEssays/>}/>
      </Routes>
    </div>
  )
}

export default App