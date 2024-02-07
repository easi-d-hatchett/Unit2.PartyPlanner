const COHORT = "/2401-fsa-et-web-ft";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;
const endpoint = "/events";


const state = {
    events: [],
    selectedEvent: null // Add selectedEvent property to the state object
};

const eventList = document.querySelector("#events");

const addEventForm = document.querySelector("#addEvent");
addEventForm.addEventListener("submit",addEvent);

/**
 * Sync state with API and Rerender 
 */
async function render(){
    await getEvents();
    renderEvents();
}
render();

/**
 * Update state with events from API
 */

async function getEvents(){
    try {
        const response = await fetch(API_URL);
        const parsedResponse = await response.json();
        state.events = parsedResponse.data;
    } catch (error){
        console.error(error);
    }

}
/**
 * Render events from state
 */

function renderEvents() { 
    if (state.events.length === 0) {
    const $li =
    document.createElement("li");
    $li.textContent = "no events";
    return $li;
    } else {
        const $events= state.events.map((event)=> {
            const $event = document.createElement("li");
            $event.textContent = event.name;

            $event.addEventListener("click",(_event)=> {
                setSelectedEvent (event);
                renderSelectedEvent();

            });

            const $delete = document.createElement("button");
                $delete.addEventListener("click",(_event) => deleteEvent (event.id));
                $delete.textContent = "Delete Event";
                $event.append($delete);
                return $event;

        });
        eventList.replaceChildren(...$events);
    }
       
    }
    function renderSelectedEvent() {
        const $name = document.createElement("h2");
        $name.textContent = state.selectedEvent.name;
        const $time = document.createElement("li");
        $time.textContent = state.selectedEvent.time;
        const $date =document.createElement("li");
        $date.textContent= state.selectedEvent.date;
        const $location =document.createElement("li");
        $location.textContent= state.selectedEvent.location;
        const $description =document.createElement("li");
        $description.textContent= state.selectedEvent.description;
        const $eventDetails = [$name, $time, $date, $location, $description];

        selectedEvent.replaceChildren(...$eventDetails);
    }

    // Script

    async function render() {
        await getEvents();
        renderEvents();
    renderSelectedEvent();
    }

    window.addEventListener("load", render);
    