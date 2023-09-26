function TopBar(elementId = "top-bar") {
    let topBar = document.getElementById(elementId) || null;

    // helper
    const div = () => document.createElement("div");

    if (!topBar) {
        topBar = div();
        topBar.id = elementId;
    }

    const leftNav = div();
    leftNav.id = "left-nav";

    const logo = div();
    logo.id = "logo";

    const rightNav = div();
    rightNav.id = "right-nav";

    const buy = div();
    buy.id = "left-nav-buy";
    buy.innerText = "Buy";
    buy.classList.add("nav-button");

    const rent = div();
    rent.id = "left-nav-rent";
    rent.innerText = "Rent";
    rent.classList.add("nav-button");


    const sell = div();
    sell.id = "left-nav-sell";
    sell.innerText = "Sell";
    sell.classList.add("nav-button");

    const homeLoans = div();
    homeLoans.id = "left-nav-home-loans";
    homeLoans.innerText = "Home Loans";
    homeLoans.classList.add("nav-button");

    const agentFinder = div();
    agentFinder.id = "left-nav-agent-finder";
    agentFinder.innerText = "Agent Finder";
    agentFinder.classList.add("nav-button");

    const manageRentals = div();
    manageRentals.id = "right-nav-manage-rentals";
    manageRentals.innerText = "Manage Rentals";
    manageRentals.classList.add("nav-button");

    const advertise = div();
    advertise.id = "right-nav-advertise";
    advertise.innerText = "Advertise";
    advertise.classList.add("nav-button");

    const help = div();
    help.id = "right-nav-help";
    help.innerText = "Help";
    help.classList.add("nav-button");

    const profile = div();
    profile.id = "right-nav-profile";
    profile.classList.add("nav-button");

    leftNav.appendChild(buy);
    leftNav.appendChild(rent);
    leftNav.appendChild(sell);
    leftNav.appendChild(homeLoans);
    leftNav.appendChild(agentFinder);

    rightNav.appendChild(manageRentals);
    rightNav.appendChild(advertise);
    rightNav.appendChild(help);
    rightNav.appendChild(profile);

    topBar.appendChild(leftNav);
    topBar.appendChild(logo);
    topBar.appendChild(rightNav);

    return topBar;
}

export default TopBar;
