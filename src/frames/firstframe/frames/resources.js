import React from "react"
import "../../../styles/style.css"
import { LoginSetupContainer } from "../../../containers/loginsetup"
import firebase from "firebase" 

import calendar from "../../../../src/images/InterSTEMBowlCalendar.png"

export default class ResourcesFirstFrame extends React.Component {
    constructor() {
        super()
        this.state = {
            loggedIn: ''
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            console.log('hello'); 
              this.setState({loggedIn: 'yes'})
            } else {
                this.setState({loggedIn: 'no'})
            }
          }.bind(this));
          
    }

    render() {
       
        
        return (
            <>
            <div className="c-paper" style={{paddingBottom:0}}>
              <center><img src={calendar} id="calendar"></img></center>
            </div>

            <section id="intro" className="c-paper colored-bg c-paper--no-border-radius-bottom h-mb-0" style={{backgroundColor:"var(--yellow)"}}>
             <h2 className="section-title">Study Resources</h2>
                {this.state.loggedIn == 'yes' ? 
                    <>
                    <p>NOTICE: If you have not filled out the binding registration form after creating an InterSTEM Bowl account, please do so ASAP <a href="https://docs.google.com/forms/d/e/1FAIpQLScILTXGyAxtIIyi9pYYxr4ddvdH1S9oerO6cQ5SbYjW22B-dQ/viewform" target="_blank">here!</a> Additional competition resources will be attached later this week.</p>
                    <a className="resource-btn" href="https://drive.google.com/file/d/16b_T0hV1kze3rblCPp5kWHQfMZmM9VIE/view?usp=sharing" target="_blank">Practice Test 1</a>
                    </>
                : ( 
                    <>
                        <center><p>You must be logged in to access study resources.</p></center>
                    </> 
                )}
            </section>
            <section id="intro" className="c-paper colored-bg c-paper--no-border-radius-bottom h-mb-0" style={{backgroundColor:"var(--salmon)"}}>
             <h2 className="section-title">FAQs</h2>
              
                    <p>
<b>What is InterSTEM? What does InterSTEM do?</b> 

<br></br>Mission statement: InterSTEM is a non-profit organization that hopes to raise awareness about the relevance of STEM-related topics to the world. Functioning mainly online, InterSTEM offers a tutoring service for students, updates readers about current news in STEM through articles and blog posts, and plans collaborative projects between high school and elementary students. Through the integration of science, technology, engineering, and mathematics, InterSTEM provides students of all backgrounds the opportunity to explore and dive deeper into the world of STEM.

To learn more about InterSTEM, please join our Discord server here and visit our website here. 

<br></br><br></br><b>How do teams work?</b>

<br></br>On the binding registration form, you can specify a team of up to four people to compete with. Team members must complete the quiz individually, but they are welcome to submit a team article or video. To determine team prizes, the top score for each quiz subject on the team will be summed; the team with the highest aggregate score will receive first place. 

<br></br><br></br><b>Can I win prize(s)? </b>

<br></br>If you live in the United States, you are eligible to win any of our prizes! You can win multiple prizes in different categories (quiz, article, video, team), but not multiple prizes in the quiz category (e.g. physics and biology). 

<br></br><br></br><b>Are the problem writers qualified?</b>

<br></br>Many of our problem writers have done very well in olympiad contests. There are several USAMO qualifiers on our problem writing team, as well as students who have qualified for USABO / USNCO / USAPhO semifinals. 

                        
                        </p>
            
            </section>

            <br></br>
             <h2 className="section-title">Logistics</h2>
            
             <p>
The quiz portion of the competition will test students’ ability to quickly and accurately solve problems in a variety of subjects: mathematics, physics, chemistry, biology, and computer science. All participants will choose three subjects to get tested on. 

<br></br>The exam will be proctored live through Zoom (details will be sent out to all registrants through email). There will be three timeslots from which the participant can choose to take the test.

<br></br><br></br>Saturday, March 20th, 2021, 1:00 - 4:00pm PST
<br></br><br></br>Saturday, March 27th, 2021, 1:00 - 4:00pm PST
<br></br><br></br>Saturday, March 27th, 2021, 8:00 - 11:00pm PST 

<br></br><br></br>During each timeslot, all participants will be provided with 3 separate exams, covering subjects of their choice. Each exam will be 45 minutes long in duration and contain 50 multiple choice questions of varying difficulty. All problems are weighted equally and must be submitted through Google Forms on time. 

<br></br><br></br>Participants will be allowed blank scratch paper (no lined or graph paper) and writing utensils. Calculators, protractors, compasses, and electronic devices are strictly forbidden. All participants must obtain access to a working microphone and webcam -- students will be expected to keep cameras on and microphones unmuted for the duration of the contest. 

<br></br><br></br>Everyone will be eligible to compete for awards in the competition. Each subject will have an individual award, delivered to the highest-scoring student(s). There will also be a separate team award, given to the team with the greatest sum of top scores for each subject. To account for variability in test difficulties, scores will be normalized on a bell curve when calculating team scores. 


<br></br><br></br><br></br><hr></hr><br></br>       <b>Writing</b> 
<br></br>The prompt for the writing competition will be released on March 15th on this website and through email to all registered participants. All submissions will be due by March 27th, 11:59pm PST via a Google Form linked on the website.

<br></br><br></br>Article submissions should be between 500 and 2000 words in length. Longer submissions will not necessarily receive a higher score; conciseness and attention to detail are strongly encouraged. 

<br></br><br></br>The grading will be done according to the following rubric:
Content: 60 Points (scientific accuracy, level of detail, persuasiveness)
Writing: 30 Points (grammar, syntax, writing style)
Adherence to prompt: 10 Points
<br></br><br></br><br></br><hr></hr>
<br></br><b>Video</b> 
<br></br>

<br></br><br></br>The prompt for the video competition will be released on March 15th on this website and through email to all registered participants. All submissions will be due by March 27th, 11:59pm PST via a Google Form linked on the website.

<br></br><br></br>Video submissions must be under three minutes in length. The video should be attractive and understandable by the general public. Winning submissions will be posted on our YouTube channel, InterSTEM Media. <br></br><br></br>
</p>


                       
            </>
        )
    }
}