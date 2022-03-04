import React from "react";
import * as S from "./styles";

const MeetingDetail = () => {
	const bookCover =
		"https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
	const meetingImg =
		"https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80";
	const meetingNotes = [
		"https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		"https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		"https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	];

	const afterBooks = [
		"https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
		"https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		"https://images.unsplash.com/photo-1510172951991-856a654063f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		"https://images.unsplash.com/photo-1608099269227-82de5da1e4a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
		"https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	];
	const profile =
		"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80";

	return (
		<S.Main>
			<S.Figure>
				<S.Title>모임 이름</S.Title>
				<S.NumberOfMembers>1/4명 참여중</S.NumberOfMembers>
				<S.MeetingImg src={meetingImg} />
			</S.Figure>
			<S.Intro>
				<S.Figcaption>
					마감임박 / 2.12(토)시작 / 6PM / 격주 2회 / 은영 리더
				</S.Figcaption>
				<S.Button>신청하기</S.Button>
				<S.Button>찜하기</S.Button>
			</S.Intro>
			<S.Description>우리모임 소개 및 진행 내용 목표 등등</S.Description>
			<S.CurrentMeeting>
				<S.SubTitle>현재진행중</S.SubTitle>
				<S.CurrentContainer>
					<S.Book>
						<S.BookCover src={bookCover} alt="BookCover" />
					</S.Book>
					<S.Members>
						<S.Member>
							<S.Profile src={profile} />
							너무 재미가 있어요
						</S.Member>
						<S.Member>
							<S.Profile src={profile} />
							너무 재미가 있어요
						</S.Member>
						<S.Member>
							<S.Profile src={profile} />
							너무 재미가 있어요
						</S.Member>
						<S.Member>
							<S.Profile src={profile} />
							너무 재미가 있어요
						</S.Member>
						<S.Member>
							<S.Profile src={profile} />
							너무 재미가 있어요
						</S.Member>
						<S.Member>
							<S.Profile src={profile} />
							너무 재미가 있어요
						</S.Member>
					</S.Members>
				</S.CurrentContainer>
			</S.CurrentMeeting>
			<S.AfterBooks>
				<S.SubTitle>진행예정도서</S.SubTitle>
				<S.BooksContainer>
					{afterBooks.map((book, idx) => (
						<S.Book>
							<S.BookCover key={idx} src={book} alt="bookCover" />
						</S.Book>
					))}
				</S.BooksContainer>
			</S.AfterBooks>
			<S.MeetingNotes>
				<S.SubTitle>모임 노트</S.SubTitle>
				<S.NotesContainer>
					{meetingNotes.map((note, idx) => (
						<S.Note>
							<S.NoteUser>유저 1</S.NoteUser>
							<S.BookCover key={idx} src={note} alt="bookCover" />
						</S.Note>
					))}
				</S.NotesContainer>
			</S.MeetingNotes>
			<S.Map>모임 장소</S.Map>
		</S.Main>
	);
};

export default MeetingDetail;
