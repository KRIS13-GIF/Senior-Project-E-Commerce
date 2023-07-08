import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";

const ProductForListComponent = ({ productId, name, description, price, images, rating, reviewsNumber }) => {
  return (
    <Card style={{ padding:20,marginTop:"2rem" }}>
      <Row>
        <Col lg={6}>
          <Card.Img
            crossOrigin="anonymous"
            variant="top"
            src={images[0] ? images[0].path : ''}
            style={{ width:"50%", objectFit: 'cover', }}
          />
        </Col>
        <Col lg={6}>
          <Card.Body style={{marginLeft:"-14rem"}}>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={rating} /> ({reviewsNumber})
            </Card.Text>
            <Card.Text className="h4" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                width: '40%',
              }}>
              ${price}{" "}
              <LinkContainer to={`/product-details/${productId}`}>
                <Button size="sm" variant="primary">See product</Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponent;
