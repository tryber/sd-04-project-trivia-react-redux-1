import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    this.handleTimeOut = this.handleTimeOut.bind(this);
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
          this.handleTimeOut();
        }
      }, 1000);
    }
  }

  handleTimeOut() {
    clearInterval(this.timer);
    this.setState({
      answered: true,
    });
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
              type="button"
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
            type="button"
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
          <h1 data-testid="question-text">{this.props.questionText}</h1>
          <ul>
            {this.props.questionCategory ? (
              <div>
                {this.renderQuestions()}
                <div>
                  <h2>Tempo: {this.state.timeLeft}</h2>
                </div>
                {this.props.index === this.props.questionsNumber - 1 ? (
                  <Link to="/feedback">
                    <button type="button">Ver resultados</button>
                  </Link>
                ) : (
                  <button type="button" onClick={this.handleNextQuestion}>
                    Próxima
                  </button>
                )}
              </div>
            ) : (
              <div>Loading...</div>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.data.receivedData) {
    const index = state.trivia.question;
    const data = state.data.questionsData;
    const questionData = data[index];
    return {
      questionCategory: questionData.category,
      questionText: questionData.question,
      incorretAnswers: questionData.incorrect_answers,
      correctAnswer: questionData.correct_answer,
      difficulty: questionData.difficulty,
      index,
      questionsNumber: data.length,
    };
  }
  return { receivedData: state.data.receivedData };
};
export default connect(mapStateToProps, { nextQuestion, handleScore })(
  GameQuestions,
);
