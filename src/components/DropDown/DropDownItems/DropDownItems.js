import './DropDownItems.css';

const DropDownItems = (props) => {

return <div>
        {Object.keys(props.items).map((item,i) => <li 
            className = 'drop-down__item'
            key = {i}
            onClick={() => props.onItemSelection(item)}>
                {item}
        </li>)}
    </div>
}

export default DropDownItems;