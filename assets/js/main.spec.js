describe("Тест функции defUpperStr", () => {
    it("Функция должна вернуть переданый текст 'my test text' в верхнем регистре", () => {
        const t1 = 'my test text';

        expect(defUpperStr(t1)).toBe(t1.toUpperCase());
    });
    it("Функция должна вернуть текст по умолчанию 'Default text' в верхнем регистре", () => {
        expect(defUpperStr()).toBe('DEFAULT TEXT');
    })

});
describe("Тест функции ageClassification", () => {
    it("Функция должна вернуть null", () => {
        expect(ageClassification(-1)).toBe(null);
    });
    it("Функция должна вернуть 'детский возраст'", () => {
        expect(ageClassification(5)).toBe('детский возраст');
    });
    it("Функция должна вернуть 'молодой возраст'", () => {
        expect(ageClassification(34)).toBe('молодой возраст');
    });
    it("Функция должна вернуть 'средний возраст'", () => {
        expect(ageClassification(50)).toBe('средний возраст');
    });
    it("Функция должна вернуть 'пожилой возраст'", () => {
        expect(ageClassification(65.1)).toBe('пожилой возраст');
    });
    it("Функция должна вернуть 'старческий возраст'", () => {
        expect(ageClassification(80)).toBe('старческий возраст');
    });
    it("Функция должна вернуть 'долгожители'", () => {
        expect(ageClassification(110)).toBe('долгожители');
    });
    it("Функция должна вернуть null", () => {
        expect(ageClassification(130)).toBe(null);
    });
});
describe("Тест функции oddFn", () => {
    it("Функция должна вернуть массив [1, 3, 5, 7, 9]", () => {
        expect(oddFn(10)).toEqual([1, 3, 5, 7, 9]);
    });
    it("Функция должна вернуть массив [1, 3, 5, 7, 9, 11, 13, 15]", () => {
        expect(oddFn(15)).toEqual([1, 3, 5, 7, 9, 11, 13, 15]);
    });
    it("Функция должна вернуть массив [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]", () => {
        expect(oddFn(20)).toEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
    });

});