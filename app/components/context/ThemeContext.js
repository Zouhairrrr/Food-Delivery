
import React   from     "react";


const ThemeContext = React.createContext({
    theme: {
        isDarkMode: false,
        isLoggedIn: false,
        user: null,
        token: null,
    },


}
);

export default ThemeContext;
