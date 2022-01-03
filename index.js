const words = {
    "Tasche": "die",
    "Wasser": "das",
    "Couch": "die",
    "Tisch": "der",
    "Stuhl": "der",
    "Musik": "die",
    "Geschenk": "das",
    "Hotel":"das",
    "Tag":"der",
    "Tee": "der",
    "Rindfleisch": "das",
    "Milch": "die",
    "Thunflisch": "der",
    "Erdbeere": "die",
    "Brot": "das",
    "Ei": "das",
    "Honig": "der"
}
var word = "";
var Answer = "";
var score = 0;
const question = () =>{
    const keys = Object.keys(words);
    const number = Math.floor(Math.random() * keys.length);
    console.log(number);
    console.log(keys[number]);
    console.log(words[keys[number]]);
    word = keys[number];
    Answer= words[keys[number]];
    document.querySelector('#question').innerHTML = word;
    setTimeout(() => {
        document.querySelector('.correct_answers').innerHTML = "";
    }, 1000);

}
document.addEventListener("DOMContentLoaded", question);
document.querySelectorAll('li').forEach(answer =>{
    answer.addEventListener('click', ()=>{
        const userAnswer = answer.dataset.value;
        if (userAnswer === Answer) {
            console.log("hurray");
            score++;
            document.querySelector('.numberOf_right_answers').innerText = "score: "+ score;
        }else{
            console.log("try again!")
            document.querySelector('.correct_answers').innerHTML = `Correct Answer: ${Answer}`;
        }
        question();
    })
})