import React from 'react';
import './FilterBox.css'; // Keep your existing CSS

const FilterBox = ({ setFilterjobs }) => {
  // Handle dropdown change
  const handleChange = (event) => {
    setFilterjobs(event.target.value); // Update the filter value
  };

  return (
    <div className='filter-section-parent'>

      <select onChange={handleChange} className="filter-dropdown">
      
        <option value="">All Jobs</option>
        <option value="Stanton-O'Hara">Stanton-O'Hara</option>
        <option value="Kirlin-Muller">Kirlin-Muller</option>
        <option value="Rau-Walter">Rau-Walter</option>
        <option value="Hudson, Wiegand and Shields">Hudson, Wiegand and Shields</option>
        <option value="Kautzer-Jacobi">Kautzer-Jacobi</option>
        <option value="Cremin-Rosenbaum">Cremin-Rosenbaum</option>
        <option value="Ortiz-Donnelly">Ortiz-Donnelly</option>
        <option value="Gislason-Bradtke">Gislason-Bradtke</option>
        <option value="Bosco Group">Bosco Group</option>
        <option value="Reinger-Corwin">Reinger-Corwin</option>
        <option value="Huels, Effertz and Terry">"Huels, Effertz and Terry"</option>
        <option value="Little-Feil">Little-Feil</option>
      </select>

    </div>
  );
};

export default FilterBox;