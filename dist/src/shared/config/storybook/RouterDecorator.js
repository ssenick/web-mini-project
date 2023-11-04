import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
export var RouterDecorator = function (Story) { return (_jsx(BrowserRouter, { children: Story() })); };
