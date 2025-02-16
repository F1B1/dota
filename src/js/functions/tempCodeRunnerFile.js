



class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((key) => `${key.length}:${key}`).join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0

        while (i < str.length){
            let pivot = str.indexOf(':', i)

            console.log(pivot)
        }

    }
}

const sol = new Solution()

const edc = sol.encode(["neet","code","love","you"])

const dec = sol.decode(["neet","code","love","you"])

console.log(edc);

console.log(dec)


