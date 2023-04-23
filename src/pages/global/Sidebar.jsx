import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { tokens } from "../../theme";

const Item = ({ title, to, icon, selected, setSelected, colors }) => {
    return (
        <MenuItem
            active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    const toggleCollapsed = () => setIsCollapsed(!isCollapsed);

    const renderHeader = () => {
        if (isCollapsed) return null;
        return (
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
            >
                <Typography variant="h4" color={colors.grey[100]}>
                    &copy; JB
                </Typography>
                <IconButton onClick={toggleCollapsed}>
                    <MenuOutlinedIcon />
                </IconButton>
            </Box>
        );
    };

    const renderSidebarContent = () => {
        if (isCollapsed) return null;
        return (
            <Box mb="25px">
                <Box textAlign="center">
                    <Typography
                        variant="h4"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{ m: "10px 0 0 0" }}
                    >
                        Websocket-channels
                    </Typography>
                    <Typography variant="h6" color={colors.greenAccent[500]}>
                        for development
                    </Typography>
                </Box>
            </Box>
        );
    };

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar 
                collapsed={isCollapsed}
                // style={{
                //     overflowY: 'scroll',
                //     scrollbarWidth: '10px',
                //     ScrollbarTrackColor: colors.primary[400],
                // }}
            >
                <Menu iconShape="square">
                    <MenuItem
                        onClick={toggleCollapsed}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
                    >
                        {renderHeader()}
                    </MenuItem>
                    {renderSidebarContent()}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            colors={colors}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
