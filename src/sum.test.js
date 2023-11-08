import { sum } from "./sum"

describe('test sum function', () => {
    it('sum', () => {
        expect(sum(1,2)).toBe(3)
    })
})