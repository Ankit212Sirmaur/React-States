import './App.css'
import Faq from './interviewQuestions/Accordian/Faq';
import TimerChallenge from './interviewQuestions/CountDownTimer/TimerChallenge';
import ModalOverlay from './interviewQuestions/ModalApp/ModalOverlay';
import MultiStepForm from './interviewQuestions/multi-step-form/MultiStepForm';
import Web from './interviewQuestions/someCss/Web';
function App() {

  return (
    <div className="App">
      {/* <TimerChallenge/> */}
      {/* <Faq/> */}
      {/* <ModalOverlay/> */}
      {/* <Web/> */}
      <MultiStepForm/>
    </div>
  );
}

export default App;
