/*
import { test, expect } from '@playwright/test';

import testData from '../test-data/getUser.json';

test('GET API automation', async ({ request }) => {

    // Automatically send GET request
    const response = await request.get(
        `/users/${testData.userId}`
    );

    // Validate status
    expect(response.status()).toBe(
        testData.expectedStatus
    );

    // Read API response
    const responseData = await response.json();

    // Validate response
    expect(responseData.name).toBe(
        testData.expectedName
    );

    expect(responseData.email).toBe(
        testData.expectedEmail
    );

    console.log('GET API TEST PASSED');

});
*/