<svelte:head>
	<title>Register | Rusd Studio</title>
</svelte:head>

<div class="flex min-h-[80vh] items-center justify-center bg-amber-50 px-4 py-12">
	<div
		class="w-full max-w-md rounded-xl border border-amber-200 bg-white p-8 shadow-lg shadow-amber-100"
	>
		<div class="mb-6 text-center">
			<h1 class="text-3xl font-bold text-amber-500">Create account</h1>
			<p class="mt-2 text-sm text-slate-600">Join Rusd Studio and start building.</p>
		</div>

		<form class="space-y-5">
			<div>
				<label for="email" class="mb-1 block text-sm font-medium text-slate-700">Email</label>
				<input
					id="email"
					type="email"
					placeholder="you@example.com"
					class="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 transition outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
				/>
			</div>

			<div>
				<label for="username" class="mb-1 block text-sm font-medium text-slate-700">Username</label>
				<input
					id="username"
					type="text"
					placeholder="yourname"
					class="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 transition outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
				/>
			</div>

			<div>
				<label for="password" class="mb-1 block text-sm font-medium text-slate-700">Password</label>
				<input
					id="password"
					type="password"
					placeholder="••••••••"
					class="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 transition outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
				/>
			</div>

			<button
				type="submit"
				class="w-full rounded-md bg-amber-400 px-4 py-2.5 font-semibold text-white transition hover:bg-amber-500"
			>
				Sign up
			</button>
		</form>

		<p class="mt-5 text-center text-sm text-slate-600">
			Already have an account?
			<a href="/login" class="font-semibold text-amber-500 hover:text-amber-600">Sign in</a>
		</p>
	</div>
</div>
