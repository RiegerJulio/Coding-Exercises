import React from "react";

const states = ["RJ", "SP", "MG", "DF", "AM", "CE", "SP"];

class fieldset1 extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div className="fieldset1">
        <fieldset>
          <label>
            Name:
            <input
              type="text"
              name="name"
              required
              maxLength="40"
              value={value}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              required
              maxLength="50"
              value={value}
              onChange={handleChange}
            />
          </label>
          <label>
            CPF:
            <input
              type="text"
              name="cpf"
              required
              maxLength="11"
              value={value}
              onChange={handleChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              required
              maxLength="200"
              value={value}
              onChange={handleChange}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              required
              maxLength="28"
              value={value}
              onChange={handleChange}
            />
          </label>
          <label>
            State:
            <select
              name="state"
              required
              defaultValue=""
              value={value}
              onChange={handleChange}
            >
              <option value="">Selecione seu Estado</option>
              {states.map((state, key) => (
                <option key={key}>{state}</option>
              ))}
            </select>
          </label>
          <label>
            Where do you live?
            <span>House</span>{" "}
            <input
              type="radio"
              name="place"
              value={value}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Apartment</span>{" "}
            <input
              type="radio"
              name="place"
              value={value}
              onChange={handleChange}
            />
          </label>
        </fieldset>
      </div>
    );
  }
}

export default fieldset1;
