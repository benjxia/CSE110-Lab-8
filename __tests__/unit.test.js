// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Phone number', () => {
    expect(functions.isPhoneNumber("111-1111")).toBe(true);
    expect(functions.isPhoneNumber("abcd")).toBe(false);
    expect(functions.isPhoneNumber('(123)-123-1234')).toBe(true);
    expect(functions.isPhoneNumber("1234-123-123tg1")).toBe(false);
});

test('Email', () => {
    expect(functions.isEmail("waduhek@gmail.com")).toBe(true);
    expect(functions.isEmail("af;lskdjf;laksdjf;laksdfj")).toBe(false);
    expect(functions.isEmail("i_am_very_dumb@yahoo.com")).toBe(true);
    expect(functions.isEmail("iforgotheat")).toBe(false);
});

test('strong password', () => {
    expect(functions.isStrongPassword("password")).toBe(true); // ????????
    expect(functions.isStrongPassword("123456")).toBe(false);
    expect(functions.isStrongPassword("abc")).toBe(false);
    expect(functions.isStrongPassword("iam_very")).toBe(true);
})

test('is date', () => {
    expect(functions.isDate('1-1-1')).toBe(false);
    expect(functions.isDate('1/1/2001')).toBe(true);
    expect(functions.isDate('November 14, 2001')).toBe(false);
    expect(functions.isDate('11/15/2022')).toBe(true);
});

test('is hex', () => {
    expect(functions.isHexColor('FFFFFF')).toBe(true);
    expect(functions.isHexColor("244,255,255")).toBe(false);
    expect(functions.isHexColor("i am incredibly stupid")).toBe(false);
    expect(functions.isHexColor("000000")).toBe(true);
});
