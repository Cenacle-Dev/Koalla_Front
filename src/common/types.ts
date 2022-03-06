import { LOCATION, CATEGORY } from "./constant";

export type Location = typeof LOCATION[number]
export type Category = typeof CATEGORY[number]

export type RegisterInfo = {
  readonly profileImage?: File;
  readonly nickname: string;
  readonly email: string;
  readonly password: string;
}

export type LoginInfo = {
  readonly email: string;
  readonly password: string;
};

export type CreateMeetingInfo = {
  image?: File;
  title: string;
  description: string;
  tags: string;
  location: Location;
  category: Category;
};

export type Nullable<Element> = Element | null;
export type Undefinable<Element> = Element | undefined;
export type Optional<Element> = Nullable<Element> | Undefinable<Element>