import { Col, Container, Row } from "reactstrap";

const Info = () => {
  return (
    <div>
      <Container className="my-5">
        <h1 className="text-center mb-4">Make strategic learning your advantage</h1>

        <Row className="align-items-center shadow-lg p-4">
          {/* Image Section */}
          <Col lg="6" md="12" className="text-center">
            <img 
              src="https://img.freepik.com/free-photo/map-lying-wooden-table_53876-105723.jpg?t=st=1739360810~exp=1739364410~hmac=822c2db1ab8c35a185b7ebd0d6f1f096e5841b798706b61ea9ffebb1c91967a5&w=740" 
              alt="map" 
              className="img-fluid border rounded"
            />
          </Col>

          {/* Text Section */}
          <Col lg="6" md="12">
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Autem cumque recusandae corrupti. Quam maiores sunt minus 
              nesciunt rerum iure dolorum error, dolore est numquam odio 
              debitis dignissimos illo nisi adipisci, corporis voluptatem 
              voluptates deserunt repudiandae quidem vero quibusdam labore. Maxime?
            </p>
            <p className="p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, consequuntur soluta id quas magni omnis fuga consequatur cum nostrum recusandae praesentium, voluptate, dignissimos ratione aliquid possimus odit quo alias nisi?</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info;
