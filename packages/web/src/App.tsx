import React, { Suspense } from 'react'
import Root from './pages/Root'

const App: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      <Root />
    </Suspense>
  )
}

export default App
