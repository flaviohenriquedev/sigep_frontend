import { CgMenuGridR } from 'react-icons/cg';

import Client from '@/components/layout/core/header/client/Client';
import HomeButton from '@/components/layout/core/header/home_button/HomeButton';
import UserInfo from '@/components/layout/core/header/user_info/UserInfo';

import ToggleTheme from './toggle_theme/ToggleTheme';

export default function Header() {
    return (
        <div className="fixed top-0 w-full ">
            <header className="flex h-14 items-center justify-between bg-primary text-fontcolor">
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem'
                    }}
                >
                    <HomeButton href={'/'}>
                        <CgMenuGridR size={30} />
                    </HomeButton>
                    <Client />
                </div>
                <ToggleTheme />
                <UserInfo />
            </header>
        </div>
    );
}
