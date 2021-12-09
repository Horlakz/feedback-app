<script>
    import {onMount, onDestroy} from 'svelte';
    import {FeedbackStore} from '../stores';
    import { fade, scale } from 'svelte/transition';
    import FeedBackItem from './FeedBackItem.svelte';
    // export let feedback = []

    // const unsubscribe = FeedbackStore.subscribe((data) => feedback = data)

    // onMount(() => {
    //     console.log('mounted')
    // })

    // onDestroy(() => {
    //     unsubscribe()
    // })
</script>

{#each $FeedbackStore as fb (fb.id)}
<div in:scale out:fade="{{ duration: 500 }}">
    <!-- <FeedBackItem item={fb} on:delete-feedback /> -->
    <FeedBackItem item={fb} />
</div>
{/each}