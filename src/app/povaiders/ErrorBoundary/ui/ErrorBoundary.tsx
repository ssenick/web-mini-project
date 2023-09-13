import React, { type ErrorInfo, type ReactNode } from 'react'
import { ErrorPage } from 'widgets/ErrorPage'

interface ErrorBoundaryProps {
  children?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: Error): ErrorBoundaryState {
    console.log(error)
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo)
  }

  render (): React.ReactNode {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      // You can render any custom fallback UI
      return <ErrorPage/>
    }

    return children
  }
}
