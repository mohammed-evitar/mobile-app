import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

export default function HomeScreen() {
  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <StatusBar style="dark" />

      {/* Hero Section */}
      <View style={tw`px-4 pt-12 pb-8 bg-white`}>
        <Text style={tw`text-4xl font-bold text-gray-900 mb-2`}>
          Welcome to My App
        </Text>
        <Text style={tw`text-lg text-gray-600 mb-6`}>
          Your all-in-one solution for everything you need
        </Text>
        <TouchableOpacity style={tw`bg-blue-500 py-3 px-6 rounded-full`}>
          <Text style={tw`text-white font-semibold text-center`}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>

      {/* Features Grid */}
      <View style={tw`px-4 py-8`}>
        <Text style={tw`text-2xl font-bold text-gray-900 mb-6`}>Features</Text>
        <View style={tw`flex-row flex-wrap justify-between`}>
          {["Feature 1", "Feature 2", "Feature 3", "Feature 4"].map(
            (feature, index) => (
              <View
                key={index}
                style={tw`w-[48%] bg-white p-4 rounded-xl mb-4 shadow-sm`}
              >
                <View
                  style={tw`w-12 h-12 bg-blue-100 rounded-full items-center justify-center mb-3`}
                >
                  <Text style={tw`text-blue-500 text-xl`}>✨</Text>
                </View>
                <Text style={tw`text-lg font-semibold text-gray-900 mb-1`}>
                  {feature}
                </Text>
                <Text style={tw`text-gray-600`}>
                  Description of {feature.toLowerCase()}
                </Text>
              </View>
            )
          )}
        </View>
      </View>

      {/* Call to Action Section */}
      <View style={tw`px-4 py-8 bg-blue-500`}>
        <Text style={tw`text-2xl font-bold text-white mb-4`}>
          Ready to Get Started?
        </Text>
        <Text style={tw`text-blue-100 mb-6`}>
          Join thousands of users who are already using our app
        </Text>
        <TouchableOpacity style={tw`bg-white py-3 px-6 rounded-full`}>
          <Text style={tw`text-blue-500 font-semibold text-center`}>
            Sign Up Now
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={tw`px-4 py-6 bg-gray-900`}>
        <Text style={tw`text-gray-400 text-center`}>
          © 2024 My App. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}
