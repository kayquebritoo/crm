import { render, screen } from '@testing-library/react'
import { GlassCard } from './GlassCard'
import { expect, test } from 'vitest'

test('renders children correctly', () => {
  render(<GlassCard>Test Content</GlassCard>)
  expect(screen.getByText('Test Content')).toBeInTheDocument()
})

test('applies additional className', () => {
  const { container } = render(<GlassCard className="custom-class">Content</GlassCard>)
  expect(container.firstChild).toHaveClass('custom-class')
})
