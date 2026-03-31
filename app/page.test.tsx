import { render, screen, waitFor } from '@testing-library/react'
import DashboardPage from './page'
import { vi, expect, test } from 'vitest'

test('renders DashboardPage and shows welcome message after loading', async () => {
  render(<DashboardPage />)
  
  // Initially should show skeleton (loading state)
  // Our implementation shows skeletons first
  
  // Wait for the skeleton to disappear and the real content to appear
  await waitFor(() => {
    expect(screen.getByText(/Olá, Kayque/i)).toBeInTheDocument()
  }, { timeout: 2000 })

  expect(screen.getByText(/Aqui está o pulso das suas operações hoje/i)).toBeInTheDocument()
  expect(screen.getByText(/R\$ 482.950,00/i)).toBeInTheDocument()
})

test('renders project cards', async () => {
  render(<DashboardPage />)
  
  await waitFor(() => {
    expect(screen.getByText(/Sistema Nexus Alpha/i)).toBeInTheDocument()
    expect(screen.getByText(/Interface Kayque Brito OS/i)).toBeInTheDocument()
  })
})
