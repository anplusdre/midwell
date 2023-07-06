import React, { useEffect, useState } from 'react';
import styles from '../../../styles/mw.module.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const TableOfContents = ({ sections }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPositions = sections.map((section) => {
        const element = document.getElementById(section.id);
        return {
          id: section.id,
          position: element ? element.offsetTop -96 : 0, // Adjusted scroll position with 85px margin
        };
      });

      const currentScrollPosition = window.scrollY;

      const activeSection = scrollPositions.reduce(
        (acc, curr) => (curr.position <= currentScrollPosition ? curr : acc),
        scrollPositions[0]
      );

      setActiveSection(activeSection.id);

      // Update the URL based on the active section
      const newUrl = `${window.location.pathname}#${activeSection.id}`;
      window.history.replaceState(null, '', newUrl);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.slice(1);
      const decodedSectionId = decodeURIComponent(sectionId);
      setActiveSection(decodedSectionId);
    }
  }, [location]);

  const dropActive = (sectionId) =>
    sectionId === activeSection ? styles.active : styles.nav_link;

    const handleClick = (event, sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        event.preventDefault();
        const sectionTopOffset = sectionElement.offsetTop - 85; // Adjusted scroll position with 85px margin
        window.scrollTo(0, sectionTopOffset);
    
        const newUrl = `${window.location.pathname}#${sectionId}`;
        window.history.pushState(null, '', newUrl);
    
        setActiveSection(sectionId);
      }
    };
    

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <NavLink
              to={`#${section.id}`}
              smooth="true"
              duration={500}
              className={dropActive(section.id)}
              onClick={(event) => handleClick(event, section.id)}
            >
              {section.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
