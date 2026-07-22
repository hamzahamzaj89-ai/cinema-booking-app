import { Redirect } from "expo-router";
import useAuthStore from "@/app/store/authStore";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
    const session = useAuthStore((state) => state.session);
    const loading = useAuthStore((state) => state.loading);

    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ActivityIndicator />
            </View>
        );
    }

    return session
        ? <Redirect href="/(app)/Home" />
        : <Redirect href="/(auth)/Auth" />;
}