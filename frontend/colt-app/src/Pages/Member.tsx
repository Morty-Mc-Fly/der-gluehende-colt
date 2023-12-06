import MemberCard from "../Components/MemberCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import getMockData from "../service/data";

const Member = () => {
  const propData = getMockData();

  return (
    <>
      <Row>Searchbar</Row>

      <Row xs="2" md="3">
        {propData.map((person, index) => (
          <Col key={index}>
            <MemberCard memberData={person} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Member;
