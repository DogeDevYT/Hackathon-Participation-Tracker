import React from 'react';
import Timeline from './Timeline';

const events = [
    {
        title: 'Project Kickoff',
        description: 'The project kickoff meeting.',
        details: 'Discussed project goals and timelines.',
        team: ['Alice', 'Bob', 'Charlie'],
        awards: [],
        links: [
        { label: 'Project Repo', url: 'https://example.com/presentation' },
        ],
    },
    {
        title: 'Initial Prototype',
        description: 'Completed the initial prototype.',
        details: 'Built the initial version of the project.',
        team: ['Alice', 'Bob'],
        awards: ['Best Prototype Award'],
        links: [
        { label: 'Demo Video', url: 'https://example.com/demo' },
        ],
    },
    {
        title: 'Final Presentation',
        description: 'Presented the final version of the project.',
        details: 'Showcased the final product to the stakeholders.',
        team: ['Alice', 'Charlie'],
        awards: ['Best Project Award'],
        links: [
        { label: 'Final Presentation', url: 'https://example.com/presentation' },
        ],
    },
];

const GeneratePage = () => {
    return (
        <div>
            <h1>Welcome to the Generate Page!</h1>
            <h2>Timeline:</h2>
            <Timeline events={events}/>
        </div>
    );
};

export default GeneratePage;