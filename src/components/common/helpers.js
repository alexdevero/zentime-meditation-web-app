// Helpers
import { transitionDuration, transitionTiming } from './variables'

export const remy = px => `${px / 16}rem`

export const transition = (prop = 'all') => `${prop} ${transitionDuration} ${transitionTiming}`
