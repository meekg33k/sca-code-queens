//this is a disorganised file that will be deleted later
const navbar = ["Home", "Organise", "How it works", "Sign in"]
<div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

<nav className="navlinks">{navname}</nav>
//const navComponent = navItem.map(menu => <Navigation key={menu.id} navname={menu} />)
const submenu = document.addquerySelector(".submenu");
onClick = {{submenu}.classList.toggle("subactive")}

const navItems = [
    {name:"Home"}, 
    {name:"Organise", subMenus: ['Submenu 2-1', 'Submenu 2-2', 'Submenu 2-3' ]},
    {name:"How it works", subMenus: ['Submenu 3-1', 'Submenu 3-2', 'Submenu 3-3' ]},
    {name:"Sign in", subMenus: ['Submenu 4-1', 'Submenu 4-2', 'Submenu 4-3' ]}
    ]