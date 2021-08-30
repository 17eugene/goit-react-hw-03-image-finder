import React from "react";

class Searchbar extends React.Component {
  constructor() {
    super();

    this.state = {
      query: "",
    };
  }

  handleQueryChange = (e) => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    if (this.state.query.trim() === "") {
      alert("No query entered");
      return;
    }

    this.props.submit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onHandleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}

export { Searchbar };
