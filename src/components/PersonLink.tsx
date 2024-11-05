import React from 'react';
import { Person } from '../types';

type PersonLinkProps = {
  person: Person | null;
  onSelect: () => void;
};

export const PersonLink: React.FC<PersonLinkProps> = ({ person, onSelect }) => {
  if (!person) {
    return <>-</>;
  }

  return (
    <a
      href={`#/people/${person.slug}`}
      className={person.sex === 'f' ? 'has-text-danger' : undefined}
      onClick={event => {
        event.preventDefault();
        onSelect();
      }}
    >
      {person.name}
    </a>
  );
};
