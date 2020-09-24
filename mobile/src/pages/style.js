import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
   height: 80px;
   justify-content: flex-end;
   align-items: center;
   background-color: #0073B2;
   padding-bottom: 8px;
   border-bottom-left-radius: 30px;
   border-bottom-right-radius: 30px;
`;

export const LogoImage = styled.ImageBackground`
   width: 200px;
   height: 60px;
   justify-content: center;
`;

export const SearchBarContainer = styled.View`
   width: 100%;
   height: 70px;
   align-items: center;
   justify-content: center;
   position: relative;
`;

export const SearchBarInput = styled.TextInput`
   width: 90%;
   height: 50px;
   border-radius: 20px;
   border: solid 1px #ccc;
   padding: 8px 16px;
`;

export const Container = styled.ScrollView`
   background-color: #fff;
   /* padding-top: 24px; */
`;

export const GameCardView = styled.TouchableOpacity`
   width: 300px;
   height: 450px;
   align-self: center;
   border-radius: 20px;
   margin-bottom: 32px;
   justify-content: flex-end;
   padding-top: 16px;
   align-items: center;
   border-radius: 10px;
   border-width: 1px;
   border-top-color: #dedede;
   border-right-color: #dedede;
   border-left-color: #dedede;
   border-bottom-color: #b0b0b0;
   border-bottom-right-radius: 20px;
   border-bottom-left-radius: 20px;
`;

export const GameCardImage = styled.ImageBackground`
   width: 250px;
   height: 300px;
   background-color: #fff;
`;

export const GameCardName = styled.Text`
   font-size: 20px;
   font: 500 28px Roboto;
   color: #000;
   text-align: center;
   margin-top: 16px;
   margin-bottom: 16px;
`;

export const GameCardPriceContainer = styled.View`
   width: 100%;
   height: 60px;
   align-items: center;
   justify-content: center;
   border-bottom-right-radius: 20px;
   border-bottom-left-radius: 20px;
   background-color: #0CAAB2;
`;

export const GamePriceText = styled.Text`
   font: 800 28px Poppins_400Regular;
   font-weight: bold;
   color: #fff;
`;

export const GameDetailedView = styled.View`
   width: 300px;
   min-height: 600px;
   height: auto;
   align-self: center;
   border-radius: 10px;
   margin-top: 24px;
   padding-top: 16px;
   padding-bottom: 16px;
   padding-left: 24px;
   border-width: 1px;
   border-top-color: #dedede;
   border-right-color: #dedede;
   border-left-color: #dedede;
   border-bottom-color: #b0b0b0;
   border-bottom-right-radius: 20px;
   border-bottom-left-radius: 20px;
   margin-bottom: 32px;
`;

export const GameDetailedImage = styled.ImageBackground`
   width: 90%;
   height: 300px;
   margin-bottom: 16px;
`;

export const GameNameText = styled.Text`
   font: 500 24px Roboto_400Regular;
   margin-bottom: 2px;
`;

export const GamePlatformsContainer = styled.View`
   width: 100%;
   height: 20px;
   justify-content: flex-start;
   flex-direction: row;
   margin-bottom: 4px;

`;

export const PlatformTitleText = styled.Text`
   font: 500 14px Roboto_400Regular;
`;

export const PlatformText = styled.Text`
   font: 500 13px Roboto_400Regular;
   margin-left: 8px;
   margin-top: 2px;
`;

export const BuyButton = styled.TouchableOpacity`
   width: 90%;
   margin-top: 16px;
   align-self: center;
   height: 50px;
   border-radius: 10px;
   align-items: center;
   justify-content: center;
   background-color: #39C322;
   margin-left: -24px;
`;

export const BuyButtonText = styled.Text`
   font: 500 24px Poppins_400Regular;
   color: #fff;
   font-weight: bold;
`;

export const GameAdditionalsContainer = styled.View`
   width: 100%;
   min-height: 200px;
   margin-left: -12px;
   height: auto;
   margin-top: 16px;
   align-items: center;
   border-top-width: 3px;
   border-color: #F2F1F1;
   padding-top: 16px;
`;

export const InformationsMenuContainer = styled.View`
   width: 100%;
   height: 40px;
   background-color: #F2F1F1;
   border-radius: 10px;
   flex-direction: row;
   align-items: center;
   justify-content: space-evenly;
`;

export const InformationMenuOptionButton = styled.TouchableOpacity`
   width: 40%;
   height: 100%;
   justify-content: center;
   align-items: center;
`;


export const MenuOptionText = styled.Text`
   font: 500 12px Poppins_400Regular;
   color: #B7B7B7;
`;

export const MenuOptionSelectedText = styled.Text`
   font: 500 12px Poppins_400Regular;
   color: #0073B2;
`;

export const DivisionInformationMenu = styled.View`
   width: 2px;
   height: 70%;
   background-color: #D9D2D2;
`;

export const GameDescriptionText = styled.Text`
   font: 500 12px Roboto_400Regular;
   text-align: justify;
   color: #D9D2D2;
   margin-top: 16px;
`;