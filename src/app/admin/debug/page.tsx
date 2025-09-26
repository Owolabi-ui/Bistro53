import { NextStudio } from 'next-sanity/studio'

// Simple config for testing
const config = {
  projectId: '0x4sq055',
  dataset: 'production',
  basePath: '/admin',
  plugins: [],
  schema: {
    types: [],
  },
}

export default function StudioPage() {
  return (
    <div>
      <h1>Debug Admin Page</h1>
      <p>Project ID: 0x4sq055</p>
      <p>Dataset: production</p>
      <NextStudio config={config} />
    </div>
  )
}
