import "./Blog.scss";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";


export const BlogItem = ({ title, body, userId }) => {
  return (
    <Container>
    <Card className="mb-4 bg-danger" role="button" >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
    </Container>

    // <div className="blog__parts">
    //   <div className="blog__parts-item">

    //     <h2>{userId}</h2>
    //     <h3>{title}</h3>
    //     {body}
    //   </div>
    //   <div className="blog__parts-item"></div>
    //   <div className="blog__parts-item"></div>
    //   <div className="blog__parts-item"></div>
    // </div>
  );
};
