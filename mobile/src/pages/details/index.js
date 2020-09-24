import React, { Component } from 'react';
import { View, Text } from 'react-native';

import api from '../../services/api';

import {
   Container,
   HeaderContainer,
   LogoImage,
   SearchBarContainer,
   SearchBarInput,
   GameDetailedView,
   GameDetailedImage,
   GameNameText,
   GamePlatformsContainer,
   PlatformTitleText,
   PlatformText,
   BuyButton,
   BuyButtonText,
   GameAdditionalsContainer,
   InformationsMenuContainer,
   InformationMenuOptionButton,
   MenuOptionText,
   DivisionInformationMenu,
   GameDescriptionText,
   MenuOptionSelectedText
} from '../style';

export default class Details extends Component {
   constructor(props) {
      super(props);


      this.state = {
         games: [],
         id: this.props.route.params.params
      }
   }

   componentDidMount() {
      api.get(`games/${this.state.id}`).then(response => {
         this.setState({ games: response.data });
      })
   }

   searchGame(event){
      const gameName = event.target.value;
      if(event.key == "Enter"){
         api.get(`games/name/${gameName}`).then(response=>{
            this.setState({games: response.data})
         })
      }
   }

   render() {
      return (
         <Container>

            <HeaderContainer>
               <LogoImage source={require('../../assets/logo.png')} />
            </HeaderContainer>

            {this.state.games.map(game => (
               <GameDetailedView key={game.id}>
                  <GameDetailedImage source={{ uri: game.image_link }} />
                  <GameNameText>{game.name}</GameNameText>
                  <GamePlatformsContainer>
                     <PlatformTitleText>
                        Plataformas:
                           </PlatformTitleText>
                     <PlatformText>
                        {game.platforms}
                     </PlatformText>
                  </GamePlatformsContainer>
                  <GameNameText>
                     R$ {game.price.toFixed(2).replace(".", ",")}
                  </GameNameText>

                  <BuyButton>
                     <BuyButtonText>Comprar</BuyButtonText>
                  </BuyButton>

                  <GameAdditionalsContainer>
                     <InformationsMenuContainer>
                        <InformationMenuOptionButton>
                           <MenuOptionSelectedText>Descrição</MenuOptionSelectedText>

                        </InformationMenuOptionButton>

                        <DivisionInformationMenu />

                        <InformationMenuOptionButton>
                           <MenuOptionText>Lojas Físicas</MenuOptionText>
                        </InformationMenuOptionButton>
                     </InformationsMenuContainer>

                     <GameDescriptionText>
                        {game.description}
                     </GameDescriptionText>
                  </GameAdditionalsContainer>
               </GameDetailedView>
            ))}
         </Container>
      )
   }
}