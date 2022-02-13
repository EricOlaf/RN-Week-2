import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RenderCampsite from '../features/campsites/RenderCampsite';
import RenderComments from '../features/comments/RenderComments';
import { toggleFavorite } from '../features/favorites/favoritesSlice';

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;
    const comments = useSelector((state) => state.comments);
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    return (
        <ScrollView>
            <RenderCampsite
                campsite={campsite}
                isFavorite={favorites.includes(campsite.id)}
                markFavorite={() => dispatch(toggleFavorite(campsite.id))}
            />
            <RenderComments
                comments={comments.commentsArray.filter(
                    (comment) => comment.campsiteId === campsite.id
                )}
            />
        </ScrollView>
    );
};

export default CampsiteInfoScreen;
