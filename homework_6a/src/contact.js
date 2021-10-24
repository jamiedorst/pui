import "./App.css";
import Navbar from "./navbar.js";
import yarn from "./Assets/yarn.jpg"; // yarn image

function Contact() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body>
        <div id="contactSect">
          <h3>Contact Us</h3>
          {/* &nbsp; pushes hours to next line */}
          <p id="centerText">
            Have a question, comment, or complaint? We want to hear it! Email us
            anytime or call during our business
            hours:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Monday through Friday,
            9am to 5pm.
          </p>
          <h6>fluff@stuff.com</h6>
          <h6>(412) 814 8174</h6>
          <img
            id="contactImg"
            src={yarn}
            alt="Four balls of neutral color yarns"
          ></img>
        </div>
      </body>
    </div>
  );
}

export default Contact;
