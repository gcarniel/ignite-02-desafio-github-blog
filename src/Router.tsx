import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/default'
import { PageHome } from './pages/home'
import { PagePost } from './pages/post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<PageHome />} />
        <Route path=":postNumber" element={<PagePost />} />
      </Route>
    </Routes>
  )
}
