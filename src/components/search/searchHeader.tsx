import React, { useEffect, useState } from "react";
import * as S from "./styles";
import meetingData from "../../common/dummy.json";
import SearchIcon from "@mui/icons-material/Search";
import Meetings from "../meetings/meetings";
import Categories from "./categories/categories";
import useDebounce from "../../hooks/useDebounce";

export interface IProps {
  topics: {
    id: number;
    title: string;
    body: string;
    category: string;
    place: string;
    image: string;
  }[];
}

export type PlaceType = "online" | "offline" | "all";

const SearchHeader = () => {
  const [inputWord, setInputWord] = useState<string>("");
  const [place, setPlace] = useState<PlaceType>("all");
  const [category, setCategory] = useState<string | null>(null);
  const [meetings, setMeetings] = useState<IProps["topics"]>(
    meetingData.topics
  );
  const debouncedValue = useDebounce<string>(inputWord);

  const searchByKeyword = (list: IProps["topics"], keyword: string) => {
    return list.filter(
      (meeting) =>
        meeting.title.includes(keyword) || meeting.body.includes(keyword)
    );
  };

  const searchByCategory = (
    list: IProps["topics"],
    category: string | null
  ) => {
    return list.filter((meeting) => meeting.category === category);
  };

  const searchByPlace = (list: IProps["topics"], place: PlaceType) => {
    return list.filter((meeting) => meeting.place === place);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputWord(event.target.value);
  };

  useEffect(() => {
    let list = searchByKeyword(meetingData["topics"], debouncedValue);
    if (category) {
      list = searchByCategory(list, category);
    }
    if (place !== "all") {
      searchByPlace(list, place);
    }
    setMeetings(list);
  }, [debouncedValue, category, place]);

  return (
    <S.Main>
      <S.Search>
        <S.Form>
          <S.SearchIconBox>
            <SearchIcon />
          </S.SearchIconBox>
          <S.Input
            type="text"
            placeholder="찾고 있는 모임을 알려주세요."
            onChange={handleInput}
            value={inputWord}
          />
        </S.Form>
      </S.Search>
      <Categories handleCategory={setCategory} handlePlace={setPlace} />
      <Meetings data={meetings} />
    </S.Main>
  );
};

export default SearchHeader;
