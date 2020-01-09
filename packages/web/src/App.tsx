import React, { Suspense } from 'react'
import PagesRouter from './pages'
import GlobalStyles from './globalStyles'

const App: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      <GlobalStyles />
      <PagesRouter />
    </Suspense>
  )
}

export default App
