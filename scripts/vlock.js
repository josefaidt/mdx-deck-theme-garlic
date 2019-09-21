#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const _dirname = process.cwd()

const ignore = ['node_modules']

const getFiles = directory => {
  const results = [directory]
  fs.readdirSync(directory, { withFileTypes: true }).forEach(f => {
    const fullPath = path.join(directory, f.name)
    if (f.isDirectory() && !ignore.includes(f.name)) {
      results.push(fullPath)
      traverseDirSync(fullPath, results)
    } else {
      results.push(fullPath)
    }
  })
  return results
}

const traverseDirSync = (dir, filelist) => {
  const files = fs.readdirSync(dir)
  // eslint-disable-next-line no-param-reassign
  filelist = filelist || []
  files.forEach(file => {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      // eslint-disable-next-line no-param-reassign
      filelist = traverseDirSync(fullPath, filelist)
    } else {
      filelist.push(path.join(dir, file))
    }
  })
  return filelist
}

const lock = ({ arr, version }) => {
  if (version) {
    if (version.split('.').length >= 3) {
      arr.forEach(n => {
        fs.readFile(n, 'utf8', (err, data) => {
          if (err) console.error(err.message)
          const nodeFile = JSON.parse(data)
          nodeFile.version = version
          fs.writeFile(n, JSON.stringify(nodeFile, null, 2), 'utf8', err => {
            if (err) console.error(err.message)
          })
        })
      })
      console.log(`Successfully locked to version ${version}`)
    } else {
      console.error(new Error('Version must have at least three levels'))
    }
  } else {
    console.info('missing version, defaulting to root package.json version')
    fs.readFile(arr[0], 'utf8', (err, data) => {
      if (err) console.error(err.message)
      const rootNodeFile = JSON.parse(data)
      lock({ arr, version: rootNodeFile.version })
    })
    // console.error(new Error('Must specify a version'))
  }
}

const nodeFiles = getFiles(_dirname).filter(f => f.endsWith('package.json'))
const args = process.argv.slice(2)

lock({ arr: nodeFiles, version: args[0] })
