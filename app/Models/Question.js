export default class Value {
  constructor({ category, difficulty, question, correct_answer, incorrect_answers}) {
    this.category = category
    this.difficulty = difficulty
    this.question = question
    this.correct = correct_answer
    this.incorrect = incorrect_answers

    this.answers = [this.correct, ...this.incorrect];
    this.answers.sort(() => Math.random() - 0.5);
  }

  get Template() {
    return /*html*/ `
        <div class="card p-2 value text-center my-5 trivia-card">
        <p class="lead text-white">${this.question}</p>
        <div id="answers" class="d-flex flex-column">${this.Answers}</div>
        </div>
        `;
  }

    get Answers() {
        let template = '';
        this.answers.forEach(a => template += `<button onclick="app.triviaController.isCorrect('${a}', '${this.correct}')" class="btn btn-primary mb-2 btn-answer">${a}</button>`);
        return template;
    }
}
