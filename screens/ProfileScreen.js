import * as React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Luthfi Anis Syafar</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>21120121140094</Text>
        </View>
    );
}