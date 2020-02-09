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
  DropdownItem,
  FormGroup,
  Label,
  Input
} from 'reactstrap';


function Patient(props) {
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
          <Dropdown group isOpen={dropdownOpen} toggle={toggle}>
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
          <Dropdown group isOpen={dropdownOpen} toggle={toggle}>
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
          <Dropdown group isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Select Saturation Range
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
    <Row>
    {/*This is the second row*/}
      <Col>
        <Card>
          <CardTitle>L-BP</CardTitle>
          <CardText>Prev Blood Pressure</CardText>
          <Dropdown group isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Select BP Range
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>{`> 130/90`}</DropdownItem>
        <DropdownItem>{`<= 130/90 and >= 90/70`}</DropdownItem>
        <DropdownItem>{`< 90/70`}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
        </Card>
        </Col>
        <Col>
        <Card>
          <CardTitle>SURF-STBL</CardTitle>
          <CardText>Stability of Surface Temp</CardText>
          <Dropdown group isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Select
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>{`stable`}</DropdownItem>
        <DropdownItem>{`mod-stable`}</DropdownItem>
        <DropdownItem>{`unstable`}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
        </Card>
        </Col>
        <Col>
        <Card>
          <CardTitle>CORE-STBL</CardTitle>
          <CardText>Core Temp Stability</CardText>
          <Dropdown group isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Select
        </DropdownToggle>
      <DropdownMenu>
      <DropdownItem>{`stable`}</DropdownItem>
      <DropdownItem>{`mod-stable`}</DropdownItem>
      <DropdownItem>{`unstable`}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
        </Card>
        </Col>
    </Row>
    <Row>
    {/*This is the third row*/}
      <Col>
        <Card>
          <CardTitle>BP-STBL</CardTitle>
          <CardText>BP Stability</CardText>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Select
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>{`stable`}</DropdownItem>
        <DropdownItem>{`mod-stable`}</DropdownItem>
        <DropdownItem>{`unstable`}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
        </Card>
        </Col>
        <Col>
        <Card>
          <CardTitle>COMFORT</CardTitle>
          <CardText>Perceived Comfort</CardText>
          <FormGroup>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
        </Input>
      </FormGroup>
        </Card>
        </Col>
        <Col>
        <Card>
          <CardTitle>ADM-DECS</CardTitle>
          <CardText>Discharge Decision</CardText>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Select
        </DropdownToggle>
      <DropdownMenu>
      <DropdownItem>{`I`}</DropdownItem>
      <DropdownItem>{`A`}</DropdownItem>
      <DropdownItem>{`S`}
      {/*There needs to be a thing where if they click this, there will be
        a confirmation thing to make sure they were meant to be sent home*/}
      </DropdownItem>
      </DropdownMenu>
    </Dropdown>
        </Card>
        </Col>
    </Row>
    </div>
  );
}
export default Patient;
