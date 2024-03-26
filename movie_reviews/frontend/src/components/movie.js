import React, { useState, useEffect } from 'react'
import MovieDataService from '../services/moviesDataService'
import { Link, useParams } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Movie = (user) => {
  const [movie, setMovie] = useState({
    id: null,
    title: "",
    rated: "",
    reviews: []
  })
  let { id } = useParams();

  const getMovie = id => {
    MovieDataService.get(id)
      .then(response => {
        setMovie(response.data)
        console.log(response.data)
      })
      .catch(e => {
        console.log(e);
      })
  }
  
  useEffect(() => {
    getMovie(id)
  }, [id])

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Image src={movie.poster + "/100px250"} fluid />
          </Col>
          <Col>
            <Card>
              <Card.Header as="h5">{movie.title}</Card.Header>
              <Card.Body>
                <Card.Text>
                  {movie.plot}
                </Card.Text>
                {user &&
                  <Link to={"/movies/" + id + "/review"}>
                    Add Review
                  </Link>}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Movie;
