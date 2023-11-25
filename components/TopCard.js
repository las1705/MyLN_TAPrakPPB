import { View, Text, Image, TouchableOpacity } from "react-native";

const TopCard = ({ dataLN, noRank ,navigation }) => {

    const imageUrl = dataLN.images.jpg.image_url || "https://avatars.githubusercontent.com/u/116475964?v=4";
    const OriTitle = dataLN.title || "Light Novel Title";
    

    let title = OriTitle;
    const maxlength = 50;
    if(title.length > maxlength){
        title = title.substring(0,maxlength)+"...";
    }

    const score = dataLN.score || "N/A";
    const status = dataLN.status || "unknown";
    const members = dataLN.members || "unknown";

    return (
        <View 
            style={{
                // borderWidth: 1,
                marginHorizontal:5,
                borderRadius:10,
                marginVertical: 4,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: 'rgba(215, 179, 255, 0.6)'
            }}
        >
            <Text
                style={{
                    // borderWidth: 1,
                    width:35,
                    fontSize: 14,
                    fontWeight: "600",
                    alignSelf:"center",
                    alignContent:"center",
                    justifyContent:"center"
                
                }}
            >
                {noRank}
            </Text>
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
                        width: 85,
                        height: 120,
                        borderRadius: 1,
                        borderColor: "black",
                    }}
                />
                <View
                    style={{
                        flexDirection: "column",
                        // borderWidth:1,
                        marginLeft: 7,
                        width:230
                       
                        // alignItemsArr:"flex-start",
                        
                    }}
                >
                    <Text
                        style={{
                            marginTop: 5,
                        
                            fontSize: 15,
                            fontWeight: "600",
                            paddingVertical: 5
                            // justifyContent: "center",

                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        style={{
                            fontSize: 11,
                            fontWeight: "500",
                            color: 'rgb(64, 64, 64)',

                        }}
                    >
                        Score: {score}
                    </Text>
                    <Text
                        style={{
                            fontSize: 10,
                            fontWeight: "600",
                            color: 'rgb(64, 64, 64)',

                        }}
                    >
                        {status}
                    </Text>
                    <Text
                        style={{
                            fontSize: 10,
                            fontWeight: "600",
                            color: 'rgb(64, 64, 64)',

                        }}
                    >
                        members: {members}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default TopCard;