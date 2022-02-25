import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");
  const location = useLocation();
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/?keyword=${keyword}&page=1`);
    } else {
      navigate(location.pathname);
    }
  };
  return (
    <Form onSubmit={submitHandler}>
      <Row>
        <Col>
          <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            className="mr-sm-2 ml-sm-5"
          ></Form.Control>
        </Col>

        <Col>
          <Button type="submit" variant="outline-success" className="p-2">
            Search product
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBox;
