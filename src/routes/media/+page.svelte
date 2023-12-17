<svelte:head>
	<title>Raion Robotics Inc.</title>
	<meta
		name="media"
		content="media"
	/>
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import news_data from "$lib/components/news/news.json"
	
	let news_data_shown = []
	let currentItems = 0;

	addMoreNews();

	function addMoreNews() {
		currentItems += 6;
		for (let i = currentItems-6; i < Math.min(news_data.news.length, currentItems); i++) {
			news_data_shown.push(news_data.news[i]);
		}
		news_data_shown = news_data_shown;
	}	
</script>

<div id="news" class="news">	
	{#each news_data_shown as item}	
		<figure>
			<a href={item.url}>
				<img src={item.image} alt="news"/>
			</a>
			<figcaption class="font-noto">{item.text}</figcaption>
		</figure>
	{/each}
</div>

<div class="button-container">
	<div id="button" class="show-more-button">
		{#if currentItems < news_data.news.length}
		<button on:click={addMoreNews}
			id="loadmore"
			type="button"
			class="button-class"
			text-color="white"
			>더보기
		</button>
		{/if}
	</div><!--font-noto text-white bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-purple-100 font-medium rounded-lg text-sm px-4 py-4 text-center mr-3 md:mr-0-->
</div>

<style>
	.news {
		width: 50vw;
		display: grid;
		margin: auto;
		padding: 20px;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 20px;
		justify-content: center;
  		align-items: center;
	}

	.button-class {
		font-family: "Noto Sans";
		color: white;
		font-weight: bold;
		font-size: large;
		border-radius: 15px;
		background-color: rgb(15, 15, 97);
		padding-top: 7px;
		padding-bottom: 7px;
		padding-right: 40px;
		padding-left: 40px;
	}

	figure,
	img {
		width: 100%;
		margin: 0;
	}

	.show-more-button {
		margin: 20px;
  		position: relative;
  		left: 50%;
	}

	.button-container { 
		height: 100px;
		position: relative;
		z-index: 20;
	}

	.font-noto {
		font-family: "Noto Sans";
	}
</style>