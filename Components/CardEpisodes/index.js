import React from "react";
import "./styles.css";


function CardEpisodes(props){
    const {id, name, air_date, episode, characters } = props;

    return(
        <div >
            <div className="line">
                <br/>
                <p>Informações do Episodio</p>
            </div>
            <div className="ep-card">          
                <p>ID do Episodio: {id}</p>
                <p>Nome: {name}</p>
                <p>Data de Exibição: {air_date}</p>
                <p>Temporada: {episode}</p>
                <p>Quantidade de Personagens: {characters}</p>
                {}
            </div>
        </div>
    )
}
    
export default CardEpisodes; 