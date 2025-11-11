const fs = require('fs-extra')
const path = require('path')
const matter = require('gray-matter')
const algoliasearch = require('algoliasearch')

// Algolia credentials
const client = algoliasearch('Dilfyscps', 'YOUR_ADMIN_API_KEY') // Admin key for writes
const index = client.initIndex('dilfyscps_Algolia_Blog') // Your index name

// Path to your Markdown files
const contentDir = path.join(__dirname, 'docs') // adjust if your pages are elsewhere

async function getMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = await Promise.all(entries.map(entry => {
    const res = path.resolve(dir, entry.name)
    return entry.isDirectory() ? getMarkdownFiles(res) : res
  }))
  return Array.prototype.concat(...files).filter(f => f.endsWith('.md'))
}

async function buildRecords() {
  const files = await getMarkdownFiles(contentDir)
  const records = []

  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8')
    const { data, content: body } = matter(content)

    // data.title, data.tags etc from frontmatter
    const record = {
      objectID: path.relative(contentDir, file), // unique ID
      title: data.title || path.basename(file, '.md'),
      tags: data.tags || [],
      content: body.replace(/\n/g, ' '), // remove newlines for Algolia
      url: '/' + path.relative(contentDir, file).replace(/\\/g, '/').replace('.md', '/')
    }

    records.push(record)
  }

  return records
}

async function pushToAlgolia() {
  const records = await buildRecords()
  await index.saveObjects(records)
  console.log(`✅ ${records.length} records pushed to Algolia!`)
}

pushToAlgolia().catch(console.error)
