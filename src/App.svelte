<script>
	import FeedBackForm from './components/FeedBackForm.svelte';
	import FeedBackList from './components/FeedBackList.svelte';
	import FeedBackStats from './components/FeedBackStats.svelte';
 

	// $: count = feedback.length;
	// $: average = feedback.reduce((acc, cur) => acc + cur.rating, 0) / count;
	// $: average = feedback.reduce((a, { rating }) => a + rating, 0) / count;

	// function addFeedback (e) {
	// 	const newFeedback = e.detail
	// 	// feedback.push(newFeedback)
	// 	feedback= [newFeedback, ...feedback]

	// }


	// const deleteFeedback = (e) => {
	// 	const itemId = e.detail
	// 	feedback = feedback.filter((item) => item.id !== itemId)
	// }

</script>

<main class="container">
	<FeedBackForm />
	<!-- <FeedBackForm on:add-feedback={addFeedback} /> -->
	<FeedBackStats />
	<!-- <FeedBackStats {count} {average} /> -->
  <!-- <FeedBackList on:delete-feedback={deleteFeedback} /> -->
  <FeedBackList />
  
</main>

<style>

</style>
