<script>
	const iconToolbar = [
		{ name: 'Barcode', icon: 'qr_code_2_add' },
		{ name: 'Picture', icon: 'add_photo_alternate' },
		{ name: 'Text', icon: 'text_fields' },
		{ name: 'Shape', icon: 'format_shapes' },
		{ name: 'Line', icon: 'diagonal_line' },
		{ name: 'Circle', icon: 'circle' }
	];
</script>

<svelte:head>
	<title>Editor - Rusd Studio</title>
	<meta name="description" content="Editor page for Rusd Studio" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<main class="box-border flex h-screen flex-row gap-2 overflow-hidden p-2">
	<!-- Toolbar -->
	<aside class="flex flex-col gap-4">
		{#each iconToolbar as icon (icon.name)}
			<button>
				<span class="material-symbols-outlined">{icon.icon}</span>
				<p class="text-sm">{icon.name}</p>
			</button>
		{/each}
	</aside>

	<!-- Properties -->
	<div class="flex hidden flex-col gap-2 text-sm">
		<form action=""></form>
	</div>
</main>

<style>
	.material-symbols-outlined {
		font-variation-settings:
			'FILL' 0,
			'wght' 400,
			'GRAD' 0,
			'opsz' 24;
	}
</style>
