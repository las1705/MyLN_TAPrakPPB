import { View, Text, Image } from "react-native";

const SearchCard = ({ dataLN }) => {
    const imageUrl = dataLN.images.jpg.image_url || "https://avatars.githubusercontent.com/u/116475964?v=4";
    const OriTitle = dataLN.title || "Light Novel Title";
    const OriTitleE = dataLN.title_english || "null";

    let title = OriTitle;
    const maxlength = 35;
    if (title.length > maxlength) {
        title = title.substring(0, maxlength) + "...";
    }

    let titleE = OriTitleE;
    const maxlengthE = 30;
    if (titleE.length > maxlength) {
        titleE = titleE.substring(0, maxlength) + "...";
    }

    const score = dataLN.score || "N/A";
    const status = dataLN.status || "unknown";
    const members = dataLN.members || "unknown";

    return (
        <View
            style={{
                // borderWidth: 1,
                flex: 1,
                marginHorizontal: 10,
                borderRadius: 1,
                marginVertical: 4,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: 'rgba(215, 179, 255, 0.8)'
            }}
        >
            <View
                style={{
                    // borderWidth: 1,
                    borderRadius: 4,
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    // width: 300,
                }}
            >
                <Image
                    source={{ uri: imageUrl }}
                    style={{
                        width: 69,
                        height: 90,
                        borderRadius: 1,
                        borderColor: "black",
                    }}
                />
                <View
                    style={{
                        flex:1,
                        flexDirection: "column",
                        // borderWidth:1,
                        marginLeft: 7,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        alignSelf:"stretch"

                    }}
                >
                    <Text
                        style={{

                            fontSize: 14,
                            fontWeight: "500",
                            paddingTop: 3
                            // justifyContent: "center",

                        }}
                    >
                        {title}
                    </Text>
                    {titleE !== "null" ? (
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: "500",
                                color: 'rgb(40, 40, 40 )',

                            }}
                        >
                            {titleE}
                        </Text>
                    ) : (null)}

                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            marginTop: 10,
                            // borderWidth:1,
                            marginLeft: 0,
                            justifyContent: "flex-end",
                            alignItems: "flex-start",

                        }}
                    >
                        <Text
                            style={{
                                flex: 4,
                                fontSize: 11,
                                fontWeight: "400",
                                color: 'rgb(40, 40, 40 )',

                            }}
                        >
                            members: {(score)}
                            
                        </Text>

                        <Text
                            style={{
                                flex: 4,
                                fontSize: 11,
                                fontWeight: "400",
                                color: 'rgb(40, 40, 40 )',

                            }}
                        >
                            members: {(members).toLocaleString()}
                            
                        </Text>
                        <Text
                                style={{
                                    flex: 3,
                                    fontSize: 11,
                                    fontWeight: "400",
                                    color: 'rgb(40, 40, 40 )',
                                }}
                            >
                                {status}
                            </Text>
                    </View>


                </View>
            </View>
        </View>
    );
};

export default SearchCard;