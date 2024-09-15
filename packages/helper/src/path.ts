import fs from 'node:fs'
import path from 'node:path'


export function generateDirectoryPaths<T>(cb: (dirname: string, dir: string) => T, dirs: string[]) {
  const dirname = path.resolve(...dirs)
  const directories = fs.readdirSync(dirname)
  return directories.map(dir => cb(dirname, dir))
}

export function generateTailwindContents(dirname: string, dir: string) {
  return generateDirectoryPaths<string>((dirname: string, dir: string) => {
    return path.join(dirname, dir, 'src/*.{ts,tsx}')
  }, [dirname, dir])
}