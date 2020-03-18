import React, { Component } from "react";
import {randomWord} from "./words";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
    if(this.state.nWrong===this.props.maxWrong){
      console.log("doomed!");

    }
  }
  refreshPage(){
    // window.location.reload(false);
    this.setState({
      nWrong:0,
      guessed: new Set(),
      answer:randomWord()
    })
  }
  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        value={ltr}
        onClick={this.handleGuess}
        key={ltr}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
  render() {
    let gameOver = this.state.nWrong >= this.props.maxWrong;
    let answerArray = this.state.answer.split("");
    let guessed = this.state.guessed;
    let win = true;
    for(let i=0;i<answerArray.length;i++){
      if(!guessed.has(answerArray[i])){
        win=false;
        break;
      }
    }

    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        {this.state.nWrong<this.props.maxWrong&&<img src={this.props.images[this.state.nWrong]} alt={(this.props.maxWrong - this.state.nWrong)+" guess remaining!"}/>}
        <p>Incorrect Guesses: {this.state.nWrong}</p>
        {!gameOver
            ?<p className='Hangman-word'>{this.guessedWord()}</p>
            :<p className='Hangman-word'>{this.state.answer}</p>}
        <p className='Hangman-btns'>
          {!gameOver
            ? (this.guessedWord().join("")===this.state.answer?"You Win":this.generateButtons())
            : "You Lose"}
        </p>
        <button id="reset" onClick={this.refreshPage}>Play Again</button>
      </div>
    );
  }
}

export default Hangman;
