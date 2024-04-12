import React, { useState } from 'react';
import './Patients.css';
import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';

const Patients = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState([]); // Replace with actual data fetching logic
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [patientsPerPage] = useState(10); // Adjust number of patients per page as needed

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNewPatient = (event) => {
    event.preventDefault();
    // Extract new patient data from the form
    const form = event.target;
    const newPatientData = {
      name: form.name.value,
      dob: form.dob.value,
      phone: form.phone.value,
      lastvisit: form.lastvisit.value,
      emergencycontact: form.emergencycontact.value,
      // ... other fields
    };
    setPatients([...patients, newPatientData]);
    setModalOpen(false); // Close the modal after submission
  };

  const filteredPatients = searchTerm
    ? patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.id.toString().includes(searchTerm)
      )
    : currentPatients;

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
  };

  const handleCloseModal = () => {
    setSelectedPatient(null);
  };

  // Quick action handlers
  const handleEdit = (patientId) => {
    // Logic for editing patient information
  };

  const handleDelete = (patientId) => {
    // Logic for deleting patient information
  };

  // Pagination handlers
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(patients.length / patientsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="Patients">
      <Topbar />
      <div className="Pmain">
        <Sidebar />
        <div className="Pcontent">
          <input
            type="text"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-bar"
          />
          <button className="register-btn" onClick={() => setModalOpen(true)}>Register New Patient</button>

{modalOpen && (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
      <h2>Register New Patient</h2>
      <form onSubmit={handleNewPatient}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />

       <label htmlFor="address">Address:</label>
<input type="text" id="address" name="address" required />

<label htmlFor="email">Email:</label>
<input type="email" id="email" name="email" required />

<label htmlFor="gender">Gender:</label>
<select id="gender" name="gender" required>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>

<label htmlFor="medicalHistory">Medical History:</label>
<textarea id="medicalHistory" name="medicalHistory"></textarea>

<label htmlFor="allergies">Allergies:</label>
<input type="text" id="allergies" name="allergies" />

<label htmlFor="emergencyContact">Emergency Contact:</label>
<input type="text" id="emergencyContact" name="emergencyContact" required />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
)}
          <div className="patient-table-container">
            <table className="patients-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Date of Birth</th>
                  <th>Last Visit</th>
                  <th>Emergency Contact</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map(patient => (
                  <tr key={patient.id}>
                    <td>{patient.id}</td>
                    <td>{patient.name}</td>
                    <td>{patient.dob}</td>
                    <td>{patient.lastVisit}</td>
                    <td>
                      <button className="action-btn" onClick={() => handleSelectPatient(patient)}>
                        View
                      </button>
                      <button className="action-btn" onClick={() => handleEdit(patient.id)}>
                        Edit
                      </button>
                      <button className="action-btn" onClick={() => handleDelete(patient.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              {pageNumbers.map(number => (
                <button key={number} onClick={() => handlePageClick(number)}>
                  {number}
                </button>
              ))}
            </div>
          </div>
          {selectedPatient && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>&times;</span>
                <h2>Patient Details</h2>
                {/* Display detailed patient information here */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Patients;