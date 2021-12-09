
<script>
    import {FeedbackStore} from '../stores'

    $: count = $FeedbackStore.length;
    $: average = $FeedbackStore.reduce((acc, cur) => acc + cur.rating, 0) / count;
</script>

<div class="feedback-stats">
    <h4><span style="color: red;">{count}</span> Reveiws</h4>
    {#if average ===   NaN}
    <h4><span style="color: red;">0</span> Average Rating</h4>
    {/if}
    <h4><span style="color: red;">{average}</span> Average Rating</h4>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>