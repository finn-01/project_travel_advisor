import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import AccessAlarm from "@mui/icons-material/AccessAlarm";

import useStyle from "./style";

const Header = () => {
	const classes = "a";

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h5">Travel Advisor</Typography>
				<Box display="flex">
					<Typography variant="h6">Explore new places</Typography>
					{/* <Autocomplete> */}
					<div>
						<div>
							<AccessAlarm />
						</div>
						<InputBase placeholder="Search..." />
					</div>
					{/* </Autocomplete> */}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
