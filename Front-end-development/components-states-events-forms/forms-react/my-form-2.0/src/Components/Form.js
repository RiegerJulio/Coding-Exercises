import React from "react";
import Fieldset1 from "./Fieldset1";
import Fieldset2 from "./Fieldset2";

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: "",
      email: "",
      cpf: "",
      address: "",
      city: "",
      state: "",
      place: "",
      resume: "",
      job: "",
      jobDescription: "",
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="forms">
        <form>
          {/* falta inserir um value porem quando eu insiro, ele altera todo o fieldset. */}
          <Fieldset1 handleChange={this.handleChange} />
          <Fieldset2 handleChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default Form;
