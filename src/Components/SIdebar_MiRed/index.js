import { IconSidebar } from './IconSidebar';
import DateRangeIcon from '@material-ui/icons/DateRange';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import PeopleIcon from '@material-ui/icons/People';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import BusinessIcon from '@material-ui/icons/Business';
import ForumIcon from '@material-ui/icons/Forum';
import './styles.css'

export const SidebarMiRed = () => {
    return (
        <div className="sidebar__mired">
           <h3 className="sidebar__text">Getionar mi Red</h3>
            <div  className="sidebar__top_mired">
                <IconSidebar Icon={PeopleIcon} color="gray" title='Contatos'/>
                <IconSidebar Icon={RecentActorsIcon} color="gray" title='Contatos'/>
                <IconSidebar Icon={HowToRegIcon} color="gray" title='Gente que Sigo'/>
                <IconSidebar Icon={DateRangeIcon} color="gray" title='Eventos'/>
                <IconSidebar Icon={BusinessIcon} color="gray" title='Paginas'/>
                <IconSidebar Icon={ForumIcon} color="gray" title='Newsletters'/>
            </div>
        </div>
    )
}
