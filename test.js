import fs from 'fs'
import path from 'path'
import test from 'ava'


const css = fs.readFileSync(path.join(__dirname, './basscss.css'), 'utf8')

test('snapshot', t => {
  t.snapshot(css)
})
