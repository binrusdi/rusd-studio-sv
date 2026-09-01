<script>
	import './layout.css';

	const { children } = $props();
	const menus = [
		{ name: 'Price', id: 1 },
		{ name: 'Editor', id: 2 },
		{ name: 'Compare', id: 3 }
	];
</script>

<nav class="flex items-center justify-around p-2 text-green-900">
	<div class="flex items-center gap-2">
		<a href="/">
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
			href="/login"
			class="cursor-pointer rounded-sm p-2 text-amber-400 hover:bg-amber-400 hover:text-amber-50"
		>
			Sign in
		</a>
		<a
			href="/register"
			class="cursor-pointer rounded-sm bg-amber-400 p-2 text-white transition hover:text-amber-100"
		>
			Sign up
		</a>
	</div>
</nav>

{@render children()}
