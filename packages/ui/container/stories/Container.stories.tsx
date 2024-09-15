import type { Meta, StoryObj } from '@storybook/react'
import { Container } from '../src'

const meta: Meta<Container> = {
  title: 'Container',
  component: Container
}

type Story = StoryObj<Container>

export const Default: Story = {
  args: {
    children: (
      <>
        <h1>TSS-Next</h1>
      </>
    )
  }
}

export default meta