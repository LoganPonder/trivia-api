import { ProxyState } from "../AppState.js";
import { triviaService } from "../Services/TriviaService.js";

//Private
function _draw() {
    let questions = ProxyState.questions;
    let template = '';
    questions.forEach(q => template += q.Template);
    document.getElementById("app").innerHTML = `
        <div class="d-flex flex-column">
          ${template}
      </div>
    <button class="btn btn-primary" onclick="app.triviaController.newQuestions()">New Questions</button>    
    `;
}

//Public
export default class TriviaController {
  constructor() {
    ProxyState.on("questions", _draw);
    

    triviaService.newQuestions('')
  }

  newQuestions(url) {
      triviaService.newQuestions(url);
  }

  isCorrect(a, correct) {
      triviaService.isCorrect(a, correct);
  }
}
