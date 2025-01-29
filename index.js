class Solution1 {
    #words;

    constructor(words) {
        this.#words = words.sort((a, b) => a.length - b.length);
    }

    findMathcingSubstrings() {
        const set = new Set();

        for(let i = 0; i < this.#words.length; i++) {
            for(let j = i + 1; j < this.#words.length; j++) {
                if(this.#words[j].includes(this.#words[i])) {
                    set.add(this.#words[i])

                    break;
                }
            }
        }

        return Array.from(set)
    }
}

const solution11 = new Solution1(["mass", "as", "hero", "superhero"]);
const solution12 = new Solution1(["leetcode", "et", "code"]);
const solution13 = new Solution1(["blue", "green", "bu"]);
const solution14 = new Solution1(["abc", "a bc", "ab"])

console.log(solution11.findMathcingSubstrings()); // ["as", "hero"]
console.log(solution12.findMathcingSubstrings()); // ["et", "code"]
console.log(solution13.findMathcingSubstrings()); // []
console.log(solution14.findMathcingSubstrings())
// Time complexity O(n^2 * m) (nested cycle n^2 and cycle for checking that substring(m) includes in n).
// Space complexity O(n) (pushing data in Set), but O(n * m) because of using sort also.





class Solution2 {
    #words;

    constructor(words) {
        this.#words = words;
    }

    findMathcingSubstrings() {
        const wordsStr = this.#words.join(' ')

        return this.#words.filter((word) => wordsStr.split(word).length > 2) // O(n^2 * m)
    }
}

// Tests
const solution21 = new Solution2(["mass", "as", "hero", "superhero"]);
const solution22 = new Solution2(["leetcode", "et", "code"]);
const solution23 = new Solution2(["blue", "green", "bu"]);
const solution24 = new Solution2(["abc", "a bc", "ab"])

console.log(solution21.findMathcingSubstrings()); // ["as", "hero"]
console.log(solution22.findMathcingSubstrings()); // ["et", "code"]
console.log(solution23.findMathcingSubstrings()); // []
console.log(solution24.findMathcingSubstrings())




class Solution3 {
    #words;

    constructor(words) {
        this.#words = words;
    }

    findMathcingSubstrings() {
        const wordsStr = this.#words.join(' ');
        return this.#words.filter(word => wordsStr.indexOf(word) !== wordsStr.lastIndexOf(word)); // O(n^2 * m)
    }
}


// Tests
const solution31 = new Solution3(["mass", "as", "hero", "superhero"]);
const solution32 = new Solution3(["leetcode", "et", "code"]);
const solution33 = new Solution3(["blue", "green", "bu"]);
const solution34 = new Solution3(["abc", "a bc", "ab"])

console.log(solution31.findMathcingSubstrings()); // ["as", "hero"]
console.log(solution32.findMathcingSubstrings()); // ["et", "code"]
console.log(solution33.findMathcingSubstrings()); // []
console.log(solution34.findMathcingSubstrings())