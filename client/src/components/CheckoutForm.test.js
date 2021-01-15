import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  // arrange
  render(<CheckoutForm />);
  //   act
  //   getting the header element
  const formHeader = screen.getByText(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
  // arrange
  render(<CheckoutForm />);

  //   act
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  const button = screen.getByRole("button");

  //   typing in the values
  userEvent.type(firstNameInput, "shazeen");
  userEvent.type(lastNameInput, "fabius");
  userEvent.type(addressInput, "4903 wiltsie way");
  userEvent.type(cityInput, "san diego");
  userEvent.type(stateInput, "california");
  userEvent.type(zipInput, "92124");

  //   click the checkout buttong
  userEvent.click(button);

  //   assert
  const newFirstNameInput = screen.findByText("shazeen");
  newFirstNameInput.then((firstName) => {
    expect(firstName).toBeInTheDocument();
  });
});
