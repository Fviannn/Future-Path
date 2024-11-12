import React from 'react';
import './Style.css'; // Make sure to create this CSS file
import { FaThLarge, FaFilter } from 'react-icons/fa';

const SchoolList = () => {
    const schools = [
        {
            name: 'SMAN 1 Purwokerto',
            location: 'Purwokerto, Jawa Tengah',
            accreditation: 'Akreditasi A',
            type: 'Negeri',
            image: 'purwokerto.jpg',
        },
        {
            name: 'SMA Pradita Dirgantara',
            location: 'Boyolali, Jawa Tengah',
            accreditation: 'Akreditasi A',
            type: 'Swasta',
            image: 'pradita.jpg',
        },
        {
            name: 'Universitas Brawijaya',
            location: 'Malang, Jawa Timur',
            accreditation: 'Akreditasi A',
            type: 'Negeri',
            image: 'brawijaya.jpg',
        },
        {
            name: 'Universitas Gadjah Mada',
            location: 'Yogyakarta, Jawa Tengah',
            accreditation: 'Akreditasi A',
            type: 'Negeri',
            image: 'ugm.jpg',
        },
        {
            name: 'Universitas Gajayana',
            location: 'Malang, Jawa Timur',
            accreditation: 'Akreditasi B',
            type: 'Swasta',
            image: 'uniga.jpg',
        },
    ];

    return (
        <div className="container">
            <div className="header">
                <h1>School List</h1>
                <div className="icons">
                    <FaThLarge />
                    <FaFilter />
                </div>
            </div>
            <div className="grid">
                {schools.map((school, index) => (
                    <div className="card" key={index}>
                        <img src={school.image} alt={`${school.name} school building`} />
                        <div className="card-content">
                            <h2>{school.name}</h2>
                            <p>{school.location}</p>
                            <p>{school.accreditation}</p>
                            <p>{school.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SchoolList;
