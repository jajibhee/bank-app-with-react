//Using action creators...
// the action constants are UPPER_CASE_WITH_UNDERSCORES. That, too, is just a convention. 
// Helps you know if you’re looking at an action creator function or an action constant
export const DECREMENT = "DECREMENT"
export const INCREMENT = "INCREMENT"

export const decrement = (amount) =>({
    type: DECREMENT, amount
})

export const increment = (amount) =>({
    type: INCREMENT, amount
})
