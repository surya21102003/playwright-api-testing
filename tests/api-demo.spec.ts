/*
import { test, expect } from '@playwright/test';

test('GET - Get single post @api @sanity', async ({ request }) => {

    // Send GET request
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    // Check status code
    expect(response.status()).toBe(200);

    // Check API request success
    expect(response.ok()).toBeTruthy();

    // Read response body
    const data = await response.json();

    // Validate response data
    expect(data.id).toBe(1);

    expect(data.userId).toBe(1);

    expect(data.title).toBeTruthy();

    console.log(data);

});


test('POST - Create new post @api', async ({ request }) => {

    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            data: {
                title: 'Learning Playwright',
                body: 'Practicing API testing',
                userId: 1
            }
        }
    );

    // Validate status
    expect(response.status()).toBe(201);

    // Read response
    const data = await response.json();

    // Validate created data
    expect(data.title).toBe('Learning Playwright');

    expect(data.body).toBe('Practicing API testing');

    expect(data.userId).toBe(1);

    expect(data.id).toBeTruthy();

    console.log(data);

});

test('PUT - Update post @api', async ({ request }) => {

    const response = await request.put(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            data: {
                id: 1,
                title: 'Updated title',
                body: 'Updated description',
                userId: 1
            }
        }
    );

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.title).toBe('Updated title');

    expect(data.body).toBe('Updated description');

    console.log(data);

});

test('PATCH - Update specific field @api', async ({ request }) => {

    const response = await request.patch(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            data: {
                title: 'Only title updated'
            }
        }
    );

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.title).toBe('Only title updated');

    console.log(data);

});

test('DELETE - Delete post @api', async ({ request }) => {

    const response = await request.delete(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    expect(response.status()).toBe(200);

    console.log('Post deleted successfully');

});

test('GET - Filter posts by userId', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
            params: {
                userId: 1
            }
        }
    );

    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(data.length).toBeGreaterThan(0);

    // Validate every returned post
    for (const post of data) {

        expect(post.userId).toBe(1);

    }

});

test('GET - Request with headers', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            headers: {
                'Accept': 'application/json'
            }
        }
    );

    expect(response.status()).toBe(200);

    const contentType = response.headers()['content-type'];

    expect(contentType).toContain('application/json');

});

*/
