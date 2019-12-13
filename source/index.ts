const withoutPropagation = (fn: (e: Event) => void) => (e: Event): void => {
  e.stopPropagation()
  return fn(e)
}

export default withoutPropagation
