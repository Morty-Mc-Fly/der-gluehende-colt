import "../SCSS/MemberCard.scss";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
function MemberCard(props: any) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Test User</Card.Title>
        <ProgressBar now={props.progress} label={`${props.progress}%`} />
      </Card.Body>
    </Card>
  );
}
export default MemberCard;
