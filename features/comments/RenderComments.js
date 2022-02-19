import { FlatList, Text, View } from 'react-native';
import { Card, Rating } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const RenderComments = ({ comments }) => {
    const renderCommentItem = ({ item }) => {
        return (
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.text}</Text>
                <Rating
                    startingValue={item.rating}
                    imageSize={10}
                    readonly
                    style={{ alignItems: 'flex-start', paddingVertical: '5%' }}
                />
                <Text style={{ fontSize: 12 }}>
                    {`-- ${item.author}, ${item.date}`}
                </Text>
            </View>
        );
    };

    return (
        <Animatable.View animation='fadeInUp' duration={2000} delay={1000}>
            <Card>
                <Card.Title>Comments</Card.Title>
                <Card.Divider />
                <FlatList
                    data={comments}
                    renderItem={renderCommentItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </Card>
        </Animatable.View>
    );
};

export default RenderComments;
