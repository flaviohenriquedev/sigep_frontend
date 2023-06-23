import * as Data from '../../data/shopping/side_menu/ShoppingSideMenuData'
import Menu from './Menu'

export default function Page() {

    function renderMenu(data: Data.MenuItem[]) {
        return data.map(m => {
            return <Menu icon={m.icon}
                         description={m.description}
                         pageName={m.pageName}
                         submenu={m.submenu}/>
        })
    }

    return (
        <ul>
            {renderMenu(Data.ShoppingSideMenuData)}
        </ul>
    )
}