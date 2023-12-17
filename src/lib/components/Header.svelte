<script>
	import Menu from './Menu.svelte'
	import MenuItem from './MenuItem.svelte'
	import '/src/styles/app.css';
</script>

<header>
	<nav class="bg-gray-100">
		<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
			<div class="lg:mt-0 lg:flex">
				<p><a href="/"><img src="/images/logo_f2-02.png" width="207" alt="Logo" /></a></p>
			</div>
			<div
				class="items-center justify-between w-full md:flex md:w-auto md:order-1 z-30"
				id="navbar-sticky"
			>
				<ul
					class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-16 md:mt-0 md:border-0"
				>
					<li>
						<a
							href="/"
							class="font-menu"
							aria-current="page">홈
						</a>
					</li>
					<li>
						<a
							href="/team"
							class="font-menu"
							aria-current="page">회사소개
						</a>
					</li>
					<li>
						<Menu>
							<span
								slot='toggle'
								href="/product/Raibo2"
								class="font-menu"
								aria-current="page">제품
							</span>
							<MenuItem><a href="/product/Raibo1">라이보1</a></MenuItem>
							<MenuItem><a href="/product/Raibo2">라이보2</a></MenuItem>
						</Menu>
					</li>
					<li>
						<a
							href="/media"
							class="font-menu"
							aria-current="page">뉴스
						</a>
					</li>
					<li>
						<a
							href="/gallery"
							class="font-menu"
							aria-current="page">갤러리
						</a>
					</li>
					<li>
						<a
							href="/hiring"
							class="font-menu"
							>채용
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>

<style>
	.font-menu {
		font-family: "Noto Sans";
		font-size: larger;
		font-weight: 600;
		color: rgb(12, 12, 105)
	}
</style>