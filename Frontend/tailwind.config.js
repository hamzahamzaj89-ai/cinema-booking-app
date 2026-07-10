/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
   theme: {
    extend: {
      colors: {
        // 🌑 Main Backgrounds
        bg: "#0B0C1B",        // primary app background
        SelectedCard: "#8B5CF6",      // cards / sections
        card: "#1B1B31", 
            // elevated surfaces

        buttonbg: "#7137CA",
        // ✨ Primary Accent (gold theme)
        primary: "#F5B700",   // buttons, active tabs, highlights
        primaryDark: "#D89C00",

        // ⚪ Text colors
        text: "#9B9BB5",
        textMuted: "#A9A9B2",
        textDim: "#6C6F7A",

        // 🧊 Borders / dividers
        border: "#2A2D3A",
        primaryText: "#C9CDD6",
        // ⭐ Rating
        rating: "#FFD54A",

        // 🎬 overlay
        overlay: "rgba(0,0,0,0.6)",
        searchbg: "#1B1B31",
        
      },
      borderRadius: {
        xl: "20px",
        xxl: "28px",
      },


     fontFamily: {
        poppins: ["Poppins_400Regular"],
        "poppins-medium": ["Poppins_500Medium"],
        "poppins-semibold": ["Poppins_600SemiBold"],
        "poppins-bold": ["Poppins_700Bold"],
      },
    },
  },
  plugins: [],
}