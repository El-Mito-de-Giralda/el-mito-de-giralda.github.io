import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChapterComponent } from './pods/ChapterComponent'
import { SecondChapterComponent } from './pods/SecondChapterComponent'
import { ThirdChapterComponent } from './pods/ThirdChapterComponent'
import { ForthChapterComponent } from './pods/ForthChapterComponent'
import { FifthChapterComponent } from './pods/FifthChapterComponent'
import { SixthChapterComponent } from './pods/SixthChapterComponent'
import { SeventhChapterComponent } from './pods/SeventhChapterComponent'
import { EighthChapterComponent } from './pods/EighthChapterComponent'
import { NinethChapterComponent } from './pods/NinethChapterComponent'
import { TenthChapterComponent } from './pods/TenthChapterComponent'

export const App = () => {
  console.log('Hola')
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChapterComponent />} />
        <Route path="/second" element={<SecondChapterComponent />} />
        <Route path="/third" element={<ThirdChapterComponent />} />
        <Route path="/forth" element={<ForthChapterComponent />} />
        <Route path="/fifth" element={<FifthChapterComponent />} />
        <Route path="/sixth" element={<SixthChapterComponent />} />
        <Route path="/seventh" element={<SeventhChapterComponent />} />
        <Route path="/eighth" element={<EighthChapterComponent />} />
        <Route path="/nineth" element={<NinethChapterComponent />} />
        <Route path="/tenth" element={<TenthChapterComponent />} />
      </Routes>
    </Router>
  )
}
