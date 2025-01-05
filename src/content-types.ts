import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCategoryFields {
    label: EntryFieldTypes.Symbol<"clothing" | "cosmetics" | "entertainment" | "food" | "technology">;
    variant?: EntryFieldTypes.Symbol;
}

export type TypeCategorySkeleton = EntrySkeletonType<TypeCategoryFields, "category">;
export type TypeCategory<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCategorySkeleton, Modifiers, Locales>;

export interface TypeNavigationFields {
    title: EntryFieldTypes.Symbol;
    navItems: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavItemSkeleton>>;
}

export type TypeNavigationSkeleton = EntrySkeletonType<TypeNavigationFields, "navigation">;
export type TypeNavigation<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNavigationSkeleton, Modifiers, Locales>;

export interface TypeNavItemFields {
    title: EntryFieldTypes.Symbol;
    path: EntryFieldTypes.Symbol;
    includeInProd?: EntryFieldTypes.Boolean;
}

export type TypeNavItemSkeleton = EntrySkeletonType<TypeNavItemFields, "navItem">;
export type TypeNavItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNavItemSkeleton, Modifiers, Locales>;

export interface TypeProductFields {
    name: EntryFieldTypes.Symbol;
    id: EntryFieldTypes.Integer;
    listed: EntryFieldTypes.Boolean;
    description: EntryFieldTypes.Text;
    price: EntryFieldTypes.Number;
    currencyCode: EntryFieldTypes.Symbol<"CHF" | "EUR" | "GBP" | "USD">;
    categories?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCategorySkeleton>>;
    heroImage: EntryFieldTypes.AssetLink;
    images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    richTextDescription?: EntryFieldTypes.RichText;
}

export type TypeProductSkeleton = EntrySkeletonType<TypeProductFields, "product">;
export type TypeProduct<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductSkeleton, Modifiers, Locales>;