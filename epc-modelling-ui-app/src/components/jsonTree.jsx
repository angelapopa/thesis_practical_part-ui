import React, { Component } from "react";
import ReactJson from "react-json-view";
import Async from "react-async";
import Pagination from "react-js-pagination";

// This component uses the plugin https://www.npmjs.com/package/react-json-view
// to display json data in a collapable and freindly view, by using <ReactJson src={items} />

//Async call to rest API: https://css-tricks.com/fetching-data-in-react-using-react-async/

class JsonTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.country.value !== this.props.country.value) {
      this.setState({ activePage: 1 });
    }
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    console.log("JsonTree - Rendered");
    console.log(
      "jsonTree - Rendered: selectedCountry " + this.props.country.value
    );

    const loadItems = () =>
      fetch(
        "http://localhost:8080/epc-app/resource/" +
          this.props.country.value +
          "?page=" +
          this.state.activePage
      )
        .then((res) => (res.ok ? res : Promise.reject(res)))
        .then((res) => res.json());

    return (
      <React.Fragment>
        <Pagination
          innerClass="pagination"
          itemClass="page-item"
          activeClass="active"
          activeLinkClass="page-link"
          linkClass="page-link"
          activePage={this.state.activePage}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
        <Async promiseFn={loadItems}>
          {({ data, err, isLoading }) => {
            if (isLoading) return "Loading...";
            if (err) return `Something went wrong: ${err.message}`;

            if (data)
              return (
                <ReactJson
                  src={data}
                  name="epcs"
                  enableClipboard={false}
                  enableAdd={false}
                  displayObjectSize={false}
                  displayDataTypes={false}
                  collapsed="6"
                  theme="monokai"
                />
              );
          }}
        </Async>
      </React.Fragment>
    );
  }
}

export default JsonTree;
