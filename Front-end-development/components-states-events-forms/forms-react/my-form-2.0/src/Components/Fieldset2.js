import React from "react";

class Fieldset2 extends React.Component {
  render() {
    return (
      <div className="fieldset2">
        <fieldset>
          <label>
            Resume's Resume:
            <input type="textarea" name="resume" required maxLength="1000" />
          </label>
          <label>
            Job:
            <input type="text" name="job" required maxLength="40" />
          </label>
          <label>
            Job Description:
            <input type="text" name="jobDescription" required maxLength="500" />
          </label>
        </fieldset>
      </div>
    );
  }
}

export default Fieldset2;
