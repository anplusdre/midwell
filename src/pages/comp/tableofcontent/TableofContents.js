import React from 'react';
import { Link } from 'react-scroll';
import parse from 'html-react-parser';

const TableOfContents = ({ content }) => {
  // Parse the content and extract the headings
  const headings = parse(content).reduce((acc, node) => {
    if (node.type === 'h1' || node.type === 'h2' || node.type === 'h3') {
      acc.push({ id: node.props.id, text: node.props.children });
    }
    return acc;
  }, []);

  return (
    <ul>
      {headings.map((heading) => (
        <li key={heading.id}>
          <Link to={heading.id} smooth={true} offset={-70} duration={500}>
            {heading.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TableOfContents;
