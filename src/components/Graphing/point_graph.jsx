import React from 'react';

function convert_coordinates(x, y) {
  let r = Math.sqrt(x*x + y*y);
  r = Math.round((r + Number.EPSILON) * 10000) / 10000; //rounds to 4 decimals
  let theta = Math.atan2(y,x) / Math.PI;
  if (theta !== 0) {
    theta = theta + "pi";
  }
  return {r, theta};
}

class PointGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x_value: '',
      y_value: '',
      polar_coordinate: "(0, 0)"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    let input_r = convert_coordinates(this.state.x_value,this.state.y_value).r;
    let input_theta = convert_coordinates(this.state.x_value,this.state.y_value).theta;
    let input_coordinate = "(" + input_r + ", " + input_theta + ")";
    this.setState({polar_coordinate: input_coordinate});

    console.log(input_coordinate);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">

        <div className="container">
          <div className="card-columns d-flex justify-content-center">
            <div className="card">
              <div className="card-header">
                Important equations relating x,y to r,&theta;
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">x = r cos &theta;</li>
                <li className="list-group-item">y = r sin &theta;</li>
                <li className="list-group-item">tan &theta; = y / x</li>
                <li className="list-group-item">r<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup></li>
              </ul>
            </div>
            <div className="card">
              <div className="card-header">
              Example: (x, y) {'->'} (r, &theta;)
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">(1, 0) {'->'} ({convert_coordinates(1,0).r}, {convert_coordinates(1,0).theta})</li>
                  <li className="list-group-item">(0, 1) {'->'} ({convert_coordinates(0,1).r}, {convert_coordinates(0,1).theta})</li>
                  <li className="list-group-item">(1, 1) {'->'} ({convert_coordinates(1,1).r}, {convert_coordinates(1,1).theta})</li>
                  <li className="list-group-item">(0, 0) {'->'} ({convert_coordinates(0,0).r}, {convert_coordinates(0,0).theta})</li>
                </ul>
              </div>
          </div>
        </div>

        <br/>

        Try inputting a few x and y coordinates and see the corresponding (r, &theta;):
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>
            (<input type="number" name="x_value" value={this.state.x_value} onChange={this.handleChange} />,

          </label>
          <label>
            <input type="number" name="y_value" value={this.state.y_value} onChange={this.handleChange} />)

          </label>
          <input type="submit" value="Submit" />
          <p> {"->"} {this.state.polar_coordinate}</p>
        </form>
        <hr></hr>
      </div>

    );
  }
}


export default PointGraph;
