const language = 'en';
const ramadanDate = "March/31/2025";
const qorbanDate = "June/7/2025";

const events = [
    { id: "ny", name: "New Year", date: "January/1", type: "holiday", everyYear: true },
    { id: "def", name: "Defenders Day", date: "January/14", type: "holiday", everyYear: true },
    { id: "wday", name: "Women's Day", date: "March/8", type: "holiday", everyYear: true },
    { id: "nav", name: "Navruz", date: "March/21", type: "holiday", everyYear: true },
    { id: "lab", name: "Memorial Day", date: "May/9", type: "holiday", everyYear: true },
    { id: "child", name: "Children's Day", date: "June/1", type: "holiday", everyYear: true },
    { id: "ind", name: "Independence Day", date: "September/1", type: "holiday", everyYear: true },
    { id: "teach", name: "Teachers Day", date: "October/1", type: "holiday", everyYear: true },
    { id: "lang", name: "Uzbek Language Day", date: "October/21", type: "holiday", everyYear: true },
    { id: "flag", name: "Flag Day", date: "November/18", type: "holiday", everyYear: true },
    { id: "cons", name: "Constitution Day", date: "December/8", type: "holiday", everyYear: true },
    { id: "ram", name: "Eid al-Fitr", date: ramadanDate, type: "holiday" },
    { id: "qurb", name: "Eid al-Adha", date: qorbanDate, type: "holiday" },
    {
        id: "asDay",
        name: "Aslzoda's Day 💙✨",
        date: "October/23",
        type: "birthday",
        color: "#ff66c4"
    },
    {
        id: "myB",
        name: "My Birthday",
        date: "October/23",
        type: "birthday",
        color: "#ff1493",
        everyYear: true
    },
    {
        id: "ielts",
        name: "IELTS Study Goal",
        date: "April/1/2025",
        type: "event",
        color: "#1e90ff"
    }
];

$(document).ready(function () {
    setTimeout(() => {
        $("#calendar").evoCalendar({
            theme: "Default",
            format: 'mm/dd/yyyy',
            language: language,
            todayHighlight: true,
            sidebarDisplayDefault: true,
            eventDisplayDefault: true,
            calendarEvents: events
        });

        // Loader yashirish
        const loader = document.getElementById('loader');
        if (loader) loader.style.display = 'none';

        // Event tanlash logic
        $("#calendar").on('selectEvent', function (event, activeEvent) {
            const checkSecret = (ev) => { if (ev.id === 'asDay') openSecret(); };
            if (Array.isArray(activeEvent)) {
                activeEvent.forEach(checkSecret);
            } else if (activeEvent) {
                checkSecret(activeEvent);
            }
        });

        // Kirish animatsiyasi
        const card = document.getElementById('card');
        if (card) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    }, 700);
});

function openSecret() {
    const modal = document.getElementById('secretModal');
    if (modal) modal.classList.add('open');
}

function closeSecret() {
    const modal = document.getElementById('secretModal');
    if (modal) modal.classList.remove('open');
}

function setLanguage(l) {
    if (l !== 'en') return;
    $("#calendar").evoCalendar('destroy');
    document.getElementById('loader').style.display = 'flex';
    setTimeout(() => {
        $("#calendar").evoCalendar({
            theme: "Default",
            language: 'en',
            calendarEvents: events
        });
        document.getElementById('loader').style.display = 'none';
    }, 420);
}