import React from 'react'
import { SafeAreaView } from 'react-native'

const NewsApp = () => {
  return (
      
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        data={news_data}
        renderItem={({item}) => <NewsCard news={item} />}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eceff1',
    },
    banner_image: {
      height: Dimensions.get('window').height / 5,
      width: Dimensions.get('window').width / 2,
    },
    headerText: {
      fontWeight: 'bold',
      fontSize:50,
    }
  });
export default NewsApp