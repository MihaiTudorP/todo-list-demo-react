import { Link, Route } from "react-router-dom"
import React from "react";
import { App } from "./App";

interface PageNotFoundProps {
    title: string,
    body: string
}

const props = {
    title: "404",
    body: "Page Not Found"
}

const PageNotFound: React.FC<PageNotFoundProps> = () => {
    return(
        <p>
            {props.title}
            <code>{props.body}</code>
            <p>
                <Link to = "/">Home</Link>
                <Route path="/" exact component={App} />
            </p>
        </p>
    )
}

export default PageNotFound;