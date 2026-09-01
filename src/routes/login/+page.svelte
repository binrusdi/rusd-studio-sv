<svelte:head>
	<title>Login | Rusd Studio</title>
</svelte:head>

<div class="flex min-h-[80vh] items-center justify-center bg-amber-50 px-4 py-12">
	<div
		class="w-full max-w-md rounded-xl border border-amber-200 bg-white p-8 shadow-lg shadow-amber-100"
	>
		<div class="mb-6 text-center">
			<h1 class="text-3xl font-bold text-amber-500">Welcome back</h1>
			<p class="mt-2 text-sm text-slate-600">Sign in to continue building.</p>
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
				<label for="password" class="mb-1 block text-sm font-medium text-slate-700">Password</label>
				<input
					id="password"
					type="password"
					placeholder="••••••••"
					class="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 transition outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
				/>
			</div>

			<div class="flex items-center justify-between text-sm">
				<label class="flex items-center gap-2 text-slate-600">
					<input
						type="checkbox"
						class="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-200"
					/>
					Remember me
				</label>
				<a href="/forgot-password" class="font-semibold text-amber-500 hover:text-amber-600"
					>Forgot password?</a
				>
			</div>

			<button
				type="submit"
				class="w-full rounded-md bg-amber-400 px-4 py-2.5 font-semibold text-white transition hover:bg-amber-500"
			>
				Sign in
			</button>
		</form>

		<p class="mt-5 text-center text-sm text-slate-600">
			Don't have an account?
			<a href="/register" class="font-semibold text-amber-500 hover:text-amber-600">Sign up</a>
		</p>
	</div>
</div>
