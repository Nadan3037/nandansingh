import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://karkhana.co.in/wp-content/uploads/2021/08/cropped-Karkhana-Logo-01-e1671467691545-180x180.png"
								alt="karkhana"
								className="work-image"
							/>
							<div className="work-title">Karkhana</div>
							<div className="work-subtitle">
								Cheif Operating Officer
							</div>
							<div className="work-duration">2018 - Present</div>
						</div>

						{/* <div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Twitter</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div> */}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
