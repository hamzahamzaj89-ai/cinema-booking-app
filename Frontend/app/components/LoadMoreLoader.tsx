import { ActivityIndicator, View } from "react-native";

export default function LoadMoreLoader() {

    return (

        <View
            style={{
                paddingVertical: 20,
                alignItems: "center",
            }}
        >

            <ActivityIndicator
                size="small"
                color="#8B5CF6"
            />

        </View>

    );
}