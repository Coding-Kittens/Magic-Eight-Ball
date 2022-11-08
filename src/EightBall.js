import './EightBall.css'
import {useState} from 'react';

const EightBall = ({answers})=>{

const index = (() => Math.floor(Math.random() * answers.length));
const [answer,setAnswer] = useState({msg:'Think of a Question',color:'black'});
const {msg,color} = answer;


return <div onClick={()=>setAnswer(answers[index()])} className ='EightBall'>
<div style={{backgroundColor: color}} className ='EightBall-color'>
<p className ='EightBall-msg'>{msg}</p>
</div>
</div>
}

export default EightBall;
