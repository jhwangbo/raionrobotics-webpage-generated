<svelte:head>
	<title>Raion Robotics Inc.</title>
	<meta
		name="gallery"
		content="gallery"
	/>
</svelte:head>

<div id="news" class="gallery">
	<iframe src="https://www.youtube.com/embed/yV-tP3DHXes?si=63h6jaclVHazXDjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	<iframe src="https://www.youtube.com/embed/dt1u8zwUMok?si=PZ5ejWCwmTOcgtrL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	<iframe src="https://www.youtube.com/embed/fO_PVr27QxU?si=GUmFv5RD6bYKk-6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	<iframe src="https://www.youtube.com/embed/f696z7Mx6Ls?si=53sZUsRoBDQ_JCiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<style>
	.gallery {
		width: 50vw;
		margin: auto;
		display: grid;
		padding: 20px;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 20px;
		justify-content: center;
  		align-items: center;
	}

	iframe {
		width: 23vw; 
		height: 12.9375vw; /* 100/56.25 = 560/315 = 1.778 */
	}
</style>