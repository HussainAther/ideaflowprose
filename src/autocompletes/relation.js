// src/autocompletes/relation.js
import React from 'react';

const relations = [
  'Project A',
  'Project B',
  'Team Collaboration',
  'Strategy Meeting'
];

// Match relations based on user input
const onMatch = (text) => relations.filter(relation => relation.toLowerCase().includes(text.toLowerCase()));

// Component to render relation suggestions
const Relation = ({ children }) => (
  <span className="Relation">{children}</span>
);

const List = ({ children }) => (
  <ul className="RelationList">{children}</ul>
);

const Item = ({ item, current, onClick }) => {
  let classNames = "RelationListItem";
  classNames += current ? " current" : "";
  return (
    <li className={classNames} onClick={onClick}>
      {item}
    </li>
  );
};

// Configuration object for the relation autocomplete
const relation = {
  prefix: '<>',
  type: 'RELATION',
  mutability: 'IMMUTABLE',
  onMatch: onMatch,
  component: Relation,
  listComponent: List,
  itemComponent: Item,
  format: (item) => `<${item}>` // How the item should be formatted in the editor
};

export default relation;

