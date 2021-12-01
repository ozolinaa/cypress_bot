import React from "react";
import styled from "styled-components";
import UserDetails, { UserDetailsProps } from "src/user/userDetails";
import Counter from "src/common/counter";

const Container = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dbe6f6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #c5796d,
    #dbe6f6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #c5796d,
    #dbe6f6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const userDetails: UserDetailsProps = {
  id: "111",
  fistName: "Anton",
  lastName: "Ozolin",
};

const App: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Hello React!</h1>
        <Counter />
        <UserDetails {...userDetails} />
      </div>
    </Container>
  );
};

export default App;
