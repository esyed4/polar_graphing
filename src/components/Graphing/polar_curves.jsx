import React from 'react';

class PolarCurves extends React.Component {
  render() {
    return(
      <div className="container">
        <p>The following section will cover how curves are drawn in 2 dimensional polar planes.</p>
        <p>
          The graph of a polar equation can be represented by f(&theta;) = r, or by
          F(r,&theta;) = 0. The following figure demonstrates how circles of various
          radii look like.
        </p>
        <div className="d-flex justify-content-center" style={{"height" : "200px"}}>
          <figure>
            <img src="/images/graph_examples/example_circles.png" height="225px" alt="Cartesian coordinates example."></img>
            <figcaption>Circles of various r values</figcaption>
          </figure>

        </div>

        <br/>
        <br/>

        <p>
          We can see that a circle with radius r can be express simply by r = 1. The equivalent equation in
          cartesian coordinates would be x<sup>2</sup> + y<sup>2</sup> = 1
        </p>

        <p>
          To proceed, some more complex curves can be more easily plotted on a polar plane than cartesian. Let's consider
          the following curve: r = cos 2&theta;
        </p>

        <p>
          We will begin by creating a table of r values based on the angle, &theta;, then we will plot those values on in cartesian coordinates.
        </p>

        <div className="d-flex justify-content-center" style={{"height" : "450px"}}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">&theta;</th>
                <th scope="col">r = cos 2&theta;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>&pi;/6</td>
                <td>1/2</td>
              </tr>
              <tr>
                <td>&pi;/4</td>
                <td>0</td>
              </tr>
              <tr>
                <td>&pi;/3</td>
                <td>-1/2</td>
              </tr>
              <tr>
                <td>&pi;/2</td>
                <td>-1</td>
              </tr>
              <tr>
                <td>2&pi;/3</td>
                <td>-1/2</td>
              </tr>
              <tr>
                <td>3&pi;/4</td>
                <td>0</td>
              </tr>
              <tr>
                <td>5&pi;/6</td>
                <td>1/2</td>
              </tr>
              <tr>
                <td>&pi;</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>

          <br/>
          <figure>
            <img src="/images/graph_examples/cartesian_plot_of_2costheta.png" height="225px" alt="Cartesian coordinates example."></img>
            <figcaption>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cartesian coordinates of r = cos 2&theta;</figcaption>
          </figure>

        </div>



        <br/>

        <div className="d-flex justify-content-center" style={{"height" : "200px"}}>
         <figure>
            <img src="/images/graph_examples/four_leaved_rose.png" height="225px" alt="Cartesian coordinates example."></img>
            <figcaption>Four leaved rose of r = cos 2&theta;</figcaption>
          </figure>
        </div>
        <br/>
        <br/>
        <hr/>
        <div className="container">
          <p>Below are some useful resources regarding polar coordinates, and graphing utilities.</p>

          <a className="nav-link active" aria-current="page" href="https://www.desmos.com/calculator">Desmos, 2d and 3d Graphs</a>
          <a className="nav-link active" aria-current="page" href="https://www.geogebra.org/graphing">Geogebra, 2d and 3d Graphs</a>

          <div id="accordian">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    View Resources used regarding this project.
                  </button>
                </h5>
              </div>

              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                Dawkins, P. (2018, August 27). Section 3-6 : Polar Coordinates. Calculus II - polar coordinates. Retrieved November 10, 2021, from https://tutorial.math.lamar.edu/classes/calcii/polarcoordinates.aspx.
                <br/>
                <br/>
                Stewart, J. (2016). Calculus: Early transcendentals (8th ed.). Cengage Learning.
                <br/>
                <br/>

                </div>
              </div>

            </div>
          </div>

        </div>


      </div>
    );
  }
}

export default PolarCurves;
