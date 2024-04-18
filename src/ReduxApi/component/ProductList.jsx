import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Reducers/ProductReducer'
import { updateProducts, deleteProducts } from '../Reducers/AddProductReducer'
function ProductList() {
    return (
        <>
            <Products />

        </>
    )

}


function Products() {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.products.data)
    const [updateTitle, setUpdateTitle] = useState("")
    // console.log("Product List", productList[0]?.id)

    useEffect(() => {
        dispatch(fetchProducts())

    }, [])

    return (
        <div className=''>
            <input type='text' onChange={(e) => setUpdateTitle(e.target.value)} placeholder='update title' />

            {productList?.map((item, i) => (
                <div>
                    <span> <h6 key={i} >{item?.title}</h6></span>
                    <span>

                        <button onClick={() => {

                            dispatch(
                                updateProducts({ id: item.id, title: updateTitle })
                            );
                        }}>Update</button>


                        <button onClick={() => {

                            dispatch(
                                deleteProducts({ id: item.id })
                            );
                        }}>Delete</button>

                    </span>
                </div>

            ))


            }

        </div>
    )
}

export default ProductList



