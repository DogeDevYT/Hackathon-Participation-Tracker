import React, { useState, useEffect } from 'react';
import Timeline from './Timeline';
import EventForm from './EventForm';

const GeneratePage = () => {
    const [events, setEvents] = useState([]);

    // Load events from localStorage on initial render
    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
        setEvents(storedEvents);
    }, []);

    // Function to add a new event
    const addEvent = (newEvent) => {
        const updatedEvents = [...events, newEvent];
        setEvents(updatedEvents);
        // Save events to localStorage
        localStorage.setItem('events', JSON.stringify(updatedEvents));
    };

    // Function to upload events from JSON file
    const uploadEvents = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
        const content = e.target.result;
        try {
            const parsedEvents = JSON.parse(content);
            const updatedEvents = [...events, ...parsedEvents];
            setEvents(updatedEvents);
            // Save events to localStorage
            localStorage.setItem('events', JSON.stringify(updatedEvents));
        } catch (error) {
            console.error('Error parsing JSON file:', error);
        }
        };
        reader.readAsText(file);
    };

    // Function to download events as a JSON file
    const downloadEvents = () => {
        const jsonContent = JSON.stringify(events, null, 2);
        const blob = new Blob([jsonContent], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'events.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div>
            <h1>Welcome to the Generate Page!</h1>
            <h1>Add Event</h1>
            <EventForm addEvent={addEvent} uploadEvents={uploadEvents} />
            <hr />
            <h1>Timeline</h1>
            {events.length > 0 ? (
                <>
                <Timeline events={events} />
                <button onClick={downloadEvents}>Download Events as JSON</button>
                </>
            ) : (
                <p>No events to display.</p>
            )}
        </div>
    );
};

export default GeneratePage;