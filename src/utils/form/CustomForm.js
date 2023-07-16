import React from 'react';

//css
import './CustomForm.css';

export default function CustomForm() {
  return (
    <div>
      <form>
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />

        <label for="wedding-date">Wedding Date:</label>
        <input type="date" id="wedding-date" name="wedding-date" required />

        <br />

        <label for="service-type">Service Type:</label>
        <select id="service-type" name="service-type" required>
          <option value="wedding-photography">Wedding Photography</option>
          <option value="cinematography">Cinematography</option>
          <option value="other">Other (please specify in comments)</option>
        </select>

        <label for="comments">Comments:</label>
        <textarea id="comments" name="comments" rows="4"></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
