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
            <p>Leaderboard</p>
            <table> 
                <tr style={{backgroundColor: "#dfeff5"}}>
                    <th></th>
                    <th>Student</th>
                    <th>Points</th>
                    
                </tr>
                <tr>
                    <th style={{backgroundColor: "#dfeff5"}}>1</th>
                    <th style={{backgroundColor: "#25f01d"}}>Bian Lee</th>
                    <th style={{backgroundColor: "#25f01d"}}>1000 ↑</th>
                </tr>
                <tr>
                    <th style={{backgroundColor: "#dfeff5"}}>2</th>
                    <th style={{backgroundColor: "#c8f2c7"}}>Jeff Bezos</th>
                    <th style={{backgroundColor: "#c8f2c7"}}>920</th>
                </tr>
                <tr>
                    <th style={{backgroundColor: "#dfeff5"}}>3</th>
                    <th style={{backgroundColor: "#c8f2c7"}}>Warren Buffett</th>
                    <th style={{backgroundColor: "#c8f2c7"}}>900</th>
                </tr>
                <tr>
                    <th style={{backgroundColor: "#dfeff5"}}>4</th>
                    <th style={{backgroundColor: "#c8f2c7"}}>Jack Ma</th>
                    <th style={{backgroundColor: "#c8f2c7"}}>860 ↓</th>
                </tr>
                <tr>
                <th style={{backgroundColor: "#dfeff5"}}>5</th>
                    <th style={{backgroundColor: "#c8f2c7"}}>Bernard Arnault</th>
                    <th style={{backgroundColor: "#c8f2c7"}}>820</th>
                </tr>
            </table> 
         </section>
 <section id="intro" className="c-paper c-paper--no-border-radius-bottom h-mb-0">
    Jan 4, 2021
     <br></br><br></br>
     <p>1. On the first day of school, 78 people show up to the math club meeting. Each person knows at least 52 other people at the club meeting. Prove that there are 4 people with the same number of friends.</p>
     <br></br>
     <p>2.</p>
            <pre>{`
                J A N = 4

                F E B = 5

                M A R = 4

                A P R = ?
            `}
            </pre>
           
    <br></br>
     <p>3. If everyone on Earth had to move to a different planet, what are the most important things that people will need in order to survive? List and rank 3 needs. Use scientific concepts to explain why. </p>
        <br></br>
     <p>4. On January 7th, 1953, President Truman announced that the United States had developed a hydrogen bomb. Why are hydrogen bombs more powerful than atomic bombs? The largest hydrogen bomb to be detonated was the Tsar Bomba, with a blast yield of 210 PJ. McDonalds has served over 300 billion hamburgers since its founding. Which contains more energy -- 300 billion Big Macs or the Tsar Bomba?
    </p>
    <br></br>
    <p><b></b>5. If n is an int, what is the complexity of the following code in Big-O notation? Explain.</p>
    <pre>{`
    for (int i = 0; i < n; i++) {
        for (int j = 1; j <= n; j *= 2) {
            for (int z = 0; z < n; z++) {
                System.out.println("InterSTEM Bowl");
            }
        }
    }
`}</pre>

 </section>


      
    
             </> 
        )
    }
}
