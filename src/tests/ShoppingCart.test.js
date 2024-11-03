import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ShoppingForm from "../components/UI/select/form.jsx";
import shopping_cart from "../assets/icons/cross.svg";

describe("ShoppingForm", () => {
    const mockOnAddToCart = jest.fn();
  
    beforeEach(() => {
      render(
        <ShoppingForm 
          img="https://example.com/image.jpg" 
          name="Test Product" 
          price={29.99} 
          onAddToCart={mockOnAddToCart} 
        />
      );
    });
  
    test("renders product image, name, and price", () => {
      const nameElement = screen.getByText("Test Product");
      const priceElement = screen.getByText("29.99 $");
  
      expect(nameElement).toBeInTheDocument();
      expect(priceElement).toBeInTheDocument();
    });
  
    test("calls onAddToCart when the button is clicked", () => {
      const buttonElement = screen.getByRole("button");
      fireEvent.click(buttonElement);
  
      expect(mockOnAddToCart).toHaveBeenCalled();
    });
  });