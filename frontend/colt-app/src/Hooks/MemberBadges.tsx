import React from "react";
interface iMemberBadges {
  memberships: string[];
}
const MemberBadges: React.FC<iMemberBadges> = ({ memberships }) => {
  memberships.forEach((e) => {
    if (e === "Bogen") {
    }
  });
  return <p></p>;
};
export default MemberBadges;
