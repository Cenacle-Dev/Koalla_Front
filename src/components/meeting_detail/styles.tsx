import styled from "styled-components";

const Main = styled.main`
	background-color: #fdfdfd;
`;
const Figure = styled.figure`
	position: relative;
	border-radius: 6px;
`;
const Title = styled.h2`
	font-size: 20px;
	color: white;
	position: absolute;
	left: 10px;
	top: -10px;
`;

const SubTitle = styled.h3``;

const MeetingImg = styled.img`
	width: 100%;
	height: 200px;
	border-radius: 6px;
`;
const NumberOfMembers = styled.div`
	color: white;
	border: 1px solid white;
	font-size: 14px;
	border-radius: 20px;
	padding: 6px;
	position: absolute;
	bottom: 10px;
	right: 10px;
`;
const Intro = styled.div`
	font-size: 18px;
	display: flex;
	margin-bottom: 20px;
	justify-content: center;
	gap: 8px;
`;
const Figcaption = styled.figcaption``;
const Button = styled.button`
	background-color: grey;
	color: white;
`;
const Description = styled.div`
	border: 1px solid gray;
	padding: 4px 8px;
	text-align: left;
`;
const CurrentMeeting = styled.div`
	text-align: left;
	padding: 6px;
`;
const CurrentContainer = styled.div`
	display: flex;
	@media (max-width: 640px) {
		flex-direction: column;
		align-items: center;
	}
`;
const Book = styled.div`
	width: 200px;
	height: 240px;
	margin-right: 20px;
`;
const BookCover = styled.img`
	width: 200px;
	height: 240px;
	border-radius: 6px;
`;
const Members = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 640px) {
		margin-top: 10px;
		flex-direction: column;
		align-items: flex-end;
		gap: 10px;
	}
`;
const Member = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	flex: 0 0 50%;
`;
const Profile = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 50%;
`;
const AfterBooks = styled.div`
	text-align: left;
`;
const BooksContainer = styled.ul`
	display: flex;
`;
const MeetingNotes = styled.div`
	text-align: left;
`;
const NotesContainer = styled.ul`
	display: flex;
	gap: 20px;
`;
const Note = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
`;
const NoteUser = styled.h3`
	position: absolute;
	bottom: 2px;
	color: white;
`;
const Map = styled.div``;

export {
	AfterBooks,
	MeetingImg,
	Button,
	Intro,
	CurrentMeeting,
	Description,
	Figcaption,
	Figure,
	Main,
	Map,
	MeetingNotes,
	NumberOfMembers,
	Title,
	Book,
	Member,
	Members,
	Note,
	CurrentContainer,
	BookCover,
	Profile,
	SubTitle,
	BooksContainer,
	NotesContainer,
	NoteUser,
};
