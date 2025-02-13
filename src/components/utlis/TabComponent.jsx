import { useState } from "react";
import { Container, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from "reactstrap";
import classnames from "classnames";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("1");



  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">One learning platform. Endless possibilities</h2>

      {/* Tabs Navigation */}
      <Nav tabs className="justify-content-center">
        {["Tab 1", "Tab 2", "Tab 3", "Tab 4"].map((label, index) => (
          <NavItem key={index}>
            <NavLink
              className={classnames({ active: activeTab === `${index + 1}` })}
              onClick={() => setActiveTab(`${index + 1}`)}
              style={{ cursor: "pointer" }}
            >
              {label}
            </NavLink>
          </NavItem>
        ))}
      </Nav>

      {/* Tabs Content */}
      <TabContent activeTab={activeTab} className="p-4 border">
        {[1, 2, 3, 4].map((num) => (
          <TabPane key={num} tabId={`${num}`}>
            <Row>
              <Col>
                <h4>Content for Tab {num}</h4>
                <p>This is the content for Tab {num}. Customize it as needed.</p>
              </Col>
            </Row>
          </TabPane>
        ))}
      </TabContent>
    </Container>
  );
};

export default TabComponent;
