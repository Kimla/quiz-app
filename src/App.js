import React, { Component } from "react";
import axios from "axios";
import Question from "./components/Question";
import Answer from "./components/Answer";
import NextButton from "./components/NextButton";
import Clock from "./components/Clock";
import Points from "./components/Points";
import Header from "./components/Header";
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
      timer: 30,
      points: 0
    };
  }

  nextQuestion() {
    clearInterval(this.timer);

    this.setState(state => {
      return {
        question: null,
        answers: [],
        correctAnswer: null,
        answered: null,
        answeredCorrect: null,
        timer: 30,
        points: state.answeredCorrect ? state.points : 0
      };
    });

    this.setQuestion();
  }

  async setQuestion() {
    let url = "https://opentdb.com/api.php?amount=1&difficulty=";

    if (this.state.points < 10) {
      url += "easy";
    } else if (this.state.points < 20) {
      url += "medium";
    } else {
      url += "hard";
    }

    const res = await axios.get(url);
    const [item] = res.data.results;

    let answers = [];

    if (item.type === "boolean") {
      answers = ["False", "True"];
    } else {
      answers = shuffle([...item.incorrect_answers, item.correct_answer]);
    }

    this.setState({
      question: item.question,
      answers: answers,
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

    this.setState(state => {
      return {
        answered: answer,
        answeredCorrect: answer === state.correctAnswer,
        points: answer === state.correctAnswer ? state.points + 1 : state.points
      };
    });
  }

  render() {
    const {
      question,
      answers,
      answered,
      answeredCorrect,
      correctAnswer,
      timer,
      points
    } = this.state;

    return (
      <div className="app">
        <Header />
        <main className="appInner">
          <div className="quizContainer container">
            <Question question={question} />
            <div className="answers">
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
            </div>
            {answered && (
              <NextButton
                answeredCorrect={answeredCorrect}
                onClick={() => this.nextQuestion()}
              />
            )}
            {!answered && <Clock time={timer} />}
          </div>
          <Points points={points} />
        </main>
      </div>
    );
  }
}

export default App;
