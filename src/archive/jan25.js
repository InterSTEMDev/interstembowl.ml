import React from "react" 
import { Jan4Archive, Jan11Archive} from "../archive/index"
export default class Jan25Archive extends React.Component {
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
         <h2 className="section-title">Jan 25th, 2021</h2>
     <br></br>
     <p>1. Please move one matchstick to reduce the number below by half.</p>
  
        <center>
          <img src="matchesjan25th.png" style={{width:"30%"}} border="0" alt="Null"/> 
          </center> 
       
    <br></br>
     <p>2. Describe how COVID-19 has impacted the economy of the United States. Use a supply and demand curve to support your answer. </p>
        <br></br>
     <p>3. On January 28, 1986, the Challenger space shuttle exploded after 73 seconds in flight. If the Challenger generated a steady power of 37 million horsepower during the duration of its flight, at what height did it explode?</p>
    <br></br>
    <p>4. Every time a cell divides, a repeating sequence of nucleotides at the end of its chromosomes known as the telomeres shorten. These act as protective caps to make sure none of the actual genome gets removed during cell division. As such, telomere length is an indication of cell age. Keeping this in mind, why would a clone of an organism created from the body cells of another organism have a shorter lifespan?  
    </p>

         </section>

 
    
 
        

      
    
             </> 
        )
    }
}
