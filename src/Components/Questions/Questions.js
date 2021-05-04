import "../Questions/Questions.css";
const Questions = ({no,id,question,options,level,type,topic,recordAnswer }) => {
    const setOption = (event) =>{
        let option = event.target.value;
        recordAnswer(option,id)
    }
    return (
        <div className="question" >
            
            <div className="question_head row ">
             <div className="col-3">
                 <b>Question {no+1}</b>
             </div>
              <div className="col-3">
                Topic : <b>{topic}</b>  &nbsp;|  &nbsp; Level : <b>{level}</b>
             </div>
              <div className="col-3">
              
                 Type : <b>{type}</b>
             </div>
            </div>
            <div className ="question_content row mt-2">
                <div className="col-6">{question}</div>
                
            </div>
            <div className="options row col-12 mt-2" onChange={setOption}>
               <div className="custom-control custom-radio">
                 <input type="radio" id={no+"option_a"} name={no+"customRadio"} className="custom-control-input" value="option_a"/>
                 <label className="custom-control-label" htmlFor={no+"option_a"}>{options["option_a"]}</label>
                </div> &nbsp;&nbsp;&nbsp;
                <div className="custom-control custom-radio" >
                <input type="radio" id={no+"option_b"} name={no+"customRadio"} className="custom-control-input" value="option_b"/>
                <label className="custom-control-label" htmlFor={no+"option_b"}>{options["option_b"]}</label>
                </div>
                 &nbsp;&nbsp;&nbsp;
                <div className="custom-control custom-radio" >
                <input type="radio" id={no+"option_c"} name={no+"customRadio"} className="custom-control-input" value="option_c"/>
                <label className="custom-control-label" htmlFor={no+"option_c"}>{options["option_c"]}</label>
                </div>
                 &nbsp;&nbsp;&nbsp;
                <div className="custom-control custom-radio" >
                <input type="radio" id={no+"option_d"} name={no+"customRadio"} className="custom-control-input" value="option_d"/>
                <label className="custom-control-label" htmlFor={no+"option_d"}>{options["option_d"]}</label>
                </div>
            </div>
        </div>
    );
}

export default Questions;