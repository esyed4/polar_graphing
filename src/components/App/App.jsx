import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Extra/navbar';
import PointGraph from '../Graphing/point_graph';
import PolarCurves from '../Graphing/polar_curves';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="NavBar">
          <NavBar />
        </div>
        <div className="container">
          <br/>
          <p> Polar Coordinates can be understood from a perspective coming from the more commonly used Cartesian Coordinates. Polar Coordinates
            can be an easier coordinate system to use under circumstances. </p>
          <p> Cartesian coordinates contain two perpendicular Axes (x,y) and plot points going in the horizontal and vertical directions cooresponding to the
            given x and y coordinates. Polar Coordinates can be expressed by an r value to describe the distance from the origin, and a &theta; value to describe
            the angle the point makes from the positive x-axis.
          </p>
          <div className="container">
            <div className="d-flex justify-content-center" style={{"height" : "200px"}}>
              <figure>
                <img src="/images/graph_examples/cartesian_coordinates.png" height="225px" alt="Cartesian coordinates example."></img>
                <figcaption>Cartesian Coordinates</figcaption>
              </figure>

              <div className="vr"></div>

              <figure>
                <img src="/images/graph_examples/cartesian_and_polar_coordinates.png" alt="Cartesian and polar coordinates example."></img>
                <figcaption>Cartesian and Polar Coordinates</figcaption>
              </figure>

            </div>
            <br/>
            <br/>
            <hr/>

            <div className="container">




            </div>

            <PointGraph/>
            <PolarCurves/>


          </div>
        </div>
      </div>
    );
  }
}

export default App;
