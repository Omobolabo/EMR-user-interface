import React from 'react';
import './Dashboard.css';
import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor, faSyringe, faTh, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const cards = [
    { icon: faUserDoctor, title: 'NO. of doctors available', description: 'There are {9} Doctors available now.' },
    { icon: faSyringe, title: 'NO. of pharmacists available', description: '{2} Pharmacists available.' },
    { icon: faTh, title: 'Blog Posts', description: 'Read nutritional content here for better living.' },
    { icon: faFileAlt, title: 'Record of patients seen today', description: 'Generate and analyze patient reports and charts.' },
  ];

  return (
    <div className="dashboard">
      <Topbar />
      <div className="main">
        <Sidebar />
        <div className="content">
          {/* Row 1 */}
          <div className="flexx">
          <div className="card-row">
            {cards.slice(0, 2).map((card, index) => (
              <div className="divide">
              <div className="card animated fadeIn" key={index}>
                <FontAwesomeIcon icon={card.icon} size="lg" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Row 2 */}
          <div className="card-row">
            {cards.slice(2).map((card, index) => (
              <div className="divide">
              <div className="card animated zoomIn" key={index}>
                <FontAwesomeIcon icon={card.icon} size="lg" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;