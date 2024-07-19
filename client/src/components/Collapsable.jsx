import { useState } from "react";
import PropTypes from 'prop-types';

export default function Collapsable ({ title, children}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapsable = () => {
        setIsOpen(!isOpen)
    }
    const handleKeyPress = (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
          toggleCollapsable();
        }
      };

    return (
        <div className="collapsable-filter">
            <div className="collapsable-title"
            role="button"
            onClick={toggleCollapsable}
            tabIndex="0"
            onKeyDown={handleKeyPress}
            >
                <h3>{title}</h3>
                <span>{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <div className="collapsable-content">
                    {children}
                </div>
            )}
        </div>
    )
}

Collapsable.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
