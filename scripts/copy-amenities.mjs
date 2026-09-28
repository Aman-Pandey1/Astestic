import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assetsDir = path.join(__dirname, '..', 'public', 'assets')
const outDir = path.join(assetsDir, 'amenities')

const map = [
  ['Rectangle 7.png', 'free-parking.png'],
  ['Rectangle 8.png', 'wheelchair.png'],
  ['Rectangle 9.png', 'waiting-area.png'],
  ['Rectangle 10.png', 'washrooms.png'],
  ['Rectangle 11.png', 'consultation.png'],
  ['Rectangle 12.png', 'support-staff.png'],
  ['Rectangle 13.png', 'tea-coffee.png'],
  ['Rectangle 14.png', 'connectivity.png'],
]

fs.mkdirSync(outDir, { recursive: true })

for (const [src, dest] of map) {
  const from = path.join(assetsDir, src)
  const to = path.join(outDir, dest)
  if (!fs.existsSync(from)) {
    console.error('Missing:', src)
    continue
  }
  fs.copyFileSync(from, to)
  console.log('OK:', dest)
}

console.log('Done. Amenities copied to public/assets/amenities/')
