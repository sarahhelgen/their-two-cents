import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function MediaPage() {
    const dispatch = useDispatch();
    const media = useSelector(store => store.recommendations.media);
    
    console.log("in media page",media)
    useEffect(() => {
        dispatch({ type: 'FETCH_MEDIA'});
    }, []);

    return (

        <>
      
        {JSON.stringify({media})}
        
        </>
    )

    }

export default MediaPage;