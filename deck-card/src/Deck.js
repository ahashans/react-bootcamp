import React, {Component} from 'react';
import axios from "axios";
import Card from "./Card";
import "./Deck.css";
const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1\n";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {deck: null, drawnCards: []};
        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount() {
        let deck = await axios.get(API_URL);
        this.setState({deck: deck.data});
    }

    async getCard() {
        try {
            let cardData = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/`);
            if (!cardData.data.success) {
                throw new Error("All cards are drawn");
            }
            let card = cardData.data.cards[0];
            this.setState(st => ({
                drawnCards: [
                    ...st.drawnCards,
                    {
                        id: card.code,
                        image: card.images,
                        name: `${card.value} ${card.suit}`
                    }
                ]
            }));
        } catch (e) {
            alert("e");
        }

    }

    render() {
        let cards = this.state.drawnCards.map(card => {
                return (
                    <Card image={card.image} name={card.code} key={card.id}/>);
            }
        );
        return (
            <div className="Deck">
                <h1 className="Deck-title">Card Dealer</h1>
                <h2 className="Deck-title subtitle">A little demo made with react!</h2>
                <button onClick={this.getCard} className="Deck-btn">Get Card!</button>
                <div className="Deck-cardarea">
                    {cards}
                </div>
            </div>
        );
    }
}

export default Deck;