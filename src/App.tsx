import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/HomePage/HomePage';
import { ArticlePage } from './components/ArticlePage/ArticlePage';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { useState } from 'react';
import { Article } from './types/Article';

export function App() {
  const [id, setId] = useState(0);
  const [articles, setArticles] = useState<Article[]>([]);

  return (
    <Routes>
      <Route
        path="/codeBridge"
        element={
          <HomePage
            setId={setId}
            articles={articles}
            setArticles={setArticles}
          />
        }
      />
      <Route
        path="/:id"
        element={<ArticlePage id={id} articles={articles} />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
