import React, {createContext, useContext, useState} from "react";
import {ToastUtility, Toast} from '@syncfusion/ej2-notifications';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children}) => {
    const themeMode = localStorage.getItem('themeMode');
    const colorMode = localStorage.getItem('colorMode')
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState(colorMode ? colorMode : '#03C9D7');
    const [currentMode, setCurrentMode] = useState(themeMode ? themeMode : 'Light');
    const [themeSettings, setThemeSettings] = useState(false);
    
    const setMode =(e)=>{
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }

    const setColor =(color)=>{
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    }

    const saveToken = useToken => {
        sessionStorage.setItem('token', useToken);
        setToken(useToken);
      };

    const getToken = ()=>{
        return sessionStorage.getItem("token");
    }
    const [token, setToken] = useState(getToken());
    
    const handleClick = (clicked) =>{
        switch(clicked){
            case 'notification':
                const toast = ToastUtility.show({
                    title: 'Toast Title',
                    content: 'Toast shown using utility function with ToastModel',
                    timeOut: 3000,
                    position: { X: 'Right', Y: 'Bottom' },
                    showCloseButton: true
                  });
                  break;
            default:
                break;
        }
        setIsClicked({...initialState, [clicked]:true});
    }

    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked, 
            setIsClicked,
            handleClick,
            screenSize, 
            setScreenSize,
            currentColor, 
            currentMode, 
            themeSettings, 
            setThemeSettings,
            setMode,
            setColor,
            useToken: {setToken: saveToken, token}
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=>useContext(StateContext);