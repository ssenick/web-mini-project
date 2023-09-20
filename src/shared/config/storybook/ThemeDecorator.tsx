import { type Story } from '@storybook/react'
import { type Theme, ThemeProvider } from 'app/povaiders/ThemeProvaider'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
)
