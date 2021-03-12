import React from "react" 
import { Jan4Archive, Jan11Archive, Jan18Archive, Jan25Archive } from "../../../archive/index"


export default class PotdSecondFrame extends React.Component {
    constructor() {
        super()
        this.state = {
            showMessage: false,
            message: "See past POTDs >"
        }
    }


    _showMessage = (bool, e) => {
        this.setState({
          showMessage: bool,
        
        });
        if (bool) {
            this.setState({
                message: "Collapse past POTDs" 
              
              });
        }
        else {
            this.setState({
                message: "See past POTDs >" 
              
              });
        }
      }



    render() {
        return (
            <>
            <section id="intro" className="c-paper colored-bg c-paper--no-border-radius-bottom h-mb-0">
              <h2 className="section-title">Leaderboard</h2>
              <table className="leaderboard"> 
                  <tr style={{backgroundColor: "#dfeff5"}}>
                      <th></th>
                      <th>Student</th>
                      <th>Points</th>
                      
                  </tr>
                  <tr>
                      <th style={{backgroundColor: "#dfeff5"}}>1</th>
                      <th style={{backgroundColor: "#25f01d"}}></th>
                      <th style={{backgroundColor: "#25f01d"}}>0</th>
                  </tr>
                  <tr>
                      <th style={{backgroundColor: "#dfeff5"}}>2</th>
                      <th style={{backgroundColor: "#c8f2c7"}}></th>
                      <th style={{backgroundColor: "#c8f2c7"}}>0</th>
                  </tr>
                  <tr>
                  <th style={{backgroundColor: "#dfeff5"}}>3</th>
                      <th style={{backgroundColor: "#c8f2c7"}}></th>
                      <th style={{backgroundColor: "#c8f2c7"}}>0</th>
                  </tr>
                  <tr>
                  <th style={{backgroundColor: "#dfeff5"}}>4</th>
                      <th style={{backgroundColor: "#c8f2c7"}}></th>
                      <th style={{backgroundColor: "#c8f2c7"}}>0</th>
                  </tr>
                  <tr>
                      <th style={{backgroundColor: "#dfeff5"}}>5</th>
                      <th style={{backgroundColor: "#c8f2c7"}}></th>
                      <th style={{backgroundColor: "#c8f2c7"}}>0</th>
                  </tr>
              </table> 
            </section>

            <section className="c-paper c-paper--no-border-radius-bottom h-mb-0">
            <h2 className="section-title">POTD Archives</h2>
            <div className="accordion">
              <details>
                <summary>January 4th, 2021</summary>
                <Jan4Archive/>
              </details>
              <details>
                <summary>January 11th, 2021</summary>
                <Jan11Archive/>
              </details>
              <details>
                <summary>January 18th, 2021</summary>
                <Jan18Archive/>
              </details>
              <details>
                <summary>January 25th, 2021</summary>
                <Jan25Archive/>
              </details>
            </div>            
              {/* <a id="Jan11Archive" onClick={this._showMessage.bind(null, ! this.state.showMessage)}>{this.state.message}</a>
              { this.state.showMessage && (
                  <>
                   
                  <Jan11Archive/>
                  <Jan18Archive/>
                  <Jan25Archive/>
                  </> 
              ) } */}
            </section>
    
 
        

      
    
             </> 
        )
    }
}
