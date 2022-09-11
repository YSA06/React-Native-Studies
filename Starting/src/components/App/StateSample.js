import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Button,
  Switch,
} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';
import news_banner_data from './news_banner_data.json';

const data = [
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'KafaKafe', isFavorite: false},
  {id: 2, name: 'BugG', isFavorite: false},
  {id: 3, name: 'Rock ` n Code', isFavorite: true},
  {id: 4, name: 'do(drink) ', isFavorite: false},
  {id: 5, name: 'esc', isFavorite: false},
];

function App() {
  const [cafelist, setCafeList] = useState(data);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  function onFavoritesChange(isFavoriteSelected) {
    setShowOnlyFavorites(isFavoriteSelected);
    isFavoriteSelected ?
     setCafeList(cafelist.filter(cafe => cafe.isFavorite)) 
     :
     setCafeList(data);
  }

  return (
    <SafeAreaView>
    
    </SafeAreaView>
  );
}

export default App;