import React from 'react';
import {Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';

const FormInputGroupButtonShorthand = (props) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Button>To the Left!</Button>
        </InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="secondary">To the Right!</Button>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Button color="danger">To the Left!</Button>
        </InputGroupAddon>
        <Input placeholder="and..." />
        <InputGroupAddon addonType="append">
          <Button color="success">To the Right!</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default FormInputGroupButtonShorthand;
