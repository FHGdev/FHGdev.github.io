declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"post": {
"markdown-style-guide.md": {
	id: "markdown-style-guide.md";
  slug: "markdown-style-guide";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"post-1.md": {
	id: "post-1.md";
  slug: "post-1";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
};
"teamlist_bod": {
"ho-kuen-loon.md": {
	id: "ho-kuen-loon.md";
  slug: "ho-kuen-loon";
  body: string;
  collection: "teamlist_bod";
  data: InferEntrySchema<"teamlist_bod">
} & { render(): Render[".md"] };
};
"teamlist_management": {
"alain-durand.md": {
	id: "alain-durand.md";
  slug: "alain-durand";
  body: string;
  collection: "teamlist_management";
  data: InferEntrySchema<"teamlist_management">
} & { render(): Render[".md"] };
"alvin-lim.md": {
	id: "alvin-lim.md";
  slug: "alvin-lim";
  body: string;
  collection: "teamlist_management";
  data: InferEntrySchema<"teamlist_management">
} & { render(): Render[".md"] };
"derrick-chan.md": {
	id: "derrick-chan.md";
  slug: "derrick-chan";
  body: string;
  collection: "teamlist_management";
  data: InferEntrySchema<"teamlist_management">
} & { render(): Render[".md"] };
"dr-walter-lim.md": {
	id: "dr-walter-lim.md";
  slug: "dr-walter-lim";
  body: string;
  collection: "teamlist_management";
  data: InferEntrySchema<"teamlist_management">
} & { render(): Render[".md"] };
"ho-kuen-loon.md": {
	id: "ho-kuen-loon.md";
  slug: "ho-kuen-loon";
  body: string;
  collection: "teamlist_management";
  data: InferEntrySchema<"teamlist_management">
} & { render(): Render[".md"] };
"jeremy-matti.md": {
	id: "jeremy-matti.md";
  slug: "jeremy-matti";
  body: string;
  collection: "teamlist_management";
  data: InferEntrySchema<"teamlist_management">
} & { render(): Render[".md"] };
"kenneth-cheung.md": {
	id: "kenneth-cheung.md";
  slug: "kenneth-cheung";
  body: string;
  collection: "teamlist_management";
  data: InferEntrySchema<"teamlist_management">
} & { render(): Render[".md"] };
"margareta-laminto.md": {
	id: "margareta-laminto.md";
  slug: "margareta-laminto";
  body: string;
  collection: "teamlist_management";
  data: InferEntrySchema<"teamlist_management">
} & { render(): Render[".md"] };
"ng-shen-li.md": {
	id: "ng-shen-li.md";
  slug: "ng-shen-li";
  body: string;
  collection: "teamlist_management";
  data: InferEntrySchema<"teamlist_management">
} & { render(): Render[".md"] };
"sean-ho.md": {
	id: "sean-ho.md";
  slug: "sean-ho";
  body: string;
  collection: "teamlist_management";
  data: InferEntrySchema<"teamlist_management">
} & { render(): Render[".md"] };
"wendy-lim.md": {
	id: "wendy-lim.md";
  slug: "wendy-lim";
  body: string;
  collection: "teamlist_management";
  data: InferEntrySchema<"teamlist_management">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
