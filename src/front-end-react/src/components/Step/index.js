import { useState, useEffect } from "react";

export default function Step(props) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch("/api/stepOptions.php")
      .then((response) => response.json())
      .then(setOptions);
  }, []);

  return (
    <li>
      <label>Step</label>
      <select>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </li>
  );
}
