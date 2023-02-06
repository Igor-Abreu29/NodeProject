import http from 'node:http'
import { Transform } from 'node:stream'

class TransformStreamsInNegative extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1

        console.log(transformed)

        callback(null, Buffer.from(transformed.toString()))
    }
}

const server = http.createServer(async (req, res) => {

    const buffer = []

    for await (const chunk of req) {
        buffer.push(chunk)
    }

    const body = Buffer.concat(buffer).toString()

    console.log(body)

    console.log(FullStreamContent)
    return res.end(FullStreamContent)
})

server.listen(5174)