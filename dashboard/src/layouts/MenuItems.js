import * as React from 'react';
import MenuItemLink from '../components/MenuItemLink'
import LogoutButton from '../components/LogoutButton'
import Typography from '@material-ui/core/Typography'
import HomeIcon from '@material-ui/icons/Home';

const MenuItems = ({ open, onMenuClick, dense }) => (
    <React.Fragment>
        <MenuItemLink
            to="/"
            primaryText={'Inicio'}
            leftIcon={<HomeIcon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
            exact
        />
        {/* <MenuItemLink
            to='/trivias'
            primaryText={trivias.options.label}
            leftIcon={<trivias.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
        />
        <MenuItemLink
            to='/users'
            primaryText={users.options.label}
            leftIcon={<users.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
        />
        <MenuItemLink
            to="/memberships"
            primaryText={'Planes y membresías'}
            leftIcon={<DollarIcon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
        />
        <MenuItemLink
            to='/reports'
            primaryText={reports.options.label}
            leftIcon={<reports.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
        />
        <MenuItemLink
            to="/configurations"
            primaryText={'Configuraciones'}
            leftIcon={<SettingsIcon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
        /> */}
        <LogoutButton>
            {open && (
                <Typography variant="subtitle1">
                    {'Cerrar sesión'}
                </Typography>
            )}
        </LogoutButton>
    </React.Fragment>
);

export default MenuItems;
