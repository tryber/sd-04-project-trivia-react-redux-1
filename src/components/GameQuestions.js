import React from 'react';
import { connect } from 'react-redux';
import { shuffleAnswers } from '../service';
import { nextQuestion, handleScore } from '../redux/actions';

class GameQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
      shufle: true,
      shuffledAnswers: [],
      timeLeft: 30,
      timer: false,
    };
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.incorretAnswers !== prevProps.incorretAnswers) {
      this.handleShufle();
    }
  }

  handleTimer() {
    if (!this.state.timer) {
      this.timer = setInterval(() => {
        if (this.state.timeLeft > 0) {
          this.setState((state) => ({
            timer: true,
            timeLeft: state.timeLeft - 1,
          }));
        }
        if (this.state.timeLeft === 0) {
          clearInterval(this.timer);
          this.handleNextQuestion();
        }
      }, 1000);
    }
  }

  handleAnswer(answer) {
    clearInterval(this.timer);
    this.props.handleScore(answer, this.state.timeLeft, this.props.difficulty);
    this.setState((state) => ({
      answered: !state.answered,
    }));
  }

  handleNextQuestion() {
    clearInterval(this.timer);
    this.props.nextQuestion();
    this.setState({
      answered: false,
      timeLeft: 30,
      timer: false,
    });
  }

  handleShufle() {
    this.setState((state) => ({
      shuffledAnswers: shuffleAnswers(
        this.props.correctAnswer,
        this.props.incorretAnswers,
      ),
      shufle: !state.shufle,
    }));
  }

  renderQuestions() {
    let questionsIndex = 0;
    return this.state.shuffledAnswers.map((question) => {
      if (question === this.props.correctAnswer) {
        this.handleTimer();
        return (
          <li key={question}>
            <button
              disabled={this.state.answered}
              onClick={() => this.handleAnswer(true)}
              className={this.state.answered ? 'correct-answer' : 'answer'}
              data-testid="correct-answer"
            >
              {question}
            </button>
          </li>
        );
      }
      return (
        <li key={question}>
          <button
            disabled={this.state.answered}
            onClick={() => this.handleAnswer(false)}
            className={this.state.answered ? 'wrong-answer' : 'answer'}
            data-testid={`wrong-answer-${questionsIndex++}`}
          >
            {question}
          </button>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <div>
          <h2 data-testid="question-category">{this.props.questionCategory}</h2>
        </div>
        <div>
          <h2>{this.state.timeLeft}</h2>
        </div>
        <div>
          <h1 data-testid="question-text">{this.props.questionText}</h1>
          <ul>
            {this.props.questionCategory ? (
              this.renderQuestions()
            ) : (
              <div>Loading...</div>
            )}
          </ul>
          <button onClick={this.handleNextQuestion}>Próxima</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.receivedData) {
    const index = state.trivia.question;
    const data = state.data[index];
    return {
      questionCategory: data.category,
      questionText: data.question,
      incorretAnswers: data.incorrect_answers,
      correctAnswer: data.correct_answer,
      difficulty: data.difficulty,
    };
  }
  return { receivedData: state.receivedData };
};
export default connect(mapStateToProps, { nextQuestion, handleScore })(
  GameQuestions,
);
