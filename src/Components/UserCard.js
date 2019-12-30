import React from "react";

import styled from "styled-components";

import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Image } from "semantic-ui-react";

const Container = styled.div`
  width: 300px;
  margin: auto;
  margin-top: 25px;
`;

const UserCard = props => (
  <Container>
    <Card>
      <Image src={props.data.avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.data.name}</Card.Header>
        <Card.Meta>
          <span className="date">{`Joined in ${props.data.created_at}`}</span>
        </Card.Meta>
        <Card.Description>
          {`lives in ${props.data.location}`}.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {`${props.data.following} Friends`}
        </a>
      </Card.Content>
    </Card>
  </Container>
);

export default UserCard;

// import React from "react";

// const CardExampleCard = props => (
//   <div>
//     <p>{props.name}</p>
//   </div>
// );

// export default CardExampleCard;
