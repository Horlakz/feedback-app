import {writable} from 'svelte/store'

export const FeedbackStore  = writable([
    {
        id: 1,
        rating: 10,
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum iure sunt et placeat molestias totam aliquid adipisci quisquam molestiae fugit?'
    },
    {
        id: 2,
        rating: 6,
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum iure sunt et placeat molestias totam aliquid adipisci quisquam molestiae fugit?'
    },
    {
        id: 3,
        rating: 8,
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum iure sunt et placeat molestias totam aliquid adipisci quisquam molestiae fugit?'
    },
])