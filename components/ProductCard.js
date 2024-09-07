import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ProductCard({ proObj }) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setSelectedQuantity(Number(event.target.value));
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={proObj.image} />
      <Card.Body>
        <Card.Title>{proObj.name}</Card.Title>
        <Card.Text>{proObj.description}</Card.Text>
        <Card.Text>Price: ${proObj.price}</Card.Text>
        <Card.Text>Available: {proObj.quantityAvailable}</Card.Text>

        {/* Quantity Selector Dropdown */}
        <Form.Group controlId="quantitySelect">
          <Form.Label>Select Quantity:</Form.Label>
          <Form.Control
            as="select"
            value={selectedQuantity}
            onChange={handleQuantityChange}
          >
            {[...Array(proObj.quantityAvailable).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button variant="primary">
          Add {selectedQuantity} to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  proObj: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    quantityAvailable: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
