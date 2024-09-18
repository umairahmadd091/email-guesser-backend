const { guessEmailFormat } = require('../helpers');

test('should return the correct email format', () => {
  const email = guessEmailFormat('Jane Doe', 'babbel.com');
  expect(email).toBe('jdoe@babbel.com');
});

test('should return the new email with same format', () => {
  const email = guessEmailFormat('Umair ahmad', 'babbel.com');
  expect(email).toBe('uahmad@babbel.com');
});

test('should return null when email format cannot be derived', () => {
  const email = guessEmailFormat('Robert Miller', 'slideshare.net');
  expect(email).toBeNull();
});
