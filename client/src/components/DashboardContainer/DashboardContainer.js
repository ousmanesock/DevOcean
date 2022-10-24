import * as React from 'react';
import {
	AppBar,
	Box,
	CssBaseline,
	Drawer,
	List,
	ListItemButton,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import Appbar from "../../components/AppBar/Appbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";

const drawerWidth = 200;

const listitems = [
	{
		item: 0,
		key: 'workspace',
		label: 'Add Workspace',
		route: '/addWorkspace'
		// icon: <DashboardIcon />,
	},
	{
		item: 1,
		key: 'taskLists',
		label: 'Add TaskLists',
		route: '/addTask'
		// icon: <AddShoppingCartIcon />,
	},
	{
		item: 2,
		key: 'docs',
		label: 'Add Documents',
		route: '/addDoc'
		// icon: <AnalyticsIcon />,
	},
	{
		item: 3,
		key: 'teams',
		label: 'Add Teams',
		route: '/addTeam'
		// icon: <InventoryIcon />,
	},
	{
		item: 4,
		key: 'members',
		label: 'Add Members',
		route: '/addMember'
		// icon: <ReviewsOutlinedIcon />,
	},
	{
		item: 5,
		key: 'threads',
		label: 'Add Threads',
		route: '/threads'
		// icon: <ChatOutlinedIcon />,
	},

];

const pages = [
	{ title: 'Teams', route: '/teams' },
	{ title: 'Workspaces', route: '/workspaces' },
	{ title: 'TaskLists', route: '/taskLists' },
	{ title: 'Docs', route: '/docs' },
	{ title: 'Members', route: '/members' },
	{ title: 'Threads', route: '/threads' },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function DashboardContainer(props) {
	const navigate = useNavigate();
	const { window, children } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [selectedIndex, setSelectedIndex] = React.useState();
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = (route) => {
		console.log("🚀 ~ file: DashboardContainer.js ~ line 97 ~ handleCloseNavMenu ~ route", route)
		setAnchorElNav(null);
		navigate(route);
	};

	const handleCloseUserMenu = (setting) => {
		console.log("🚀 ~ file: DashboardContainer.js ~ line 107 ~ handleCloseUserMenu ~ setting", setting)
		setAnchorElUser(null);
		if (setting === "Logout")
			navigate("/login");
	};
	const handleListItemClick = (event, index, item) => {
		console.log("🚀 ~ file: DashboardContainer.js ~ line 105 ~ handleListItemClick ~ index", index)
		console.log("🚀 ~ file: DashboardContainer.js ~ line 105 ~ handleListItemClick ~ item", item)
		setSelectedIndex(index);
		navigate(item.route);

	};

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}
		>
			<div style={{ margin: '12px 0px 0px 15px', paddingTop: '10px' }}>

			</div>
			<List>
				{listitems.map((item, index) => (
					<ListItem
						button
						onClick={(event) => handleListItemClick(event, index, item)}
						sx={{ paddingTop: item.key === 'setting' ? '200px' : '20px' }}
						key={item.key}
						disablePadding
					>
						<ListItemButton selected={selectedIndex === item.item}>
							<ListItemIcon style={{ minWidth: '40px', color: selectedIndex === item.item ? '#fff' : '#85869B' }}>
								{item.icon}
							</ListItemIcon>
							<ListItemText
								primaryTypographyProps={{ color: selectedIndex === item.item ? '#fff' : '#85869B' }}
								primary={item.label}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			{/* <Appbar /> */}

			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar disableGutters>
					<AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						DevOcean
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page.title} onClick={() => handleCloseNavMenu(page.route)}>
									<Typography textAlign="center">{page.title}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						LOGO
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Button
								key={page.title}
								onClick={() => handleCloseNavMenu(page.route)}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page.title}

							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#10113A' },
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#10113A' },
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
}
