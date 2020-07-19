import React from 'react';
import HomePage from '/.HomePage'

class Ranking extends React.Component {
  return () {
    <div>
      <Button onClick = {() => {HomePage}} data-testid="btn-go-home">Go home</Button>
    </div>
  }
}

export default Ranking;