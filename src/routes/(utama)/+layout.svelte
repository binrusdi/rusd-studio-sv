<script>
	import '../layout.css';
	import { resolve } from '$app/paths';
	const { children } = $props();
	const menus = [
		{ name: 'Price', id: 1 },
		{ name: 'Editor', id: 2 },
		{ name: 'Compare', id: 3 }
	];
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<nav class="flex items-center justify-around p-2 text-green-900">
	<div class="flex items-center gap-2">
		<a href={resolve('/')}>
			<img src="favicon.svg" alt="Rusd-Studio" srcset="" class="h-12 cursor-pointer" />
		</a>
		<h2 class="font-bold text-amber-400">Rusd Studio</h2>
	</div>
	<div class="ml-2 gap-4 font-semibold">
		{#each menus as menu (menu.id)}
			<button class="cursor-pointer p-2 hover:rounded-sm hover:bg-amber-400 hover:text-amber-100"
				>{menu.name}</button
			>
		{/each}
	</div>
	<div class="flex gap-1">
		<a
			href={resolve('/login')}
			class="cursor-pointer rounded-sm p-2 text-amber-400 hover:bg-amber-400 hover:text-amber-50"
		>
			Sign in
		</a>
		<a
			href={resolve('/register')}
			class="cursor-pointer rounded-sm bg-amber-400 p-2 text-white transition hover:text-amber-100"
		>
			Sign up
		</a>
	</div>
</nav>

{@render children()}

<style>
	/* Terapkan ke body atau elemen lain biar kesebar ke semua halaman */
	:global(body) {
		font-family: 'Nunito', sans-serif;
		font-optical-sizing: auto;
		font-weight: 400; /* Ganti angka weight sesuai kebutuhan (misal 400, 600, 700) */
		font-style: normal;
	}
</style>
