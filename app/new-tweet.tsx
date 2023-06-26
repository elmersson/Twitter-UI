import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Pressable, SafeAreaView } from "react-native";

const user = {
        id: 'u1',
        username: 'VadimNotJustDev',
        name: 'Vadim',
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
}

export default function NewTweet() {
    const [text, setText] = useState("");
    const router = useRouter();

    const onTweetPress = () => {
        console.warn(`Posting Tweet ${text}`)
        router.back();
    }
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Link href="../" style={{fontSize: 18}}>Cancel</Link>
                    <Pressable style={styles.button} onPress={onTweetPress}>
                        <Text style={styles.buttonText}>Tweet</Text>
                    </Pressable>
                </View>
                
                <View style={styles.inputContainer}>
                    <Image source={{uri: user.image}} style={styles.image}/>
                    <TextInput
                        value={text}
                        onChangeText={setText}
                        placeholder="What´s happening"
                        multiline
                        numberOfLines={5}
                        style={{flex: 1}}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    inputContainer: {
        flexDirection: "row",
    },
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
        marginRight: 10,
    },
    button: {
        backgroundColor: '#1C9BF0',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});
