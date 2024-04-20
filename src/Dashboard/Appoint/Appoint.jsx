import React, { useState } from 'react';
import './Appoint.css';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    symptoms: '',
    time: ''
  });

  const handleDelete = (appointmentId) => {
    setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
  };

  const handleAddAppointment = (event) => {
    event.preventDefault();
    setAppointments([...appointments, { ...formData, id: Date.now() }]);
    setModalOpen(false);
    setFormData({ name: '', phone: '', symptoms: '', time: '' }); // Reset form data
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAppointments = appointments.filter(appointment =>
    appointment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.phone.includes(searchTerm) ||
    appointment.symptoms.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.time.includes(searchTerm)
  );

  return (
    <div className="appoint">
      <Topbar />
      <div className="Amain">
        <Sidebar />
        <div className="Acontent">
          <input
            type="text"
            placeholder="Search appointments..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Patient's Name</th>
                <th>Phone Number</th>
                <th>Symptoms</th>
                <th>Preferred Time Slot</th>
                {/*<th>Delete</th>*/}
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appointment, index) => (
                <tr key={index}>
                  <td data-label="Patient's Name">{appointment.name}</td>
                  <td data-label="Phone Number">{appointment.phone}</td>
                  <td data-label="Symptoms">{appointment.symptoms}</td>
                  <td data-label="Time Available">{appointment.time}</td>
                  <td>
                    <button className='delete' onClick={() => handleDelete(appointment.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className='add' onClick={() => setModalOpen(true)}>Set an Appointment</button>
          
          {modalOpen && (
            <div className="modal">
              <form onSubmit={handleAddAppointment}>
                <label htmlFor="name">Patient's Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                
                <label htmlFor="symptoms">Symptoms:</label>
                <textarea id="symptoms" name="symptoms" value={formData.symptoms} onChange={handleChange} required></textarea>
                
                <label htmlFor="time">Preferred Time Slot:</label>
                <input type="text" id="time" name="time" value={formData.time} onChange={handleChange} required />
                
                <button type="submit">Add Appointment</button>
                <button type="button" onClick={() => setModalOpen(false)}>Cancel</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointment;