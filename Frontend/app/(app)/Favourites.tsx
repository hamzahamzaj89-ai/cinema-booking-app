import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from '../components/Card'

const Favourites = () => {

    const imageLinks = ["https://images.unsplash.com/photo-1779896412149-af18f18dbd54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1779896412149-af18f18dbd54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         "https://images.unsplash.com/photo-1779896412149-af18f18dbd54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1779896412149-af18f18dbd54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1779896412149-af18f18dbd54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]
  return (
   <View className='flex flex-1  bg-bg' >
      <SafeAreaView style={{ flex: 1 }}>
        

        <View className='flex-1 '>

              <View className='w-[100%] h-[60px] mb-4 pl-[13px] flex justify-center items-start content-center p-3 '>
                          <Text className='text-[30px] font-extrabold italic text-textDim  '>

                            Favourites
                          </Text>
              </View>








<View className="flex-1 w-[100%] px-1 pt-2 mb-[30px]">
  <FlatList
    data={imageLinks}
    numColumns={2}
    keyExtractor={(item, index) => index.toString()}
    showsVerticalScrollIndicator={true}
    columnWrapperStyle={{
      justifyContent: "space-between",
      marginBottom: 20,
      paddingLeft: 12,
      

    }}
    renderItem={({ item }) => (
      <View className="flex-1 mr-2">
        <Card image={item} />
      </View>
    )}
  />
</View>

        </View>
      </SafeAreaView>
    </View>

  )
}

export default Favourites