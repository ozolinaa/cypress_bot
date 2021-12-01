import React from "react";

export interface UserDetailsProps {
  id: string;
  fistName: string;
  lastName: string;
}

const UserDetails: React.FC<UserDetailsProps> = (props: UserDetailsProps) => {
  return (
    <div>
      <p>id: {props.id}</p>
      <p>fistName: {props.fistName}</p>
      <p>lastName: {props.lastName}</p>
    </div>
  );
};

export default UserDetails;
