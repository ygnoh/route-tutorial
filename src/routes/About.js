import React from "react";

const About = ({match}) => {
    return (
        <div>
            {match.params.username}'s
        </div>
    )
};

export default About