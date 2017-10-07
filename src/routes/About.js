import React from "react";

const About = ({match}) => {
    return (
        <div>
            {console.log(match)}
            {match.params.username}'s
        </div>
    );
};

export default About