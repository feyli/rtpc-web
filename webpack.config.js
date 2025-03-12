import path from 'path';
        import { fileURLToPath } from 'url';

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        export default {
            mode: "development",
            entry: "./entry.js",
            output: {
                filename: "bundle.js",
                path: path.resolve(__dirname, 'dist')
            },
            devServer: {
                static: {
                    directory: path.resolve(__dirname, '.')
                },
                compress: true,
                port: 9000,
                devMiddleware: {
                    writeToDisk: true
                }
            },
            resolve: {
                extensions: ['.js'],
            }
        };