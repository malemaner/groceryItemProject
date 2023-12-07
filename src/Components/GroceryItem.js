import React from 'react';
import Button from './Button';

function GroceryItem(props) {
  function handleClick() {
    alert(`Added ${props.name} to the cart`);
  }

  return (
    <Button onClick={handleClick}>
      {props.name}
    </Button>
  );
}

export default GroceryItem;
