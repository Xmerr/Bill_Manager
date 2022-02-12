const path = require('path');
const srcPath = path.resolve(__dirname, '..', '..', 'app', 'javascript', 'src');

module.exports = {
    resolve: {
        alias: {
            '@atoms': path.join(srcPath, 'atoms'),
            '@helpers': path.join(srcPath, 'helpers'),
            '@molecules': path.join(srcPath, 'molecules'),
            '@organisms': path.join(srcPath, 'organisms'),
            '@templates': path.join(srcPath, 'templates'),
            '@pages': path.join(srcPath, 'pages'),
        },
    },
};
