import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';


import Header from '../../header';
import Filter from '../../filter';
import Game from '../../game';
import Footer from '../../footer';
import BackButton from '../../backButton';
import Details from '../../details';

import api from '../../../services/api';

import nintendoGrayLogo from '../../../assets/images/nintendo-gray-logo.svg';
import nintendoLogo from '../../../assets/images/nintendo-logo.svg';
import playstationGrayLogo from '../../../assets/images/playstation-gray-logo.svg';
import playstationLogo from '../../../assets/images/playstation-logo.svg';
import xboxGrayLogo from '../../../assets/images/xbox-gray-logo.svg';
import xboxLogo from '../../../assets/images/xbox-logo.svg';
import pcGrayLogo from '../../../assets/images/pc-gray-logo.svg';
import pcLogo from '../../../assets/images/pc-logo.svg';
import notFoundImg from '../../../assets/images/not-found.svg';


import './style.css';

function Home() {

   const [games, setGames] = useState([]);
   const [filterStatus, setFilterStatus] = useState([false, false, false, false])
   const [searchedGame, setSearchedGame] = useState("");
   const [detailedGame, setDetailedGame] = useState("");


   useEffect(() => {
      updateGameList();
   }, []);

   const openDetails = (id) => {
      setDetailedGame(id);
   }


   const searchGame = (gameName) => {
      api.get(`games/name/${gameName}`).then(response => {
         setGames(response.data);
         setSearchedGame(gameName);
         if(detailedGame){
            setDetailedGame(false)
         }
      }).catch(err => {
         setSearchedGame(gameName);
         if(detailedGame){
            setDetailedGame(false)
         }
         setGames(null);
      })
   }

   const cleanSearch = async () => {
      await updateGameList();
      setDetailedGame(false);
   }

   const updateGameList = (filterNumber) => {
      if (filterNumber != undefined) {
         let platform = "";
         switch (filterNumber) {
            case 0:
               platform = "wi";
               break;

            case 1:
               platform = "ps"
               break;

            case 2:
               platform = "xbox";
               break;

            case 3:
               platform = "pc";
               break;
         }
         api.get(`games/platform/${platform}`).then(response => {
            setGames(response.data);
         })
      } else {
         api.get('games').then(response => {
            setGames(response.data);
            setSearchedGame("");

         })

      }

   }

   const changeFilterStatus = (filterNumber) => {

      let filters = [];

      if (filterStatus[filterNumber]) {
         filters = filterStatus.map(filter => {
            filter = false;
            return filter;
         });
         setFilterStatus(filters);
         updateGameList();

      } else {
         filters = filterStatus.map(filter => {
            filter = false;
            return filter;
         });

         filters[filterNumber] = true;
         setFilterStatus(filters);
         updateGameList(filterNumber);
      }

   }

   return (
      <div id="home-page">
         <div id="home-page-content" className="container">
            <Header searchGame={searchGame} />

            {detailedGame && (
               <>
                  <BackButton cleanSearch={cleanSearch} />
                  <Details id={detailedGame} />
               </>
            )}


            {!searchedGame && !detailedGame && (
               <>
                  <div id="filter-container" className="container">
                     <Filter name="Nintendo" onImage={nintendoLogo} offImage={nintendoGrayLogo} status={filterStatus[0]} filterNumber={0} changeFilterStatus={changeFilterStatus} />
                     <Filter name="Playstation" onImage={playstationLogo} offImage={playstationGrayLogo} status={filterStatus[1]} filterNumber={1} changeFilterStatus={changeFilterStatus} />
                     <Filter name="Xbox" onImage={xboxLogo} offImage={xboxGrayLogo} status={filterStatus[2]} filterNumber={2} changeFilterStatus={changeFilterStatus} />
                     <Filter name="PC" onImage={pcLogo} offImage={pcGrayLogo} status={filterStatus[3]} filterNumber={3} changeFilterStatus={changeFilterStatus} />
                  </div>
                  <div id="games-container" className="container">
                     {games.map(game => (
                        <Game game={game} openDetails={openDetails} />
                     ))}
                  </div>
               </>
            )}


            {searchedGame && !detailedGame && (
               <div id="search-games-container" className="container">
                  <BackButton cleanSearch={cleanSearch} />


                  {!games && (
                     <>
                        <h1>Nenhum resultado encontrado por "{searchedGame}"</h1>

                        <div id="result-not-found-games">
                           <img src={notFoundImg} alt="Não Encontrado" />
                        </div>
                     </>
                  )}
                  {games && (
                     <>
                        <h1>Resultados obtidos por "{searchedGame}"</h1>
                        <div id="result-search-games">
                           {games.map(game => (
                              <Game game={game} openDetails={openDetails} />
                           ))}
                        </div>
                     </>
                  )}


               </div>
            )}
            <Footer />
         </div>
      </div>
   )
}

export default Home;