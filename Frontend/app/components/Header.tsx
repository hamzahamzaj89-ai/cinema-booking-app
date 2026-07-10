import { View, Text, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View className=' w-[100%] h-[70px] mt-[10px]  flex flex-row  justify-between px-6 pl-8 pt-1'>

        <View className='text-[8px]  flex flex-column gap-[3px]  '>

           <Text className='font-bold font-poppins-medium text-[1.1rem] text-white  '>
                Welcome hamza 
           </Text>



             <Text  className='font-poppins text-text'>
              
              What movie you are going to see today

             </Text>

        </View>




       <View>


        <View className='w-[40px] h-[40px] rounded-full'>
          
          <Image className='w-full h-full object-cover rounded-full' source={{uri:"https://images.unsplash.com/photo-1779896412149-af18f18dbd54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}}/>
                 
          

        </View>




       </View>


    </View>
  )
}

export default Header