import React, { useEffect, useState } from 'react';
import FourOFour from './FourOFour';
import { Remarkable } from 'remarkable';
import Loader from './Loader';
import {Link} from 'react-router-dom';

export default function Page({ history, routeList }) {
    const route = routeList.find(route => route.path === history.location.pathname);
    const [innerHTML, setInnerHTML] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isErrored, setIsErrored] = useState(false);

    useEffect(() => {
        if (route) {
            fetch(route.url)
                .then(res => res.text()).then(response => {
                    const md = new Remarkable();
                    setInnerHTML(md.render(response));
                    window.Prism.highlightAll();
                })
                .catch(error => {
                    setIsErrored(true);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
            setIsErrored(true);
        }
    }, [route, innerHTML, isLoading, isErrored]);
    return (
        isLoading ? <Loader /> : isErrored ? <FourOFour /> :
            <div className="Page container">
                <div className="PageContent">
                    <div className="Title">{route.name}</div >
                    <div className="ContentBody" dangerouslySetInnerHTML={{ __html: innerHTML }}></div>
                    <Link className="HomeButton" to="/">Home</Link>
                </div >
            </div >
    )
}