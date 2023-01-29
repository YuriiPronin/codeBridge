import React, { useEffect, useState } from 'react';
import '../ArticlePage/articlePageStyles.scss';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { Article } from '../../types/Article';

type Props = {
  id: number;
  articles: Article[];
};

export const ArticlePage: React.FC<Props> = ({ id, articles }) => {

  const fullArticle = articles.find((article) => article.id === id);

  return (
    <div className='articlePageBody'>
      <Card className="articlePage">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="article image"
            height="500"
            image={fullArticle?.imageUrl}
            title="article image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {fullArticle?.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {fullArticle?.summary}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={(event) => (window.location.href = '/codeBridge')}
          >
            Back to home page
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
