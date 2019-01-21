import React, { Component } from "react";
import axios from "axios";
import Question from "./components/Question";
import Answer from "./components/Answer";
import NextButton from "./components/NextButton";
const shuffle = require("lodash/shuffle");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      answers: [],
      right_answer: null,
      answered: null,
      answeredCorrect: null
    };
  }

  nextQuestion() {
    this.setState({
      question: null,
      answers: [],
      right_answer: null,
      answered: null,
      answeredCorrect: null
    });

    this.setQuestion();
  }

  async setQuestion() {
    const res = await axios.get("https://opentdb.com/api.php?amount=1");
    const [item] = res.data.results;

    this.setState({
      question: item.question,
      answers: shuffle([...item.incorrect_answers, item.correct_answer]),
      right_answer: item.correct_answer
    });
  }

  componentDidMount() {
    this.setQuestion();
  }

  answerQuestion(answer) {
    if (this.state.answered) return;

    this.setState({
      answered: answer,
      answeredCorrect: answer === this.state.right_answer
    });
  }

  render() {
    const { question, answers, answered, answeredCorrect } = this.state;

    return (
      <div className="app">
        <div className="container">
          <Question question={question} />
          {answers.map(answer => (
            <Answer
              key={answer}
              answer={answer}
              answered={answered}
              answeredCorrect={answeredCorrect}
              onClick={() => this.answerQuestion(answer)}
            />
          ))}
          {answered && <NextButton onClick={() => this.nextQuestion()} />}
        </div>
      </div>
    );
  }
}

export default App;
