import React, { useState } from 'react';
import { HeaderSidebarContainer } from './HeaderSidebar.styles';

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderSidebar: React.FC<Props> = ({ isOpen, setIsOpen }) => {
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
