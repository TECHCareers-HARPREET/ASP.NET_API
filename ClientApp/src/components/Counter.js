import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

    // Constructor runs first, builds the component. It sets the initial state and binds the incrementCounter method to the component.
    constructor(props) {
        super(props);
        // Set initial state.
        this.state = { currentCount: 0 };
        // Create the method bind for use in the onClick listener.
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    // This method gets called by the onClick event listener, which will change the state and trigger a re-render.
    incrementCounter() {
        // By calling setState(), if it causes a state change, a re-render will take place.
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

            {/* Similarly to C# (Razor) we can output variables (state properties) into our JSX / HTML using braces. */}
            <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>
              {/* Because we bound the method to the component, we can assign the method as an onClick listener to our JSX button. Without the bind it won't work. */}
              <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
          </div>
      );
  }
}
