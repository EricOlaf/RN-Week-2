import { FlatList, ScrollView, Text } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

function Mission() {
    return (
        <Card>
            <Card.Title>Our Mission</Card.Title>
            <Card.Divider />
            <Text style={{ margin: 10 }}>
                We present a curated database of the best campsites in the vast
                woods and backcountry of the World Wide Web Wilderness. We
                increase access to adventure for the public while promoting safe
                and respectful use of resources. The expert wilderness trekkers
                on our staff personally verify each campsite to make sure that
                they are up to our standards. We also present a platform for
                campers to share reviews on campsites they have visited with
                each other.
            </Text>
        </Card>
    );
}

const AboutScreen = () => {
    const partners = useSelector((state) => state.partners);

    const renderPartner = ({ item }) => {
        return (
            <ListItem>
                <Avatar rounded source={{ uri: baseUrl + item.image }} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <ScrollView>
            <Mission />
            <Card>
                <Card.Title>Community Partners</Card.Title>
                <Card.Divider />
                <FlatList
                    data={partners.partnersArray}
                    renderItem={renderPartner}
                    keyExtractor={(item) => item.id.toString()}
                />
            </Card>
        </ScrollView>
    );
};

export default AboutScreen;
