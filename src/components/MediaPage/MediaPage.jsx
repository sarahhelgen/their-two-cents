import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function MediaPage () {

    const dispatch = useDispatch();
    const media = useSelector(store => store.recommendations.media );

    useEffect(()=> {
        dispatch({type: 'FETCH_MEDIA'});
    }, []);

    return(

        <>
        {media.map((media) =>
         <div key={media.id}>{media.name}
         {media.type}
         {media.notes}
          </div>
      
      )}
        </>
    )
}

export default MediaPage;