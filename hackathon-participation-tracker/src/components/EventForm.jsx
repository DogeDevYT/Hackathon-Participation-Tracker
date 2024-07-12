import React, { useState } from 'react';

const EventForm = ({ addEvent, uploadEvents }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [team, setTeam] = useState('');
  const [awards, setAwards] = useState('');
  const [links, setLinks] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title,
      description,
      details,
      team: team.split(',').map(member => member.trim()),
      awards: awards.split(',').map(award => award.trim()),
      links: links.split(',').map(link => {
        const [label, url] = link.split(':').map(item => item.trim());
        return { label, url };
      }),
    };
    addEvent(newEvent); // Call parent function to add event to timeline
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      uploadEvents(selectedFile);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Event Title" required />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Event Description" required />
        <textarea value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Project Details" />
        <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} placeholder="Team Members (comma-separated)" />
        <input type="text" value={awards} onChange={(e) => setAwards(e.target.value)} placeholder="Awards Won (comma-separated)" />
        <input type="text" value={links} onChange={(e) => setLinks(e.target.value)} placeholder="Links (label: url, separated by comma)" />
        <button type="submit">Add Event</button>
      </form>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default EventForm;
