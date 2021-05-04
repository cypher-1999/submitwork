import axios from 'axios';
import passed from "./passed.gif"
import failed from "./failed.gif"
import inst from "./inst.gif"
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Questions from "./Components/Questions/Questions";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
const fetchURL = "https://upswyft.herokuapp.com/api/v1/question_paper/QuestionPaperByID?_id=609005d7e899892cfc4c3140";
const postURL = "https://upswyft.herokuapp.com/api/v1/question_paper/EvaluateQuestionPaper";

function App() {
  const [data, setData] = useState(null);
  const [modal, setModal] = useState(false);
  const [modal1,setModal1] = useState(false);
  const [result,setResult] = useState(null);
  var answer = {}
  let questions=[];


  async function fetchTestJSON() {
    const response = await fetch(`${fetchURL}`);
    const test = await response.json();
    return test;
  }
  useEffect(() => {
    fetchTestJSON().then((data) => setData(data));
  }, []);

  const sendAnswer = () => {
    setResult(answer);
     axios.post(postURL, answer)
        .then(response => {setResult(response.data);setModal1(true);});
  }
  const record = (option,id) => {
    answer[id]=option;
  }
  if (data){
    if(!result) setTimeout(sendAnswer, 600000);
    answer = {
      "testID":data["_id"],
    }

    data["questions"].map((que,no)=>{
      answer[que["question_id"]]="option_a";
      questions.push(<Questions no={no} id={que["question_id"]} question={ que["question_text"]}  options={que["options"]} level={que["question_level"]} type={que["question_type"]} topic={que["topic_name"]} recordAnswer={(option,id) => record(option,id)} />)
  })
  
  return (
      <div className="App">
        <Header
          heading={data["test_name"]}
          created={data["test_created_at"]}
          duration={data["test_duration"]}
          image={data["test_image"]}
        />
        <p>
          <b>{data["test_description"]}</b> &nbsp;
          <a href="#" onClick={() => setModal(true)}>
            <b>Instructions</b>
          </a>
        </p>
        {modal && (
          <div className="Inst_Modal">
            <div className="modal_content">
              <div className="cross" onClick={() => setModal(false)}>
                <b>&times;</b>
              </div>
              <emp>{data["test_instructions"]}</emp>
              <img src={inst} alt="inst" width="180" />
              
            </div>
          </div>
        )}
        {modal1 && (
          <div className="Inst_Modal">
            <div className="modal_content">
              

              You have scored <b>{result["scored_marks"]}/{result["full_marks"]}</b> and <b>{result["test_status"] ? <span>passed the test <img src={passed} alt="medal" width="250" /></span>:<span>failed the test <img src={failed} alt="medal" width="220" /> </span> }</b> .
            </div>
          </div>
        )}
          
        {questions}
      
      <button  className="btn btn-success mb-5" onClick={sendAnswer}>Submit</button>    
      </div>
    );
  }
    
  else return <div className="App">Loading</div>;
}

export default App;
