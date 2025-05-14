import { useState } from "react";

interface ListGroupProps {
    items: string[]
    heading: string
    onSelectItem: (item: string) => void // a function
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
    // heading = "" //nothing will change bc props ~ immutable

    // let biases = ['Sungyeol', 'Wonwoo', 'Woodz', 'Beomgyu']; // passed to App.tsx
    // biases = [];
    // let selectedIndex = 0 //local

    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1)
    // const arr = useState(-1) //-1 is initializer
    // arr[0] //variable (selectedIndex)
    // arr[1] //updater function (setSelectedIndex)

    return (
        <div>
            <h1>{heading}</h1>
            {/* {biases.length === 0 ? <p>No items</p> : null} */}
            {items.length === 0 && <p>No items</p>} {/* true && 'test' == 'test' , false && 'test' == false */}
            

            <ul className="list-group">
                {/* <li className="list-group-item">An item</li> */}
                {items.map((item, index) =>(
                    <li 
                    key={item} 
                    className={
                        selectedIndex === index ?
                        "list-group-item active" : "list-group-item"
                    }
                        onClick={() => 
                            {
                                setSelectedIndex(index); 
                                onSelectItem(item)
                            }
                            }
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListGroup