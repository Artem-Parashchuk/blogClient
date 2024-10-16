export const statusSelector = state => state.auth.status

export const getMeSelector = state => Boolean(state.auth.token)