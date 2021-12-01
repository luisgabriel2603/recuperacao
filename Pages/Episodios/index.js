import HeaderResponsive from "../../Components/HeaderResponsive";
import CardEpisodes from "../../Components/CardEpisodes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import api from "../../Api";
import "./styles.css";


function Episodios() {
    const [data, setData] = useState(null);
    const [name, setName] = useState("");

    async function load() {
        let res = await api.getEpisodesById(name);
        setData(res)
    }

    async function searchCharacter(event) {
        event.preventDefault();
        setData(null);
        if (name) {
            load();
        }
    }

    function handleName(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <HeaderResponsive />
            <div className="search-container form-choice">            
                <form onSubmit={searchCharacter} >
                
                    <input type="radio" id="page1" name="pageEpisodes" value="1" onChange={handleName}/>
                    <label className="options-input" for="page1">Lista de Episodios Nº1 - 20 </label>

                    <input type="radio" id="page2" name="pageEpisodes" value="2" onChange={handleName}/>
                    <label className="options-input" for="page2">Lista de Episodios Nº21 - 40</label>

                    <input type="radio" id="page3" name="pageEpisodes" value="3" onChange={handleName}/>
                    <label className="options-input" for="page3">Lista de Episodios Nº41 - 51</label>
                    <br/><br/>

                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} size="lg" className="fas fa-camera fa-2x"/>
                    </button>
                </form>
            </div>
            <div className="results-container">{
                data &&
                ((data.error)
                    ? <h1>Busca não encontrada</h1>
                    : data.results.map((item, key) => {
                        return <CardEpisodes
                            key={key}
                            id={item.id}                            
                            name={item.name}
                            air_date={item.air_date}
                            episode={item.episode}
                            characters={
                                item.characters.length
                            }

                        />
                    })
                )
            }
            </div>
        </div>

    );
}

export default Episodios;