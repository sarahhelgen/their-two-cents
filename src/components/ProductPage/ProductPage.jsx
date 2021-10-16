import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function ProductPage () {
    const dispatch = useDispatch();
    const products = useSelector(store => store.recommendations.product);

    useEffect(() => {
        dispatch({ type: 'FETCH_PRODUCTS' });
    }, []);

    const deleteProduct = (productId) => {
        console.log('in delete product', productId );
        dispatch({ type: 'DELETE_PRODUCT', payload: productId })
    }

    const favoriteProduct = (productId) => {
        console.log( 'in update product', productId );
        dispatch({ type: 'FAVORITE_PRODUCT', payload: productId })
    }

    return(



        <>
        {products.map((product) =>
                <table key={product.id}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Notes</th>
                            <th>Favorite</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.type}</td>
                            <td>{product.notes}</td>
                            <td><button onClick={(event) => favoriteProduct(product.rec_id)}>Favorite!</button></td>
                            <td><button onClick={(event) => deleteProduct(product.rec_id)}>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    )
}

export default ProductPage;