
import { defineConfig } from '@playwright/test';

export default defineConfig({

    testDir: './tests',

    fullyParallel: true,

    reporter: 'html',

    use: {
        baseURL: 'https://urban-bassoon-wrxv9q459xvh9wrw-3000.app.github.dev/',

        extraHTTPHeaders: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

});
