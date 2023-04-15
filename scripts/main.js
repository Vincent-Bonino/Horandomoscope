const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const week_days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

function set_up_page() {
    write_title_date()
    generate_content()
}

function write_title_date() {
    // Get elements
    week_day = today_date.getDay()
    day = today_date.getDate();
    month_index = today_date.getMonth();
    year = today_date.getFullYear();
    
    // Build and write string
    document.getElementById("today_date").innerHTML = `Horoscope du ${week_days[week_day]} ${day} ${months[month_index]} ${year}`;
}