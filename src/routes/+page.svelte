<svelte:head>
	<title>Raion Robotics Inc.</title>
	<meta
		name="home"
		content="home"
	/>
</svelte:head>

<!-- Optional: some overlay text to describe the video -->
<section class="video-wrapper -z-30 position:absolute">
	<video playsinline autoplay muted loop>
		<source src="/video/raibo1_640.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
</section>
<!-- <section id="hero" class="video-wrapper">
	<div class="video" style="background-image: url('/video/raibo1.mp4');">
		<div class="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:py-0 lg:pt-16 lg:grid-cols-12">
			<div class="mr-auto place-self-center lg:col-span-7">
				<h1 class="font-noto indent-8 max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
					라이보
				</h1>
				<p class="font-noto indent-8 max-w-2xl mb-6 font-bold text-white lg:mb-8 md:text-lg lg:text-xl">
					모든 지형을 위한 사족 로봇 솔루션
				</p>

			</div>
		</div>
	</div>
</section> -->

<style>
	.font-noto {
		font-family: "Noto Sans";
	}

	video {
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		height: 100%;
		width: 100%;
		z-index: 0;
	}
	.video-wrapper {
		height: 800px;
		position: relative;
		overflow: hidden;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

<!-- video {
	/** Simulationg background-size: cover */
	object-fit: cover;
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -7;
}

.video-wrapper {
	/* Telling our absolute positioned video to 
	be relative to this element */
	position: relative;

	/* Will not allow the video to overflow the 
	container */
	overflow: hidden;

	/* Centering the container's content vertically 
	and horizontally */
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
} -->