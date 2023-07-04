import React, { useState } from 'react';
import { HeaderSidebarContainer } from './HeaderSidebar.styles';

const HeaderSidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <HeaderSidebarContainer>
            <div className="menu-container">
                <button
                    className={`burgermenu ${isOpen ? 'opened' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                </button>
            </div>
        </HeaderSidebarContainer>
    );
};

export default HeaderSidebar;
