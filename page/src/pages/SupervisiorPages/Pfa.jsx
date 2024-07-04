import React from "react";
import TabsContainer from "./pfaTab";



function Pfa() {
  return (
    <div>
      
    <div className="container">
  
      <div className="row"> 
      <div >
        <div className="col-sm-8" style={{margin:'50px'}}>
          <table className="table"  style={{margin:'50px'}}>
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">lb number</th>
                <th scope="col">state name</th>
                <th style={{backgroundColor:'yellow'}} scope="col ">drc</th>
                <th style={{backgroundColor:'blue'}} scope="col">drc</th>
                <th scope="col">liters</th>
                <th  style={{backgroundColor:'yellow'}} scope="col">dry kg/before</th>
                <th  style={{backgroundColor:'blue'}} scope="col">dry kg/after</th>
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
                <td style={{backgroundColor:'yellow'}}>@mdo</td>
                <td style={{backgroundColor:'blue'}} >@mdo</td>
                <td>@mdo</td>
                <td style={{backgroundColor:'yellow'}}>@mdo</td>
                <td style={{backgroundColor:'blue'}}>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>160</td>
                <td>Thornton</td>
                <td style={{backgroundColor:'yellow'}}>@fat</td>
                <td style={{backgroundColor:'blue'}} >@fat</td>
                <td>@fat</td>
                <td style={{backgroundColor:'yellow'}}>@fat</td>
                <td style={{backgroundColor:'blue'}}>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>100</td>
                <td>the Bird</td>
                <td style={{backgroundColor:'yellow'}}>@twitter</td>
                <td style={{backgroundColor:'blue'}} >@twitter</td>
                <td>@twitter</td>
                <td style={{backgroundColor:'yellow'}}>@twitter</td>
                <td style={{backgroundColor:'blue'}}>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@mdo</td>
              </tr>

              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td style={{backgroundColor:'yellow'}}></td>
                <td style={{backgroundColor:'blue'}}> </td>
                <td>| Total |</td>
                <td style={{backgroundColor:'yellow'}}>| Total |</td>
                <td style={{backgroundColor:'blue'}}>| Total |</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <div  className="col-sm-4 mt-4 border border-2 p-3">
          <table  className="table">
            <thead >
              <tr>
                <th scope="col">No</th>
                <th scope="col">lb number</th>
                <th scope="col">state name</th>
                <th scope="col">drc</th>
                <th scope="col">drc</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>500</td>
                <td>walahanduwa</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>500</td>
                <td>walahanduwa</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>500</td>
                <td>walahanduwa</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>

            <h5>Total</h5>
            <form >
              <div className="form-group d-flex">
                <label>liters/short</label>
                <input type="text" className="form-control" style={{width: '200px', marginLeft: '10px'}}/>
              </div>
              <div className="form-group d-flex mt-2">
                <label>liters/short</label>
                <input type="text" className="form-control" style={{width: '200px', marginLeft: '10px'}}/>
              </div>
              <div className="form-group d-flex mt-2">
                <label>liters/short</label>
                <input type="text" className="form-control" style={{width: '200px', marginLeft: '10px'}}/>
              </div>
            </form>
        </div>
      </div>
    </div>
    <div >
        <TabsContainer />
    </div>
        <div   className="container">
            <div  className="row d-flex">
                <div className="col-sm-3">
                    <button>Passkey</button>
                    <p>hhgfhgfgh</p>
                </div>
                <div className="col-sm-3">
                    <button>Passkey</button>
                    <p>fhgfghf</p>
                </div>
                <div className="col-sm-3">
                    <button>Passkey</button>
                    <p>hgjhghjg</p>
                </div>
                <div className="col-sm-3 ">
                    <button className="float-end">Edit</button>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Pfa;
