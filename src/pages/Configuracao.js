import React from 'react';
import { getCategorys } from '../service';

// const categorys = getCategorys().then((cat) => cat.map(e => <option>{e.name}</option>))
  
class Configuracao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
    }
    // this.sel = this.sel.bind(this);
  }

  // componentDidMount() {
  //   const ad = getCategorys().then(data => console.log(data.map(e => e.name)));
  //   this.setState({ categorias: ad })
  //   console.log('test', this.state.categorias)
  // }

  // sel = () => {
  //   const { categorias } = this.state;
  //   return !categorias ? <option>loading</option> : categorias.map((cat) => <option>{cat}</option>)
  // }  

  render() {
    // const { categorias } = this.state
  return (
    <form>
      <h2 data-testid="settings-title">Configurações</h2>
      <select>
      {/* {this.sel()}  */}
      </select>
    </form>
  );
}}

export default Configuracao;
