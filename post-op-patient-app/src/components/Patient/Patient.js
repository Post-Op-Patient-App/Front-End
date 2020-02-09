import React, {useState} from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Col,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';


function Patient() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="patient">
    <h1>Hello from Patient.js</h1>
    <Row>
      <Col>
        <Card>
          <CardTitle>L-CORE</CardTitle>
          <CardText>Internal Temp</CardText>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          {/*This does run a bug that allows all 3 to open at the same time but
            it can be solved later!
            */}
      <DropdownToggle caret>
        Select Temp Range
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Celcius</DropdownItem>
        <DropdownItem>{`>37°`}</DropdownItem>
        <DropdownItem>{`36-37°`}</DropdownItem>
        <DropdownItem>{`<36°`}</DropdownItem>
        <DropdownItem divider />
        <DropdownItem header>Fahrenheit</DropdownItem>
        <DropdownItem>{`>98.6°`}</DropdownItem>
        <DropdownItem>{`96.8-98.6°`}</DropdownItem>
        <DropdownItem>{`<96.8°`}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
        </Card>
        </Col>
        <Col>
        <Card>
          <CardTitle>L-SURF</CardTitle>
          <CardText>Surface Temp</CardText>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Select Temp Range
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Celcius</DropdownItem>
        <DropdownItem>{`>36.5°`}</DropdownItem>
        <DropdownItem>{`36.5-35°`}</DropdownItem>
        <DropdownItem>{`<35°`}</DropdownItem>
        <DropdownItem divider />
        <DropdownItem header>Fahrenheit</DropdownItem>
        <DropdownItem>{`>97.7°`}</DropdownItem>
        <DropdownItem>{`95-97.7°`}</DropdownItem>
        <DropdownItem>{`<95°`}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
        </Card>
        </Col>
        <Col>
        <Card>
          <CardTitle>L-O2</CardTitle>
          <CardText>Oxygen Saturation</CardText>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Select Temp Range
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Percentage</DropdownItem>
        <DropdownItem>{`>=98%`}</DropdownItem>
        <DropdownItem>{`90-98%`}</DropdownItem>
        <DropdownItem>{`>97.7%`}</DropdownItem>
        <DropdownItem>{`>98.6°`}</DropdownItem>
        <DropdownItem>{`95%-97.7%°`}</DropdownItem>
        <DropdownItem>{`<95%`}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
        </Card>
        </Col>
    </Row>
    </div>
  );
}
export default Patient;
