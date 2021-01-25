import React from "react" 
import { Jan4Archive, Jan11Archive, Jan18Archive } from "../../../archive/index"


export default class RootSecondFrame extends React.Component {
    constructor() {
        super()
        this.state = {
            showMessage: false,
            message: "See past POTDs (late submission allowed)"
        }
    }


    _showMessage = (bool, e) => {
        this.setState({
          showMessage: bool,
        
        });
        if (bool) {
            this.setState({
                message: "Collapse all POTDs" 
              
              });
        }
        else {
            this.setState({
                message: "See past POTDs (late submission allowed)" 
              
              });
        }
      }



    render() {
        return (
            <>
              <section id="intro" className="c-paper c-paper--no-border-radius-bottom h-mb-0">
            <h2 className="section-title">Leaderboard</h2>
            <table className="leaderboard"> 
                <tr style={{backgroundColor: "#dfeff5"}}>
                    <th></th>
                    <th>Student</th>
                    <th>Points</th>
                    
                </tr>
                <tr>
                    <th style={{backgroundColor: "#dfeff5"}}>1</th>
                    <th style={{backgroundColor: "#25f01d"}}>Jeffrey Lin</th>
                    <th style={{backgroundColor: "#25f01d"}}>34</th>
                </tr>
                <tr>
                    <th style={{backgroundColor: "#dfeff5"}}>2</th>
                    <th style={{backgroundColor: "#c8f2c7"}}>Peter Chang</th>
                    <th style={{backgroundColor: "#c8f2c7"}}>30</th>
                </tr>
                <tr>
                    <th style={{backgroundColor: "#dfeff5"}}>3</th>
                    <th style={{backgroundColor: "#c8f2c7"}}>Andrew Kim</th>
                    <th style={{backgroundColor: "#c8f2c7"}}>28</th>
                </tr>
                <tr>
                    <th style={{backgroundColor: "#dfeff5"}}>4</th>
                    <th style={{backgroundColor: "#c8f2c7"}}>Amanda Wright</th>
                    <th style={{backgroundColor: "#c8f2c7"}}>26</th>
                </tr>
                <tr>
                <th style={{backgroundColor: "#dfeff5"}}>5</th>
                    <th style={{backgroundColor: "#c8f2c7"}}>Albert Oh</th>
                    <th style={{backgroundColor: "#c8f2c7"}}>19</th>
                </tr>
            </table> 
         </section>
         <section id="intro" className="c-paper c-paper--no-border-radius-bottom h-mb-0">
         <h2 className="section-title">Jan 25th, 2021</h2>
     <br></br>
     <p>1. Suppose you play a game where you begin with a score of 0 and aim to maximize the amount of coins earned. On every turn, you receive a coin to flip. A heads results in 1 point added to your score, but a tails results in a “strike” and the loss of all your points. Prove the optimal strategy for this game along with the expected earnings of that strategy.</p>
     <br></br>
     <p>2. Please move one matchstick to reduce the number below by half.</p>
     <img src="matchesjan25th.png" />
           
    <br></br>
     <p>3. Describe how COVID-19 has impacted the economy of the United States. Use a supply and demand curve to support your answer. </p>
        <br></br>
     <p>4. On January 28, 1986, the Challenger space shuttle exploded after 73 seconds in flight. If the Challenger generated a steady power of 37 million horsepower during the duration of its flight, at what height did it explode?</p>
    <br></br>
    <p>5. Every time a cell divides, a repeating sequence of nucleotides at the end of its chromosomes known as the telomeres shorten. These act as protective caps to make sure none of the actual genome gets removed during cell division. As such, telomere length is an indication of cell age. Keeping this in mind, why would a clone of an organism created from the body cells of another organism have a shorter lifespan?  

    <br></br>Input format: n (number of letters in plaintext), a, b, and actual plaintext. 
    <br></br><br></br><u>Sample input #1:</u> 
    <br></br>5
    <br></br>3
    <br></br>1
    <br></br>hello
    <br></br><br></br>
    <u>Sample output #1:</u>
    <br></br>wniir </p>

         </section>

 
<div>
<section id="intro" className="c-paper c-paper--no-border-radius-bottom h-mb-0">
</section>
    { this.state.showMessage && (
        <>
        <Jan4Archive/> 
        <Jan11Archive/>
        <Jan18Archive/>
        </> 
    ) }
    </div>
    
 
        

      
    
             </> 
        )
    }
}
