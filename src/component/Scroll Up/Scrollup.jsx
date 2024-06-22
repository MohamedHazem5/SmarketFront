// src/components/ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
    if (window.scrollY > 300) {
        setVisible(true);
    } else {
        setVisible(false);
    }
    };

    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    };

    useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
    <div className="scroll-to-top">
        {visible && (
        <Button className="bg-sixth border-0" onClick={scrollToTop}>
            ↑
        </Button>
        )}
    </div>
    );
};

export default ScrollToTopButton;
