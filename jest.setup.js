// jest.setup.js
import { TextEncoder, TextDecoder } from 'util';

// Polyfill TextEncoder/TextDecoder for Jest
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock Request for react-router
global.Request = class Request {
  constructor(input, init = {}) {
    this.url = typeof input === 'string' ? input : input.url;
    this.method = init.method || 'GET';
    this.headers = new Map();
  }
};

// Mock document.title
Object.defineProperty(global.document, 'title', {
    writable: true,
    value: ''
});