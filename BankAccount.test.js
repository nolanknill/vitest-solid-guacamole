import { describe, expect, it, vi } from "vitest";
import BankAccount from "./BankAccount";

describe("BankAccount", () => {
    it("is created with correct details", () =>{
        const account = new BankAccount("0123");
    
        expect(account).toBeInstanceOf(BankAccount);
        expect(account.pin).toEqual("0123");
        expect(account.balance).toEqual(0);
    })

    it("deposits money", () => {
        /* 1. Arrange */
        const account = new BankAccount();
    
        /* 2. Act */
        account.deposit(1000000);
    
        /* 3. Assert */
        expect(account.balance).toEqual(1000000);
    });

    it("withdraws money", () => {
        /* 1. Arrange */
        const account = new BankAccount("1234");
    
        /* 2. Act */
        account.deposit(1000);
        account.withdraw(500, "1234");
    
        /* 3. Assert */
        expect(account.balance).toEqual(500);
    })

    it("doesn't withdraw more money than available", () => {
        /* 1. Arrange */
        const account = new BankAccount("1234");
    
        /* 2. Act */
        account.deposit(1000);
        expect(() => account.withdraw(2500, "1234")).toThrowError();
    
        /* 3. Assert */
        expect(account.balance).toEqual(1000);
    })

    it("doesn't withdraw money with incorrect pin", () => {
        /* 1. Arrange */
        const account = new BankAccount("1234");
    
        /* 2. Act */
        account.deposit(1000);
        expect(() => account.withdraw(500)).toThrowError();
    
        /* 3. Assert */
        expect(account.balance).toEqual(1000);
    })

    it("notifies the bank when insufficient balance is attempted to be withdrawn", () => {
        /* 1. Arrange */
        const mockNotifyFn = vi.fn();
        const account = new BankAccount("1234", mockNotifyFn);
    
        /* 2. Act */
        account.deposit(1000);
        expect(() => account.withdraw(2500, "1234")).toThrowError();
    
        /* 3. Assert */
        expect(mockNotifyFn).toBeCalled();
        expect(account.balance).toEqual(1000);
    })
})
