// Mock AdminJS (because Jest cannot handle ESM-only dependencies)
jest.mock("adminjs", () => ({
  default: class MockAdminJS {}
}));

import request from 'supertest';
import app from '../app';

describe("FAQ API", () => {
  test("should return FAQs", async () => {
    const res = await request(app).get("/api/faqs");
    expect(res.status).toBe(200);
  });
});
