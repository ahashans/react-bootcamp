import React, {Component} from 'react';
import './Coin.css'

class Coin extends Component {
    static defaultProps = {
        coin: {
            head: {
                link: 'https://24carat.co.uk/images/1997bangladeshtakarev400.jpg',
                title: 'Head'
            },
            tail: {
                link: 'https://24carat.co.uk/images/1997bangladeshtakaobv400.jpg',
                title: 'Tail'
            }
        }
    };


    render() {
        const coin = this.props.current !== '' && <img src={this.props.coin[`${this.props.current}`].link}
                                                       alt={this.props.coin[`${this.props.current}`].title}></img>
        return (
            <div className={`Die ${this.props.current!==''&& 'tossing'}`}>
                {coin}
            </div>
        );
    }
}

export default Coin;