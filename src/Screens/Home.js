import React from 'react'
import {ImageBackground ,View,SafeAreaView,Text,Platform,StatusBar,Image,TextInput, FlatList}  from "react-native"
import BoxFilter from '../Components/boxFilter'


function Home(props) {

  const data = [{
    "name":"Grocery",
    "img":"https://media.istockphoto.com/id/171302954/photo/groceries.jpg?s=612x612&w=0&k=20&c=D3MmhT5DafwimcYyxCYXqXMxr1W25wZnyUf4PF1RYw8="
  },
  {
    "name":"123",
    "img":"https://media.istockphoto.com/id/165835419/photo/large-group-of-canned-food-sitting-on-white-backdrop.jpg?s=612x612&w=0&k=20&c=KZTuXHShupJ8ID-fql5DhUEL5__YhFJ2K2YgxDu8kJM="
  },
  {
    "name":"Grocery",
    "img":"https://media.istockphoto.com/id/171302954/photo/groceries.jpg?s=612x612&w=0&k=20&c=D3MmhT5DafwimcYyxCYXqXMxr1W25wZnyUf4PF1RYw8="
  },
  {
    "name":"Grocery",
    "img":"https://media.istockphoto.com/id/171302954/photo/groceries.jpg?s=612x612&w=0&k=20&c=D3MmhT5DafwimcYyxCYXqXMxr1W25wZnyUf4PF1RYw8="
  }
]

  return (
  //  <Text> dilawar</Text>
      <View style={{width:"100%",backgroundColor:"white",padding:10 } } >
        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
        <Text style={{fontSize : 26,color:"green",fontWeight:"bold"}}>SAYLANI WELFARE</Text>
          <Image style={{width:30,height:30}} source={require("../assets/CIcon.png")} />
        </View>

        <Text style={{fontSize : 16}}>ONLINE DISCOUNT STORE</Text>

        {/* <Image style={{width:100,height:100}} source={require("../")} /> */}
        <TextInput
              autoFocus
              onSubmitEditing={() => {
                emailInputRef.current.focus();
              }}
              maxLength={24}
              blurOnSubmit={false}
              // value={username}
              // enterKeyHint={"next"}
              // onChangeText={(e) => setUsername(e)}
              placeholder="Search by Product name"
              style={{
                backgroundColor: "#e0e0e0",
                borderRadius: 50,
                color: "#054516",
                paddingHorizontal: 10,
                width: "77%",
                paddingVertical: 8,
                marginTop: 14,
                fontSize: 16,
                width:"100%"
              }}
            />

            <Text style={{marginVertical:20,fontSize:22}}>
              Shop by Catagery
            </Text>
            <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal 
            data={data}
            renderItem={({item}) => <BoxFilter title={item.name} img={item.img} />}
         />
      </View>
  )
}
// const styles = StyleSheet.create({

// })


export default Home