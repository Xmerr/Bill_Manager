import Themer from '@helpers/Themer';
import { BrowserRouter as Router } from 'react-router-dom';
import '@helpers/prototypes';

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
