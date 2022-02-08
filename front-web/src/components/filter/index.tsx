import './styles.css';

import FlatPicker from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';

function Filter() {
  const onChangeDate = (dates: Date[]) => {
    console.log(dates);
  };
  return (
    <div className="filter-container base-card">
      <FlatPicker
        options={{ mode: 'range', dateFormat: 'm/d/Y', showMonths: 2 }}
        className="filter-input"
        onChange={onChangeDate}
        placeholder="Select period"
      />
      <select className="filter-input">
        <option value="">Select gender</option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        <option value="OTHER">Other</option>
      </select>
    </div>
  );
}

export default Filter;
