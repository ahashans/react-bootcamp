import React, {Component} from 'react';
import Pokecard from "./Pokecard";
import './Pokedex.css';
class Pokedex extends Component {
    render() {
       let titleBlock;
        if(this.props.isWinner){
            titleBlock = <h1 className={"Pokedex-winner"}>Winning Hand</h1>;
        }
        else{
            titleBlock = <h1 className={"Pokedex-loser"}>Loser</h1>;
        }
        return (
            <div className={"Pokedex"}>
                <h1>Pokedex!</h1>
                {titleBlock}
                <p>{`Total EXP: ${this.props.exp}`}</p>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (<Pokecard id={p.id}
                                                              name={p.name}
                                                              type={p.type}
                                                              base_experience={p.base_experience}
                                                              key={p.id}
                    />))}
                </div>
            </div>
        );
    }
}

export default Pokedex;