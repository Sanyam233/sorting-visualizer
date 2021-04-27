import './ColorTray.css';


const ColorTray = () => {

    const elements = [{id : '1',color : '#E33E57', title : 'Compare'},
    {id : '2',color : '#F7B538', title : 'Swap'},
    // {id : '3',color : 'green', title : 'Sorted'}
    ];

    const ColorElements = elements.map((elmnt) => {

        return (<div className = 'color-tray__element' key = {elmnt.id}>
            <div 
            className = 'color-tray__element__color'
            style = {{backgroundColor : elmnt.color}}></div>
            <span className = 'color-tray__element__title'>{elmnt.title}</span>
        </div>)

    });

    return (<div className = 'color-tray'>
        {ColorElements}
    </div>)

}

export default ColorTray;