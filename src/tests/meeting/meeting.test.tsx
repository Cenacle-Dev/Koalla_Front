import { render } from "@testing-library/react";
import Meeting from "../../components/meeting/meeting";

describe("모임 카드 테스트", () => {
	let title: any;
	let body: any;
	let tag: any;
	it("모임 카드 스냅샷", () => {
		title = "모임1";
		body = "모임 내용입니다.";
		tag = "#태그1";
		const view = render(<Meeting title={title} body={body} tag={tag} />);
		expect(view.container).toMatchSnapshot();
	});
});
