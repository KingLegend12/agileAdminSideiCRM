import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterSearchTicket } from "../../pages/ticket-lists/ticketsAction";
import PropTypes from "prop-types";
export const SearchForm = () => {
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const { value } = e.target;
    dispatch(filterSearchTicket(value));
    console.log(value);
  };
  //console.log(str);
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label
            column
            sm="3"
            style={{ color: "white", boxShadow: "0px 3px 9px black" }}
          >
            Rechercher:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              name="searchStr"
              onChange={handleOnChange}
              placeholder="Rechercher ..."
            ></Form.Control>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
