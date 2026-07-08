import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
     <View className='flex flex-1  bg-bg' >
        <SafeAreaView style={{ flex: 1 }}>
          {/* your UI here */}
        </SafeAreaView>
      </View>
  )
}

export default Profile