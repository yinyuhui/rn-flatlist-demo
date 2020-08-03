import React from 'react'
import { Text, View, Button } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const HelloWorldApp = (props) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <FontAwesome name="th-list" size={20} style={{ color: 'red' }} />

            <Button
                title="flatList demo"
                onPress={() => {
                    props.navigation.navigate('FlatListDemo')
                }}
            />
            <FontAwesome name="list-alt" size={24} style={{ color: 'red' }} />
            <Button
                title="sectionList demo"
                onPress={() => {
                    props.navigation.navigate('SectionListDemo')
                }}
            />
        </View>
    )
}
export default HelloWorldApp
