/*
import { test, expect } from '@playwright/test';

import testData from '../test-data/createUser.json';

test('POST API automation', async ({ request }) => {

    // Read JSON request body
    const requestBody = testData.requestBody;

    // Automatically send POST request
    const response = await request.post('/users', {
        data: requestBody
    });

    // Check status code
    expect(response.status()).toBe(
        testData.expectedStatus
    );

    // Read response JSON
    const responseData = await response.json();

    // Validate returned values
    expect(responseData.name).toBe(requestBody.name);

    expect(responseData.username).toBe(requestBody.username);

    expect(responseData.email).toBe(requestBody.email);

    // Check generated ID
    expect(responseData.id).toBeDefined();

    console.log('POST API TEST PASSED');

});
*/