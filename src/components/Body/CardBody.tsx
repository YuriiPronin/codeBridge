import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Marker } from 'react-mark.js';
import '../Body/bodyStyles.scss';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { getAllArticles } from '../../API/API';
import { Article } from '../../types/Article';
import { Loader } from '../Loader/Loader';

type Props = {
  query: string;
  setId: (value: number) => void;
  articles: Article[];
  setArticles: (value: Article[]) => void;
};

export const CardBody: React.FC<Props> = ({
  query,
  setId,
  articles,
  setArticles,
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  async function setAllArticles() {
    try {
      const allArticles = await getAllArticles();
      setArticles(allArticles);
    } catch (error) {
      throw new Error('error');
    }
  }

  useEffect(() => {
    setAllArticles();
    setLoading(false);
  }, []);

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(query.toLowerCase().trim()) ||
      article.summary.toLowerCase().includes(query.toLowerCase().trim())
  );

  return (
    <>
      <p className="resultsCount">Results: {filteredArticles.length}</p>
      <div className="body">
        {loading ? (
          <Loader />
        ) : (
          filteredArticles.map((article) => (
            <Card key={article.id} className="Card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="cover image"
                  height="180"
                  image={article.imageUrl}
                  title="Contemplative Reptile"
                />
                <CardContent className="cardContent">
                  <Marker mark={query}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {article.summary}
                    </Typography>
                  </Marker>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/${article.id}`}>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(event) => setId(article.id)}
                  >
                    Read more
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))
        )}
      </div>
    </>
  );
};
