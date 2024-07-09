import { describe, expect, it } from "vitest";
import BankAccount from "./BankAccount";

describe("BankAccount", () => {
    it("is created with correct details", () =>{
        /* 1. Arrange */
        /* 2. Act */
        const account = new BankAccount("0123");
    
        /* 3. Assert */
        expect(account).toBeInstanceOf(BankAccount);
        expect(account.pin).toEqual("0123");
        expect(account.balance).toEqual(0);
    })

    it("can have money deposited", () => {
        /* 1. Arrange */
        const account = new BankAccount();
    
        /* 2. Act */
        account.deposit(1000000);
    
        /* 3. Assert */
        expect(account.balance).toEqual(1000000);
    });
})
