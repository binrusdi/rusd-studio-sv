<script>
	import '../../layout.css';
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	const { children } = $props();

	/** @type {HTMLElement | null} */
	let menuRef = $state(null);

	/** @type {string | null} */
	let activeMenu = $state(null);

	/** @type {{ id: number, name: string }[]} */
	const menuItems = ['File', 'Edit', 'View', 'Help'].map((name, index) => ({
		id: index,
		name
	}));

	/** @type {Record<string, string[]>} */
	const subMenuItems = {
		File: ['New', 'Open', 'Save', 'Exit'],
		Edit: ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'],
		View: ['Zoom In', 'Zoom Out'],
		Help: ['Documentation', 'About']
	};

	/**
	 * @param {string} menuName
	 */
	function toggleMenu(menuName) {
		activeMenu = activeMenu === menuName ? null : menuName;
	}

	onMount(() => {
		/**
		 * @param {any} event
		 */
		function handleClickOutside(event) {
			if (menuRef && !menuRef.contains(event.target)) {
				activeMenu = null;
			}
		}

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="flex h-screen flex-col overflow-hidden">
	<header
		class="flex items-center justify-start gap-4 border border-white/30 bg-white/20 px-4 py-1 backdrop-blur-md"
	>
		<!-- Logo dan Nama -->
		<div class="flex items-center gap-1">
			<a href={resolve('/')}>
				<img src="favicon.svg" alt="Rusd-Studio" srcset="" class="h-10 cursor-pointer" />
			</a>
			<h2 class="font-bold text-amber-400">Rusd Studio</h2>
		</div>

		<!-- Menu -->
		<ul bind:this={menuRef} class="relative flex gap-2 text-amber-400">
			{#each menuItems as item (item.id)}
				{@const submenu = subMenuItems[item.name] ?? []}
				<li class="relative">
					<button
						type="button"
						class="rounded px-2 py-1 text-sm font-medium transition hover:cursor-pointer hover:bg-green-700/20 hover:text-green-400"
						aria-expanded={activeMenu === item.name}
						onclick={() => toggleMenu(item.name)}
					>
						{item.name}
					</button>

					{#if activeMenu === item.name}
						<ul
							class="absolute top-full left-0 z-50 mt-1 min-w-44 rounded border border-green-700 bg-slate-950/75 py-1 shadow-lg shadow-black/20"
						>
							{#each submenu as subItem (subItem)}
								<li>
									<button
										type="button"
										class="block w-full px-3 py-2 text-left text-sm text-amber-300 transition hover:bg-green-700/20 hover:text-green-300"
									>
										{subItem}
									</button>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>

		<figure class="ml-auto flex items-center">
			<img src="" alt="" class="h-8 w-8 rounded-full bg-amber-300" />
		</figure>
	</header>

	<div class="min-h-0 flex-1 overflow-hidden">
		{@render children()}
	</div>
</div>
