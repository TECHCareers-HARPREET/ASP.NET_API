import React, { Component } from 'react';
import axios from 'axios';

export class FetchData extends Component {
  static displayName = FetchData.name;

    constructor(props) {
      // 1) When we build the component, we assign the state to be loading, and register an empty list in which to store our forecasts.

    super(props);
    this.state = { forecasts: [], loading: true };
  }

    componentDidMount() {
       // 2) When the component mounts, we make the async call to the server to retrieve the API results.

    this.populateWeatherData();
  }

    static renderForecastsTable(forecasts) {
        // 5) When the async call comes back, render will call this method rather than rendering "Loading...", which will create our table.
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                        <th>Precipitation</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                            <td>{forecast.precipitation}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
    // 4) When we render, this ternary statement will with print loading, or render the forecasts table depending if the async call has come back yet.

    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);
          // Either way we render the title, and a description.
    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

    async populateWeatherData() {
      // 3) Make the async call to the API.
    // When an async call is made, it "awaits" a response. This means that rather than the server hanging and keeping the "thread" (process) open, it shelves the thread to be picked up when the response comes back.
    // This frees up server resources to do other things in the event the request takes a few seconds (or more, if your internet is straight out of 1995).

        // Axios replaces fetch(), same concept. Send the response and "then" when it comes back, put it in the state.
        axios.get('weatherforecast').then(res => {
            this.setState({ forecasts: res.data, loading: false });
        });
    }
    
  }

