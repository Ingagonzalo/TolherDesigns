
import Item from "../Item/Item";


const ItemList = ({ data = [] }) => {
    return (
        <div className="itemList">
            {data.map((item => <Item key={item.id} image={item.imageId} description={item.description} price={item.price} title={item.title} category={item.categoryId} id={item.id} />
            ))}
        </div>
    )
}

export default ItemList;