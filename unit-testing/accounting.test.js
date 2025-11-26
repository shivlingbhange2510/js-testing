import { AccountDetails } from "./accounting.js";

describe("Bank Account Operations", () => {
  let account;

  // Setup: Create a fresh account before each test
  beforeEach(() => {
    account = new AccountDetails("shiv", 100);
  });

  // Cleanup: Run after each test completes
  afterEach(() => {
    // Reset account to null to free up memory
    account = null;
    // You can also use this for:
    // - Closing database connections
    // - Clearing mocks/spies
    // - Removing temp files
    // - Logging test results
  });

  describe("Positive Test Cases", () => {
    test("should return correct balance after opening account", () => {
      expect(account.checkBalance()).toBe(100);
    });

    test("should deposit money and return updated balance", () => {
      const newBalance = account.depositMoney(100);
      expect(newBalance).toBe(200);
      expect(account.balance).toBe(200);
    });

    test("should withdraw money and return updated balance", () => {
      const newBalance = account.withdraMoney(50);
      expect(newBalance).toBe(50);
      expect(account.balance).toBe(50);
    });
  });

  describe("Negative Test Cases - Edge Cases", () => {
    test("should allow overdraft (withdraw more than balance)", () => {
      const newBalance = account.withdraMoney(150);
      expect(newBalance).toBe(-50);
    });

    test("should handle negative deposit amount", () => {
      const newBalance = account.depositMoney(-50);
      expect(newBalance).toBe(50);
    });

    test("should handle negative withdraw amount", () => {
      const newBalance = account.withdraMoney(-20);
      expect(newBalance).toBe(120);
    });

    test("should allow creating account with negative balance", () => {
      const negativeAccount = new AccountDetails("alice", -100);
      expect(negativeAccount.checkBalance()).toBe(-100);
    });

    test("should handle zero deposit", () => {
      const newBalance = account.depositMoney(0);
      expect(newBalance).toBe(100);
    });

    test("should handle zero withdrawal", () => {
      const newBalance = account.withdraMoney(0);
      expect(newBalance).toBe(100);
    });
  });

  describe("Multiple Operations", () => {
    test("should handle multiple deposits correctly", () => {
      account.depositMoney(50);
      account.depositMoney(25);
      expect(account.balance).toBe(175);
    });

    test("should handle multiple withdrawals correctly", () => {
      account.withdraMoney(30);
      account.withdraMoney(20);
      expect(account.balance).toBe(50);
    });

    test("should handle mixed operations correctly", () => {
      account.depositMoney(100); // 200
      account.withdraMoney(50); // 150
      account.depositMoney(30); // 180
      expect(account.balance).toBe(180);
    });
  });
});
