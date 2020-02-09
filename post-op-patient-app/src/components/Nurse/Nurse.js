import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';


const Nurse = () =>{

  const [activeTab, setActiveTab] = useState('1');

const toggle = tab => {
  if(activeTab !== tab) setActiveTab(tab);
}

  return(
    <div className="nurse-page">
      <h2>This is from nurse.js</h2>
      <div>
     <Nav tabs>
       <NavItem>
         <NavLink
           className={classnames({ active: activeTab === '1' })}
           onClick={() => { toggle('1'); }}
         >
           View Patient
         </NavLink>
       </NavItem>
       <NavItem>
         <NavLink
           className={classnames({ active: activeTab === '2' })}
           onClick={() => { toggle('2'); }}
         >
           Create Patient
         </NavLink>
       </NavItem>
       <NavItem>
         <NavLink
           className={classnames({ active: activeTab === '2' })}
           onClick={() => { toggle('2'); }}
         >
           Update Patient
         </NavLink>
       </NavItem>
     </Nav>
     <TabContent activeTab={activeTab}>
       <TabPane tabId="1">
         <Row>
           <Col sm="12">
             <h4>{`Patient Name: `}</h4>
           </Col>
         </Row>
       </TabPane>
       <TabPane tabId="2">
         <Row>
           <Col sm="6">
             <Card body>
               <CardTitle>Special Title Treatment</CardTitle>
               <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
               <Button>Go somewhere</Button>
             </Card>
           </Col>
           <Col sm="6">
             <Card body>
               <CardTitle>Special Title Treatment</CardTitle>
               <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
               <Button>Go somewhere</Button>
             </Card>
           </Col>
         </Row>
       </TabPane>
     </TabContent>
   </div>
    </div>
  )
}

export default Nurse;
