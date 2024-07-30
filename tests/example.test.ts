import printful from './client';

describe('Category', () => {
  it('should handle the get something endpoint', async () => {
    // Act
    const mockData = '3';
    await printful.category.something(mockData);

    // Assert
    const mockUrl = `https://api.printful.com/v2/category/something/${mockData}.json`;
    const mockOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });
});
