import React from 'react';
import { Link } from 'react-router-dom';

export default function FourOFour() {
    return (
        <div className="FourOFour">
            <h3>You seem to be lost...</h3>
            <Link className="HomeButton" to="/">Home</Link>
        </div>
    )
}