/* Singleton là một mẫu thiết kế đảm bảo rằng một lớp chỉ có một thể hiện bất biến. Nói một cách đơn giản, mẫu đơn bao gồm một đối tượng không thể sao chép hoặc sửa đổi. Nó thường hữu ích khi chúng ta muốn có một điểm chân lý duy nhất bất biến nào đó cho ứng dụng của mình.

Ví dụ, giả sử chúng ta muốn có tất cả cấu hình của ứng dụng trong một đối tượng. Và chúng tôi muốn không cho phép bất kỳ sự sao chép hoặc sửa đổi đối tượng đó. */

//Using an object literal
const Config = {
    start: () => console.log('App has started'),
    update: () => console.log('App has updated'),
}

// We freeze the object to prevent new properties being added and existing properties being modified or removed
Object.freeze(Config)

Config.start() // "App has started"
Config.update() // "App has updated"

Config.name = "Robert" // We try to add a new key
console.log(Config) // And verify it doesn't work: { start: [Function: start], update: [Function: update] }
/* ------------------------------ */
// Using classes
class Config2 {
    constructor() { }
    start() { console.log('App has started 2') }
    update() { console.log('App has updated 2') }
}

const instance = new Config2()
Object.freeze(instance)
instance.start()

// output: App has started 2