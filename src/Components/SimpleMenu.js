import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu({ season, handelList, seasons }) {
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchorEl(null);
        handelList(event.currentTarget.value)
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {season}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {seasons.map((data, index) => (
                    <div key={index}>

                        <MenuItem onClick={handleClose} value={data.id}>{data.league.name + "  " + data.startYear}</MenuItem>
                    </div>
                ))}
            </Menu>
        </div>
    );
}