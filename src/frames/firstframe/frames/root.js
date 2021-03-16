import React from "react";
import "../../../styles/style.css";

import aopsLogo from "../../../images/aops-logo.svg";
import wolframAlphaLogo from "../../../images/wolfram.png";

// Is there a better way to do this?
import aJoo from "../../../images/alyssajoo.png";
import aPan from "../../../images/andrewpan.png";
import aLe from "../../../images/anh-thaile.png";
import cDing from "../../../images/carolineding.png";
import cWang from "../../../images/christalwang.png";
import cLi from "../../../images/cocoli.png";
import eCheng from "../../../images/ericcheng.png";
import evCheng from "../../../images/eviencheng.png";
import eHo from "../../../images/ericho.png";
import mShim from "../../../images/minjushim.JPG";
import sSowa from "../../../images/satisowa.jpg";
import sCao from "../../../images/shirleycao.JPG";
import sYu from "../../../images/skylaryu.png";

export default class RootFirstFrame extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <section className="c-paper intro colored-bg c-paper--no-border-radius-bottom h-mb-0">
          <p>
            InterSTEM Bowl is a unique STEM competition that allows students to
            showcase their creativity and test their knowledge in a variety of
            STEM fields. Over $1000 in cash prizes will be split between 15+
            winners.{" "}
            <a href="https://nahn5f40e7j.typeform.com/to/dbH76h3J">
              Registriation{" "}
            </a>{" "}
            (also on login page) for InterSTEM Bowl is currently open. The
            competition will be held in late March with the following
            categories:{" "}
          </p>
          <p>
            {" "}
            - Quiz category: a science bowl-like exam on subjects such as
            biology, chemistry, physics, math, and computer science
          </p>
          <p>
            {" "}
            - Video category: a video submission on a designated prompt graded
            on content and delivery
          </p>
          <p>
            {" "}
            - Writing category: an article submission on a designated prompt
            graded on content, writing style, and topic adherence
          </p>
        </section>

        <section className="c-paper c-paper--no-border-radius-bottom h-mb-0">
        <h2 className="section-title">InterSTEM Bowl Committee</h2>
        <div className="team-container">
          <div className="team-card">
            <div className="team-img" style={{backgroundImage: `url(${aJoo})`}}></div>
            <p>Alyssa Joo (Biology)</p>
          </div>
          <div className="team-card">
            <div className="team-img" style={{backgroundImage: `url(${aPan})`}}></div>
            <p>Andrew Pan (Physics)</p>
          </div>
          <div className="team-card">
            <div className="team-img" style={{backgroundImage: `url(${aLe})`}}></div>
            <p>Anh-Thai Le (Comp Sci)</p>
          </div>
          <div className="team-card">
            <div className="team-img" style={{backgroundImage: `url(${cDing})`}}></div>
            <p>Caroline Ding (Biology)</p>
          </div>
          <div className="team-card">
            <div className="team-img" style={{backgroundImage: `url(${cWang})`}}></div>
            <p>Christal Wang (Biology)</p>
          </div>
          <div className="team-card">
            <div className="team-img" style={{backgroundImage: `url(${cLi})`}}></div>
            <p>Coco Li (Chemistry)</p>
          </div>
          <div className="team-card">
            <div className="team-img" style={{backgroundImage: `url(${eCheng})`}}></div>
            <p>Eric Cheng (Chemistry)</p>
          </div>
          <div className="team-card">
            <div className="team-img" style={{backgroundImage: `url(${eHo})`}}></div>
            <p>Eric Ho <br></br> (Comp Sci)</p>
          </div>
          <div className="team-card">
            <div className="team-img" style={{backgroundImage: `url(${evCheng})`}}></div>
            <p>Evien Cheng (Biology)</p>
          </div>
          <div className="team-card">
            <div className="team-img" style={{backgroundImage: `url(${mShim})`}}></div>
            <p>Minju Shim (Chemistry)</p>
          </div>          
          <div className="team-card">
            <div className="team-img" style={{backgroundImage: `url(${sSowa})`}}></div>
            <p>Sati Sowa (Chemistry)</p>
          </div>
          <div className="team-card">
            <div className="team-img" style={{backgroundImage: `url(${sCao})`}}></div>
            <p>Shirley Cao (Biology)</p>
          </div>
          <div className="team-card">
            <div className="team-img" style={{backgroundImage: `url(${sYu})`}}></div>
            <p>Skylar Yu <br></br> (Math)</p>
          </div>
        </div>
        </section>

        <section className="c-paper colored-bg c-paper--no-border-radius-bottom h-mb-0" style={{backgroundColor: "var(--color-bg)"}}>
          <h2 className="section-title">Our Sponsors</h2>
          <div className="sponsors-container">
            <img className="sponsors" src={wolframAlphaLogo} style={{width: "10vw"}}></img>              
            <img className="sponsors" src={aopsLogo} style={{width: "25vw"}}></img>
          </div>
        </section>
      </>
    );
  }
}
