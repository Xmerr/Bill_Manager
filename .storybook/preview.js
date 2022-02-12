import Themer from '../app/javascript/src/helpers/Themer';
import { BrowserRouter as Router } from 'react-router-dom';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    Story => (
        <Themer>
            <Router>
                <Story />
            </Router>
        </Themer>
    ),
];