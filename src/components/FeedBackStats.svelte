<script>
  import { FeedbackStore } from "../stores";

  $: count = $FeedbackStore.length;
  $: average = $FeedbackStore.reduce((acc, cur) => acc + cur.rating, 0) / count;
</script>

<div class="feedback-stats">
  <h4><span style="color: red;">{count}</span> Reveiws</h4>
  {#if count === 0}
    <h4><span style="color: red;">0</span> Average Rating</h4>
  {:else}
    <h4><span style="color: red;">{average}</span> Average Rating</h4>
  {/if}
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
