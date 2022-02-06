import { useState } from 'react';
import { ScrollView } from 'react-native';
import RenderCampsite from '../features/campsites/RenderCampsite';
import RenderComments from '../features/comments/RenderComments';
import { COMMENTS } from '../shared/comments';

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;

    const [comments, setComments] = useState(COMMENTS);
    const [favorite, setFavorite] = useState(false);

    return (
        <ScrollView>
            <RenderCampsite
                campsite={campsite}
                isFavorite={favorite}
                markFavorite={() => setFavorite(true)}
            />
            <RenderComments
                comments={comments.filter(
                    (comment) => comment.campsiteId === campsite.id
                )}
            />
        </ScrollView>
    );
};

export default CampsiteInfoScreen;
