import { describe, it, expect } from 'vitest';
import isUrl from 'lib/utils/isUrl';

describe('lib/utils/isUrl', () => {
  it('should return true for valid HTTP URL', () => {
    expect(isUrl('http://example.com')).toBe(true);
  });

  it('should return true for valid HTTPS URL', () => {
    expect(isUrl('https://example.com')).toBe(true);
  });

  it('should return true for URL with path', () => {
    expect(isUrl('https://example.com/path')).toBe(true);
  });

  it('should return true for URL with query string', () => {
    expect(isUrl('https://example.com/path?query=value')).toBe(true);
  });

  it('should return true for URL with port', () => {
    expect(isUrl('http://localhost:3000')).toBe(true);
  });

  it('should return true for URL with hash', () => {
    expect(isUrl('https://example.com/path#anchor')).toBe(true);
  });

  it('should return true for complex URL', () => {
    expect(isUrl('https://example.com:8080/path?key=value&other=123#section')).toBe(true);
  });

  it('should return false for invalid URL', () => {
    expect(isUrl('not-a-url')).toBe(false);
  });

  it('should return false for just domain without protocol', () => {
    expect(isUrl('example.com')).toBe(false);
  });

  it('should return false for empty string', () => {
    expect(isUrl('')).toBe(false);
  });
});
