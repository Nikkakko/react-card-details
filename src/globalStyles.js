// create global styles
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root{
    --white:hsl(0, 0%, 100%);
    --light-grayish-violet:hsl(270, 3%, 87%);
    --dark-grayish-violet:hsl(279, 6%, 55%);
    --very-dark-violet:hsl(278, 68%, 11%);
}
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Space Grotesk', sans-serif;
}

body{
    font-weight: 500;
    
}
`;
