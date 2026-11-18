
import { defineConfig } from '@playwright/test';

export default defineConfig({

    testDir: './tests',

    fullyParallel: true,

    reporter: 'html',

    use: {
        baseURL: 'https://turbo-space-fortnight-g44vv97vq79q3x-3000.app.github.dev/',

        extraHTTPHeaders: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

});
