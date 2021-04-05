import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "./AxiosService.js";

class TriviaService {
  async newQuestions(url = '') {
    let res = await api.get(url);
    console.log(res.data);

    ProxyState.questions = res.data.results.map((q) => new Question(q));
  }

  isCorrect(a, correct) {
      console.log(correct)
    if(correct == a) {
        window.alert('Correct!');
    } else {
        window.alert('Incorrect')
    }
  }
}

export const triviaService = new TriviaService();
