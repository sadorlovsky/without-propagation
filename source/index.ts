const withoutPropagation = (handler: (e: Event) => void) => (e: Event): void => {
  e.stopPropagation()
  return handler(e)
}

export default withoutPropagation
