import React from 'react';
import IMAGE_NOT_FOUND from '../images/not-found.png';
import ActorCard from './ActorCard';
import { FlexGrid } from '../styled';

function ActorGrid({ data }) {
  return (
    <FlexGrid>
      {/* {console.log(data)} */}
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </FlexGrid>
  );
}

export default ActorGrid;
