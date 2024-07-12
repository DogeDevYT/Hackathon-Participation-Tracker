import React, { useState } from 'react';
import styles from '../assets/styles/EventForm.module.css'; // Import CSS module for styling

const EventForm = ({ addEvent, uploadEvents }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [teamMembers, setTeamMembers] = useState('');
  const [awards, setAwards] = useState('');
  const [links, setLinks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title,
      description,
      details,
      team: teamMembers.split(',').map(member => member.trim()),
      awards: awards.split(',').map(award => award.trim()),
      links: links.split(',').map(link => {
        const [label, url] = link.split(':').map(item => item.trim());
        return { label, url };
      }),
    };
    addEvent(event);
    clearForm();
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setDetails('');
    setTeamMembers('');
    setAwards('');
    setLinks('');
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className={styles.inputField}
        />

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          required
          className={styles.textareaField}
        />

        <label>Project Details:</label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={4}
          className={styles.textareaField}
        />

        <label>Team Members (comma-separated):</label>
        <input
          type="text"
          value={teamMembers}
          onChange={(e) => setTeamMembers(e.target.value)}
          className={styles.inputField}
        />

        <label>Awards Won (comma-separated):</label>
        <input
          type="text"
          value={awards}
          onChange={(e) => setAwards(e.target.value)}
          className={styles.inputField}
        />

        <label>Links (label:url, comma-separated):</label>
        <input
          type="text"
          value={links}
          onChange={(e) => setLinks(e.target.value)}
          className={styles.inputField}
        />

        <button type="submit" className={styles.submitButton}>Add Event</button>
      </form>
      <hr></hr>
      <h1>OR</h1>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            uploadEvents(file);
          }
        }}
        className={styles.uploadField}
      />
    </div>
  );
};

export default EventForm;