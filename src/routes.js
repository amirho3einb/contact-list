import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import NotFound from "./pages/NotFound";

const routes = [
    {path: '/add', component: AddContact, exact: true},
    {path: '/', component: <ContactList />, exact: true},
    { component: NotFound }, // should be last route
]
export default routes;