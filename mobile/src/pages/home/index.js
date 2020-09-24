import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import api from '../../services/api';

import {
   Container,
   HeaderContainer,
   LogoImage,
   SearchBarContainer,
   SearchBarInput,
   GameCardView,
   GameCardImage,
   GameCardName,
   GameCardPriceContainer,
   GamePriceText,
} from '../style';

export default class Home extends Component {
   constructor(props) {
      super(props);

      this.state = {
         games: [],
         notFound: false
      }
   }

   componentDidMount() {
      api.get('games').then(response => {
         this.setState({ games: response.data })
      })
   }

   openGameDetails(id) {
      this.props.navigation.navigate('Details', {
         screen: "Home",
         params: id
      })
   }

   render() {

      const { games } = this.state;

      return (

         <Container>

            <HeaderContainer backButton={false}>
               <LogoImage source={require('../../assets/logo.png')} />
            </HeaderContainer>

            <SearchBarContainer>
               {/* <SearchBarInput placeholder="Buscar por um jogo..." onChangeText={(e)=>this.searchGame(e)} /> */}
            </SearchBarContainer>

            {
               this.state.notFound && (
                  <Image src={require('../../assets/not-found.svg')} alt="Nenhum jogo encontrado"/>
               )
            }

            {
               games.map(game => (
                  <GameCardView onPress={e => this.openGameDetails(game.id)} key={game.id}>
                     <GameCardImage source={{ uri: game.image_link }} style={styles.boxShadow} imageStyle={{resizeMode: "cover"}}/>
                     <GameCardName style={game.name.length >= 25 ? { fontSize: 20 } : {}}>{game.name}</GameCardName>
                     <GameCardPriceContainer>
                        <GamePriceText>R$ {(game.price.toFixed(2).replace(".", ","))}</GamePriceText>
                     </GameCardPriceContainer>
                  </GameCardView>
               ))

            }

         </Container>
      )
   }
}

const styles = StyleSheet.create({
   boxShadow: {
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
   }
})