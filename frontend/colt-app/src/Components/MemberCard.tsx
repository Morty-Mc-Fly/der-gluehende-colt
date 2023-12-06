import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import ListGroup from "react-bootstrap/ListGroup";
import * as Icon from "react-feather";
import iMember from "../Interfaces/iMember";
interface iMemberCard {
  memberData: iMember;
}
const MemberCard: React.FC<iMemberCard> = ({ memberData }) => {
  let today = new Date();
  let progress: number = memberData.attend_progress;
  let userName: string = memberData.firstName + " " + memberData.lastName;
  let birthDate: Date = memberData.birthDate;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{userName}</Card.Title>

        {birthDate == today && (
          <>
            <Icon.Gift />
          </>
        )}
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h6>Kauferlaubnis</h6>
            {progress < 50 && (
              <ProgressBar
                variant="danger"
                now={progress}
                label={`${progress}%`}
              />
            )}
            {progress < 100 && progress >= 50 && (
              <ProgressBar
                variant="warning"
                now={progress}
                label={`${progress}%`}
              />
            )}

            {progress >= 100 && (
              <ProgressBar
                variant="success"
                now={progress}
                label={"attained"}
              />
            )}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
export default MemberCard;
