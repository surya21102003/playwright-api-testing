/*
import { test, expect } from '@playwright/test';

test('Add todo task @sanity', async ({ page }) => {

    await page.goto('https://todomvc.com/examples/react/dist/');

    // Add first task
    await page.getByTestId('text-input').fill('apple');
    await page.getByTestId('text-input').press('Enter');

    // Add second task
    await page.getByTestId('text-input').fill('bbbb');
    await page.getByTestId('text-input').press('Enter');

    // Verify two Todo tasks
    await expect(page.locator('.todo-list li')).toHaveCount(2);

    // Find apple task
    const appleTask = page.locator('.todo-list li')
        .filter({ hasText: 'apple' });

    // Complete apple
    await appleTask.getByTestId('todo-item-toggle').check();

    await expect(
        appleTask.getByTestId('todo-item-toggle')
    ).toBeChecked();

    // Open Completed filter
    await page.getByRole('link', { name: 'Completed' }).click();

    await expect(appleTask).toBeVisible();

    // Clear completed tasks
    await page.getByRole('button', {
        name: 'Clear completed'
    }).click();

    // Open All filter
    await page.getByRole('link', { name: 'All' }).click();

    // Verify one task remains
    await expect(page.locator('.todo-list li')).toHaveCount(1);

    await expect(page.getByText('bbbb')).toBeVisible();

});
*/