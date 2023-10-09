import React, { useState } from "react";
import { Field } from "formik";

function Items({ dataSelected, data }) {
  const [currentData, setCurrentData] = useState(dataSelected);
  console.log("select");
  console.log(dataSelected);
  console.log("data");
  console.log(data);
  return (
    <div className="items">
      {/* {dataSelected.map((item, index) => (
        <div key={index} className="item">
          <img src={item.image} alt={item.name} />
          {item.name}
        </div>
      ))} */}
      <Field as="select" name="restaurant" multiple>
        {data.map((option, index) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </Field>
    </div>
  );
}

export default Items;
