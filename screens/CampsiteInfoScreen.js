import { useState } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import RenderCampsite from '../features/campsites/RenderCampsite';
import RenderComments from '../features/comments/RenderComments';

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;
    const comments = useSelector((state) => state.comments);

    const [favorite, setFavorite] = useState(false);

    return (
        <ScrollView>
            <RenderCampsite
                campsite={campsite}
                isFavorite={favorite}
                markFavorite={() => setFavorite(true)}
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
