import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./app.module.css";
import { fetchData } from "./api";

// TODO: 26:35

class App extends React.Component {
  state = {
    data: {},
  };
  //// fetch the data for the API
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    // console.log(data);
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
export default App;
