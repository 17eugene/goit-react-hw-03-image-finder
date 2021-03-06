import React from "react";

import styles from "./Searchbar.module.css";

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
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.onHandleSubmit}>
          <button type="submit" className={styles.searchForm_button}>
            <span className={styles.searchForm_button_label}>Search</span>
          </button>

          <input
            className={styles.searchForm_input}
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
