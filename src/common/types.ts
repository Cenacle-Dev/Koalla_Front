import { LOCATION, CATEGORY } from "./constant";

export type Location = typeof LOCATION[number]
export type Category = typeof CATEGORY[number]

export type Nullable<Element> = Element | null;
export type Undefinable<Element> = Element | undefined;
export type Optional<Element> = Nullable<Element> | Undefinable<Element>