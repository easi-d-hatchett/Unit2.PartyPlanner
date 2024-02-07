const COHORT = 2401-fsa-et-web-ft-sf;
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;
const endpoint = "/events";


const state = {
    events: [],
};

const eventList = document.querySelector("#events");

const addEventForm=document.querySelector("#addEvent");
addEventForm.addEventListener("submit,addEvent");

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
        const response = await  fetch(API_URL);
        const json = await response.json();
        state.events = json.data;
    } catch (error){
        console.error(error);
    }

}
/**
 * Render events from state
 */

function renderEvents() {
    if(!state.events.length) {
       eventList.innerHTML=<li>"no events"</li>
        return;
    }
}
const eventCards =state.events.map((Event))
=> {
    const li = document.createElement("li");
    li.innerHTML=<h2>${event.name}</h2>
}