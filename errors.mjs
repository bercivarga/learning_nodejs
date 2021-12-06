import {readFile} from 'fs/promises'

process.on('uncaughtException', (e) => {
    console.log(e)
})

try {
    const result = await readFile(new URL('app.mjs', import.meta.url), 'utf-8')
} catch(e) {
    console.error(e);
    throw e
}
