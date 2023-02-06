import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1

    _read() {
        const number = this.index++

        setTimeout(() => {
            if (number > 5) {
                this.push(null)
            } else {
                const buffer = Buffer.from(String(number))
                this.push(buffer)
            }
        }, 1000)
    }
}

fetch("http://localhost:5174", {
    method: 'POST',
    body: new OneToHundredStream(),
}).then(response => {
    return response.text()
}).then(data => {
    console.log(data)
})