import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCardComponent = ({ category, idx }) => {
  
  return (
    <Card style={{
      display: 'flex',
      width: '20%',
      marginRight: '10px',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '12px',
      padding: '20px',
      paddingBottom: '5px',
      borderColor: '#0C6DFD',
    }}>
      <Card.Img crossOrigin="anonymous" variant="top" src={category.image ?? null} />
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
        <Card.Text>
          {category.description}
        </Card.Text>
        <LinkContainer to={`/product-list/category/${category.name}`}>
          <Button size="sm" variant="primary">Go to the Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
