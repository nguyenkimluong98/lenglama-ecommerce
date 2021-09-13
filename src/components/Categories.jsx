import React from "react";
import { categories } from "../data/data";
import styled from "styled-components";
import Category from "./Category";
import { mobile } from "../responsive";

const Container = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
	${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
	return (
		<Container>
			{categories.map((item) => (
				<Category key={item.id} item={item} />
			))}
		</Container>
	);
};

export default Categories;
