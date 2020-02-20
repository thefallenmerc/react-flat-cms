import React, { useState } from 'react';

import routeList from '../routes';
import { Link } from 'react-router-dom';

export default function Dashboard() {

    const [routes, setRoutes] = useState(routeList);

    const [query, setQuery] = useState('');

    const searchList = event => {
        const { value } = event.target;
        setQuery(value);
        setRoutes(routeList.filter(route => {
            return route.seoTags.toLowerCase().indexOf(value.toLowerCase()) >= 0;
        }));
    }

    const keyMap = event => {
        if (event.key === 'Escape') {
            searchList({ target: { value: '' } });
        }
    }

    return (
        <div className="Dashboard p-4">
            <div className="SearchContainer">
                <div className="SearchBar">
                    <input value={query} onChange={searchList} onKeyDown={keyMap} placeholder="Search..." />
                </div>
                <div className="LinkBox">
                    {
                        (routes.length > 0)
                        ?
                        routes.map((route, index) => {
                            return (
                                <div className="Link" key={index}>
                                    <Link to={route.url}>
                                        <span className="LinkTitle">{route.name}</span>
                                        <span className="TagContainer">
                                            {
                                                route.tags.slice(0, route.tags.length - 1).map((tag, index) => <span className="Tag" key={index}>{tag}</span>)
                                            }
                                        </span>
                                    </Link>
                                </div>
                            )
                        })
                        :
                        query.length > 0
                        ?
                        <div className="InfoBox">No match found...</div>
                        :
                        <div className="InfoBox">Nothing to explore...</div>
                    }
                </div>
            </div>
        </div>
    )
}