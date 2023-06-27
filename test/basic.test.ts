import { describe, it, expect } from 'vitest'
import { fileURLToPath } from 'node:url'
import { setup, $fetch } from '@nuxt/test-utils'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders the index page', async () => {
    const html = await $fetch('/')
    expect(html).toContain('<p>https://res.cloudinary.com/ddtc5sowb/image/upload/f_auto/q_auto/v1//cld-sample-5.jpg?_a=BBDAACAD0</p>')
  })
})
