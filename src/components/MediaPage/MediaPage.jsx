import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function MediaPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_MEDIA'});
    }, []);


    


    

    return (

        <>
            <h6>Media table of recommendations will go here</h6>
        </>
    )
}

export default MediaPage;