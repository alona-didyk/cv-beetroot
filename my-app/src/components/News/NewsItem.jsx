import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export const NewsItem = ({ urlToImage, content, title }) => {
  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={urlToImage} alt="Top" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

