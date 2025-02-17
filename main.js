// ソート　要素を2つずつ比較するため
const genres = [
    { id: 2, name: "pops" }, 
    { id: 4, name: "rock" },
    { id: 1, name: "jazz" },
    { id: 3, name: "R&B" },
]
// 昇順
const sortedGenres = genres.sort((first, second) => first.id - second.id);
console.log(sortedGenres)
// 降順
const sortedGenres2 = genres.sort((first, second) => second.id - first.id);
console.log(sortedGenres2)

// 分割代入
let [a, b] = [10, 20]
console.log(a)
console.log(b)

let [c, d, ...rest] = [10, 20, 30, 40, 50]
console.log(c)
console.log(d)
console.log(rest)

let {e, f, ...restg} = {e: 10, f: 20, g: 30, h: 40}
console.log(e)
console.log(f)
console.log(restg)