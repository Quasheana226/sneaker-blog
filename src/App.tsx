//ROUTE MAP

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <Navbar />
      <Routes>
        {/*show post list  */}
        <Route path='/' element={<BlogPage />} />
        <Route path='blog' element={<BlogPage />} />


        {/*URl parameter */}
        <Route path='/blog/:slug' element={<BlogPostPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path='/admin'
          element={
            <ProtectedRoute>
              <AdminPage />

            </ProtectedRoute>
          } />

        <Route path='*' element={<NotFoundPage />} />

      </Routes>




    </div>
  )
}

export default App
