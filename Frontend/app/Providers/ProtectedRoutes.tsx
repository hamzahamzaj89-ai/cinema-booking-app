import { ReactNode } from "react";
import { ActivityIndicator, View } from "react-native";
import { Redirect, useSegments } from "expo-router";

import useAuthStore from "@/app/store/authStore";

interface ProtectedRouteProps {
    children: ReactNode;
}

export default function ProtectedRoutes({
    children,
}: ProtectedRouteProps) {
    const session = useAuthStore((state) => state.session);
    const loading = useAuthStore((state) => state.loading);

    const segments = useSegments();

    // Wait until the auth state is initialized
    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#0B0C1B",
                }}
            >
                <ActivityIndicator
                    size="large"
                    color="#7C3AED"
                />
            </View>
        );
    }

    const currentGroup = segments[0];

  



    // User is not authenticated but is trying to access the app
    if (!session && currentGroup === "(app)") {
        return <Redirect href="/(auth)/Auth" />;
    }

    // User is authenticated but is trying to access auth screens
    if (session && currentGroup === "(auth)") {
        return <Redirect href="/(app)/Home" />;
    }

    // Otherwise, allow access
    return <>{children}</>;
}