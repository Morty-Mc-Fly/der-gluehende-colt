export default interface Member {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  memberships: String[];
  attend_progress: number;
}
