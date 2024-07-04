import React from "react";


function CfaChart() {
  return (
    <div className="container">
      <div className="row"> 
        <div className="col-sm-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">lb number</th>
                <th scope="col">state name</th>
                <th scope="col">drc</th>
                <th scope="col">liters</th>
                <th scope="col">dry kg/before</th>
                <th scope="col">dry kg/after</th>
                <th scope="col">vfa</th>
                <th scope="col">nh3</th>
                <th scope="col">tmtd</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>500</td>
                <td>walahanduwa</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>160</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>100</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
    </div>

    )
}

export default CfaChart;