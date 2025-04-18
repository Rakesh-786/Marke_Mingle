import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ItemCard from '../../Card/ItemCard/ItemCard';
import ReactLoading from 'react-loading';
import './FeaturedItems.css'

const FeaturedItems = (props) => {
    return (

        <div className="featured__products__container">
            <div className="featured__products">
                <div className="featured__products__header">
                    <h3 className='featured__items__header__big'>Featured Items </h3><Link to="/shop" className='featured__header__small'>Show all<ArrowRightAltIcon /></Link>
                </div>
                <div className="featured__products__header__line"></div>
                <div className='d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto'>
                    {!props.items && <ReactLoading type="balls" color='#FFE26E' height={100} width={100} className='m-auto' />}
                    {props.items &&
                        <div className="featured__products__card__container">
                            <ItemCard key={props.items[0]._id} item={props.items[0]} category="featured" />
                            <ItemCard key={props.items[4]._id} item={props.items[4]} category="featured" />
                            <ItemCard key={props.items[10]._id} item={props.items[10]} category="featured" />
                            <ItemCard key={props.items[20]._id} item={props.items[20]} category="featured" />
                            <ItemCard key={props.items[16]._id} item={props.items[16]} category="featured" />
                            <ItemCard key={props.items[5]._id} item={props.items[5]} category="featured" />
                            <ItemCard key={props.items[13]._id} item={props.items[13]} category="featured" />
                            <ItemCard key={props.items[23]._id} item={props.items[23]} category="featured" />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default FeaturedItems;