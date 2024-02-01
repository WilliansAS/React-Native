import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <View style={[tw`flex-1 justify-center items-center`, darkMode ? tw`bg-gray-900` : tw`bg-white`]}>
      <View style={[tw`w-full max-w-xs overflow-hidden rounded-lg shadow-lg`, darkMode ? tw`bg-gray-800` : tw`bg-white`]}>
        <Image
          style={tw`w-full h-56`}
          source={{uri: 'https://i.pinimg.com/564x/38/ae/8d/38ae8d4b48a93580cef2292cc776ca7a.jpg'}}
        />

        <View style={tw`py-5 items-center`}>
          <Text style={darkMode ? tw`text-xl font-bold text-white` : tw`text-xl font-bold text-gray-800`}>Anthony Willians</Text>
          <Text style={darkMode ? tw`text-sm text-gray-200` : tw`text-sm text-gray-700`}>Ingeniero De Software</Text>
        </View>

        <View style={tw`items-center`}>
          <TouchableOpacity onPress={toggleDarkMode} style={tw`bg-blue-500 px-4 py-2 rounded-md mb-4`}>
            <Text style={tw`text-white`}>Cambiar fondo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;
