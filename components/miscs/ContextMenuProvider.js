import React from 'react';

const MenuContext = React.createContext();

// const MenuProvider = MenuContext.Provider
// const MenuConsumer = MenuContext.Consumer

// export {MenuProvider, MenuConsumer, MenuContext}


export const MenuStore = (props) =>{

    console.log(`props`, props);

    return(
        <MenuContext.Provider value={{ ...props.value}} >
            {props.children}
        </MenuContext.Provider>
    )
}


export default MenuContext;


