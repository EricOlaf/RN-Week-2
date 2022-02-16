import { useState } from 'react';
import { Button, Modal, ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RenderCampsite from '../features/campsites/RenderCampsite';
import RenderComments from '../features/comments/RenderComments';
import { toggleFavorite } from '../features/favorites/favoritesSlice';

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;
    const comments = useSelector((state) => state.comments);
    const favorites = useSelector((state) => state.favorites);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    return (
        <ScrollView>
            <RenderCampsite
                campsite={campsite}
                isFavorite={favorites.includes(campsite.id)}
                markFavorite={() => dispatch(toggleFavorite(campsite.id))}
                onShowModal={() => setShowModal(!showModal)}
            />
            <RenderComments
                comments={comments.commentsArray.filter(
                    (comment) => comment.campsiteId === campsite.id
                )}
            />
            <Modal
                animationType='slide'
                transparent={false}
                visible={showModal}
                onRequestClose={() => setShowModal(!showModal)}
            >
                <View style={styles.modal}>
                    <View style={{ margin: 10 }}>
                        <Button
                            onPress={() => setShowModal(!showModal)}
                            color='#808080'
                            title='Cancel'
                        />
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        margin: 20
    }
});

export default CampsiteInfoScreen;
