import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Category from '@/pages/Category';
import NewsDetail from '@/pages/NewsDetail';
import Search from '@/pages/Search';
import Subscribe from '@/pages/Subscribe';
import About from '@/pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
