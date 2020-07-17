import React from 'react';
import { connect } from 'react-redux';
import { shuffleAnswers } from '../service';

const GameQuestions = (props) => {
  console.log(props);
  let questionsIndex = 0;
  return (
    <div>
      <div>
        <h2 data-testid="question-category">{props.questionCategory}</h2>
      </div>
      <div>
        <h1 data-testid="question-text">{props.questionText}</h1>
        <ul>
          {props.questionCategory ? (
            shuffleAnswers(props.correctAnswer, props.incorretAnswers).map(
              (question) => {
                if (question === props.correctAnswer) {
                  return (
                    <li>
                      <button data-testid="correct-answer">{question}</button>
                    </li>
                  );
                }
                return (
                  <li>
                    <button data-testid={`wrong-answer-${questionsIndex++}`}>
                      {question}
                    </button>
                  </li>
                );
              },
            )
          ) : (
            <div>Loading...</div>
          )}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  if (state.data) {
    return {
      questionCategory: state.data[0].category,
      questionText: state.data[0].question,
      incorretAnswers: state.data[0].incorrect_answers,
      correctAnswer: state.data[0].correct_answer,
    };
  }
};
export default connect(mapStateToProps)(GameQuestions);
