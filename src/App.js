import React, { Component } from "react";
import axios from "axios";
import Question from "./components/Question";
import Answer from "./components/Answer";
import NextButton from "./components/NextButton";
import Clock from "./components/Clock";
const shuffle = require("lodash/shuffle");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      answers: [],
      correctAnswer: null,
      answered: null,
      answeredCorrect: null,
      timer: 30
    };
  }

  nextQuestion() {
    this.setState({
      question: null,
      answers: [],
      correctAnswer: null,
      answered: null,
      answeredCorrect: null,
      timer: 30
    });

    clearInterval(this.timer);
    this.setQuestion();
  }

  async setQuestion() {
    const res = await axios.get("https://opentdb.com/api.php?amount=1");
    const [item] = res.data.results;

    this.setState({
      question: item.question,
      answers: shuffle([...item.incorrect_answers, item.correct_answer]),
      correctAnswer: item.correct_answer
    });

    this.startTimer();
  }

  componentDidMount() {
    this.setQuestion();
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.state.timer > 0) {
        this.setState(state => {
          return { timer: state.timer - 1 };
        });
      } else {
        this.setState(state => {
          return {
            answered: state.correctAnswer,
            answeredCorrect: false
          };
        });
      }
    }, 1000);
  }

  answerQuestion(answer) {
    if (this.state.answered) return;

    this.setState({
      answered: answer,
      answeredCorrect: answer === this.state.correctAnswer
    });
  }

  render() {
    const {
      question,
      answers,
      answered,
      answeredCorrect,
      correctAnswer,
      timer
    } = this.state;

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
              correctAnswer={correctAnswer}
              onClick={() => this.answerQuestion(answer)}
            />
          ))}
          {answered && <NextButton onClick={() => this.nextQuestion()} />}
          {!answered && <Clock time={timer} />}
        </div>
      </div>
    );
  }
}

export default App;
