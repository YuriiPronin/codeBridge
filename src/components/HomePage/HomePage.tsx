import { useState } from 'react';
import { Header } from '../Header/Header';
import { CardBody } from '../Body/CardBody';
import { Article } from '../../types/Article';

type Props = {
  setId: (value: number) => void;
  articles: Article[];
  setArticles: (value: Article[]) => void;
};

export const HomePage: React.FC<Props> = ({ setId, articles, setArticles }) => {
  const [query, setQuery] = useState('');

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <CardBody
        query={query}
        setId={setId}
        articles={articles}
        setArticles={setArticles}
      />
    </>
  );
};
