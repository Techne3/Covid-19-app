import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./app.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/cov.png";

// TODO: 26:35

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  //// fetch the data for the API
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    // console.log(data);
  }

  handleCountryChange = async (country) => {
    // fetch the data
    const fetchedData = await fetchData(country);
    // set the state
    this.setState({ data: fetchedData, country: country });

    // console.log(country);
    console.log(fetchedData);
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src={coronaImage}
          alt="title Covid19 symbol"
        />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
export default App;
