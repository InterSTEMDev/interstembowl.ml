import React, { cloneElement } from "react" 
export default class RootSecondFrame extends React.Component {
    constructor() {
        super()
        this.state = {

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
    <h2 className="section-title">Jan 11, 2021</h2>
     <br></br>
     <p>1. My clock reads 1:01 PM when I take a drink of magic soda. Every time the minute number on my clock changes from 01 to 02, my height increases 50%. Every time the minute number changes from 31 to 32, my height decreases by 40%. I was 6 feet tall when I drank the magic soda. What time is it when I am first less than 1 foot tall?</p>
     <br></br>
     <p>2.</p>
     <table className="leaderboard" style={{ border: "1px solid #dddddd"}}> 
                <tr>
                    <th style={{ border: "1px solid #dddddd"}}>2</th>
                    <th style={{ border: "1px solid #dddddd"}}>1</th>
                    <th style={{ border: "1px solid #dddddd"}}>1</th>
                    <th style={{ border: "1px solid #dddddd"}}>1</th>
                    <th style={{ border: "1px solid #dddddd"}}>2</th>
                    <th style={{ border: "1px solid #dddddd"}}>2</th>
                    <th style={{ border: "1px solid #dddddd"}}>2</th>
                    <th style={{ border: "1px solid #dddddd"}}>?</th>
                    <th style={{ border: "1px solid #dddddd"}}>1</th>
                    <th style={{ border: "1px solid #dddddd"}}>1</th>
                    <th style={{ border: "1px solid #dddddd"}}>2</th>
                    <th style={{ border: "1px solid #dddddd"}}>1</th>
                    <th style={{ border: "1px solid #dddddd"}}> 1</th>
                </tr>
                <tr>
                    <th style={{ border: "1px solid #dddddd"}}>1</th>
                    <th style={{ border: "1px solid #dddddd"}}>1</th>
                    <th style={{ border: "1px solid #dddddd"}}>1</th>
                    <th style={{ border: "1px solid #dddddd"}}>2</th>
                    <th style={{ border: "1px solid #dddddd"}}>1</th>
                    <th style={{ border: "1px solid #dddddd"}}>1</th>
                    <th style={{ border: "1px solid #dddddd"}}>2</th>
                    <th style={{ border: "1px solid #dddddd"}}>1</th>
                    <th style={{ border: "1px solid #dddddd"}}>1</th>
                    <th style={{ border: "1px solid #dddddd"}}>1</th>
                    <th style={{ border: "1px solid #dddddd"}}>2</th>
                    <th style={{ border: "1px solid #dddddd"}}>2</th>
                    <th style={{ border: "1px solid #dddddd"}}>1</th>
                </tr>
            </table> 
           
    <br></br><br></br>
     <p>3. Research one of the following psychological experiments and analyze the ethics of the research. The Milgram Obedience Experiment, the Asch Conformity Experiment, or the Little Albert Experiment. </p>
        <br></br>
     <p>4. On January 14th, 1911, Roald Amundsen landed on the Ross Ice Shelf. Assuming that the Ross Ice Shelf is the same size as France and 300 meters thick, what would be the size in global mean sea level if the entire glacier melted? Keep in mind that 71% of the Earth’s surface is covered in water, and water expands when melted. 
    </p>
    <br></br>
    <p><b></b>5. microRNAs (miRNAs) are RNA molecules that range from 15-20 nucleotides long on average. The functionality of miRNAs is to make post-transcriptional modifications to the cell’s proteome by binding to and obstructing or degrading mRNA. Why could taking advantage of miRNA molecules through the development of new therapeutics potentially be beneficial in dealing with viruses? </p>

 </section>


      
    
             </> 
        )
    }
}
