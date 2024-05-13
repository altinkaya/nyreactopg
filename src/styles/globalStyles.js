import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
   

:root{   

    //purple
--color-purple-50: #faf5ff;
--color-purple-100: #f3e8ff;
--color-purple-200: #e9d5ff;
--color-purple-300: #d8b4fe;
--color-purple-400: #c084fc;
--color-purple-500: #a855f7;
--color-purple-600: #9333ea;
--color-purple-700: #7e22ce;
--color-purple-800: #6b21a8;
--color-purple-900: #581c87;
--color-purple-950: #3b0764;

//gray
--color-gray-50: #f9fafb;
--color-gray-100: #f4f5f7;
--color-gray-200: #e5e7eb;
--color-gray-300: #d2d6dc;
--color-gray-400: #9fa6b2;
--color-gray-500: #6b7280;
--color-gray-600: #4b5563;
--color-gray-700: #374151;
--color-gray-800: #252f3f;
--color-gray-900: #161e2e;



}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;

    export default GlobalStyles;
