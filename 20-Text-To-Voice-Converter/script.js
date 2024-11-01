let speech=new SpeechSynthesisUtterance();

let voices=[];

let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged=() =>{
voices=window.speechSynthesis.getVoices();
speech.voice=voices{0};
};
document.querySelector("button").addEventListener("click",() =>{
 speech.text=document.querySelector("textarea").value;
 window.speechSynthesis.speak(speech);
});