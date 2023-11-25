import { View, Text, Image } from "react-native";

const GenreCard = ({ dataLN }) => {
    const imageUrl = dataLN.images.jpg.image_url || "https://avatars.githubusercontent.com/u/116475964?v=4";
    const OriTitle = dataLN.title || "Light Novel Title";

    let title = OriTitle;
    const maxlength = 35;
    if (title.length > maxlength) {
        title = title.substring(0, maxlength) + "...";
    }

    const status = dataLN.status || "unknown";

    return (
        <View
            style={{
                width: 150,
                paddingBottom:12,
                marginHorizontal: 5,
                borderRadius: 20,
                flexDirection: "column",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: 'rgba(215, 179, 255, 0.6)'
            }}
        >
            <Image
                source={{ uri: imageUrl }}
                style={{
                    width: 150,
                    borderRadius: 20,
                    height: 210,

                }}
            />
            <Text
                style={{
                    paddingHorizontal:3,
                    fontSize: 12,
                    fontWeight: "450",
                    textAlign: "left", // Mengatur tata letak teks ke tengah


                }}
            >
                {title}
            </Text>
        </View>
    );
};

export default GenreCard;
