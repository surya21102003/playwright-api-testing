
import { test, expect } from '@playwright/test';

// TEST CASE 1: GET Root API
test('TC01 - Verify Root API', async ({ request }) => {

    const response = await request.get('/');

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.status).toBe('success');

    expect(data.message).toContain('Server is running');

});


// TEST CASE 2: GET Health API
test('TC02 - Verify Health API', async ({ request }) => {

    const response = await request.get('/health');

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.message).toBe('OK');

    expect(data.uptime).toBeGreaterThanOrEqual(0);

    expect(data.timestamp).toBeGreaterThan(0);

});


// TEST CASE 3: GET Users API
test('TC03 - Verify Get Users API', async ({ request }) => {

    const response = await request.get('/users');

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(Array.isArray(data)).toBe(true);

    expect(data.length).toBeGreaterThan(0);

    expect(data[0].id).toBe(1);

    expect(data[0].name).toBe('Surya');

});


// TEST CASE 4: POST Create User
test('TC04 - Verify Create User API', async ({ request }) => {

    const response = await request.post('/users', {

        data: {
            name: 'Surya'
        }

    });

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.message).toBe('User created');

    expect(data.user.name).toBe('Surya');

    expect(typeof data.user.id).toBe('number');

});


// TEST CASE 5: POST Without Name
test('TC05 - Verify Create User Without Name', async ({ request }) => {

    const response = await request.post('/users', {

        data: {}

    });

    expect(response.status()).toBe(400);

    const data = await response.json();

    expect(data.error).toBe('Name is required');

});


// TEST CASE 6: POST With Empty Name
test('TC06 - Verify Empty Name Validation', async ({ request }) => {

    const response = await request.post('/users', {

        data: {
            name: ''
        }

    });

    expect(response.status()).toBe(400);

    const data = await response.json();

    expect(data.error).toBe('Name is required');

});


// TEST CASE 7: GET Invalid Endpoint
test('TC07 - Verify Invalid API Endpoint', async ({ request }) => {

    const response = await request.get('/invalid-api');

    expect(response.status()).toBe(404);

});
