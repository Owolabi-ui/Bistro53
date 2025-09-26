'use client'

import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from '@/sanity/schemaTypes'

const config = defineConfig({
  projectId: '0x4sq055',
  dataset: 'production',
  basePath: '/admin',
  schema,
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: '2024-12-30' }),
  ],
})

export default function StudioPage() {
  return <NextStudio config={config} />
}
