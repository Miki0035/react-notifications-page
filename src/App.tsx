import Accordion from "./components/Accordion";
import { accordionData } from "./data";
import "./App.css";

const App = () => {
  return (
    <main>
      <article>
        <div className="notifications-container">
          <h1>
            Notifications <span>3</span>
          </h1>
          <p>Mark all as read</p>
        </div>
        <div className="accordion-container">
          {accordionData.map((data, index) => (
            <Accordion key={index} {...data} />
          ))}
        </div>
      </article>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.linkedin.com/in/mikiyas-kebede-b661aa225" target="_blank">Mikiyas Kebede</a>.
      </div>
    </main>
  );
};

export default App;
